"use client";

import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { isAdminUser, refreshClaims } from "@/lib/adminAuth";
import { MenuItemForm, type MenuItemDoc } from "@/components/admin/MenuItemForm";
import { MenuItemTable } from "@/components/admin/MenuItemTable";
import { products as staticProducts } from "@/data/products";

type ViewState =
  | { kind: "loading" }
  | { kind: "login" }
  | { kind: "forbidden"; user: User }
  | { kind: "panel"; user: User };

function byCategoryThenName(a: MenuItemDoc, b: MenuItemDoc) {
  const c = a.category.localeCompare(b.category, "tr");
  if (c !== 0) return c;
  return a.name.tr.localeCompare(b.name.tr, "tr");
}

export default function AdminPage() {
  const [view, setView] = useState<ViewState>({ kind: "loading" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  const [items, setItems] = useState<MenuItemDoc[]>([]);
  const [loadingItems, setLoadingItems] = useState(false);
  const [itemsError, setItemsError] = useState<string | null>(null);
  const [editing, setEditing] = useState<MenuItemDoc | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<MenuItemDoc | null>(null);

  const canEdit = view.kind === "panel";

  async function loadItems() {
    setLoadingItems(true);
    setItemsError(null);
    try {
      const snap = await getDocs(collection(getFirebaseDb(), "menuItems"));
      const next = snap.docs
        .map((d) => d.data() as MenuItemDoc)
        .filter((x) => x && typeof x.slug === "string");
      next.sort(byCategoryThenName);
      setItems(next);
    } catch (e) {
      setItemsError("Ürünler yüklenemedi. Firestore bağlantısını ve kuralları kontrol edin.");
    } finally {
      setLoadingItems(false);
    }
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(getFirebaseAuth(), async (user) => {
      if (!user) {
        setView({ kind: "login" });
        return;
      }
      const admin = await isAdminUser(user);
      if (!admin) {
        setView({ kind: "forbidden", user });
        return;
      }
      setView({ kind: "panel", user });
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (view.kind === "panel") {
      void loadItems();
    }
  }, [view.kind]);

  const headerRight = useMemo(() => {
    if (view.kind === "panel") return `Admin: ${view.user.email ?? ""}`;
    if (view.kind === "forbidden") return `Giriş: ${view.user.email ?? ""}`;
    return "";
  }, [view]);

  async function handleLogin() {
    setAuthError(null);
    try {
      const cred = await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
      const user = cred.user;
      const admin = await refreshClaims(user);
      if (!admin) {
        setView({ kind: "forbidden", user });
        return;
      }
      setView({ kind: "panel", user });
    } catch (e) {
      setAuthError("Giriş başarısız. E-posta/şifreyi kontrol edin.");
    }
  }

  async function handleLogout() {
    await signOut(getFirebaseAuth());
    setItems([]);
    setEditing(null);
    setView({ kind: "login" });
  }

  async function handleSave(docData: MenuItemDoc) {
    if (!canEdit) return;
    setSaving(true);
    setItemsError(null);
    try {
      await setDoc(
        doc(getFirebaseDb(), "menuItems", docData.slug),
        {
          ...docData,
          updatedAt: serverTimestamp(),
          createdAt: (docData as any).createdAt ?? serverTimestamp(),
        },
        { merge: true }
      );
      setEditing(null);
      await loadItems();
    } catch (e) {
      setItemsError("Kaydetme başarısız. Admin yetkisi ve Firestore rules kontrol edin.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(slug: string) {
    if (!canEdit) return;
    setDeletingSlug(slug);
    setItemsError(null);
    try {
      await deleteDoc(doc(getFirebaseDb(), "menuItems", slug));
      await loadItems();
    } catch (e) {
      setItemsError("Silme başarısız. Admin yetkisi ve Firestore rules kontrol edin.");
    } finally {
      setDeletingSlug(null);
    }
  }

  async function handleSeedFromStatic() {
    setSeeding(true);
    setItemsError(null);
    try {
      const db = getFirebaseDb();
      const batchWrites = staticProducts.map((p) =>
        setDoc(
          doc(db, "menuItems", p.slug),
          {
            ...p,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          },
          { merge: true }
        )
      );
      await Promise.all(batchWrites);
      await loadItems();
    } catch (e) {
      setItemsError("Statik menü Firestore'a aktarılırken hata oluştu. Yetki ve rules ayarlarını kontrol edin.");
    } finally {
      setSeeding(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-16 w-full">
        <div className="flex items-center justify-center mb-8">
          <h1 className="inline-block bg-red-600 text-white font-hero text-2xl md:text-3xl uppercase tracking-[0.2em] px-6 py-3 shadow-[8px_8px_0_0_#000000] text-center">
            ADMIN PANEL
          </h1>
        </div>

        {view.kind === "loading" && <div>Yükleniyor...</div>}

        {view.kind === "login" && (
          <div className="max-w-xl mx-auto bg-white border-2 border-neutral-900 shadow-[10px_10px_0_0_#000000] p-6">
            {authError && <div className="text-sm text-[#cc0000] font-semibold mb-4">{authError}</div>}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                void handleLogin();
              }}
            >
              <div>
                <label className="block text-sm font-medium mb-1">E-posta</label>
                <input
                  className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Şifre</label>
                <input
                  type="password"
                  className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#cc0000] text-white py-3 text-sm font-extrabold tracking-[0.22em] uppercase hover:bg-[#b30000] transition-colors disabled:opacity-60 shadow-[6px_6px_0_0_#000000]"
              >
                GİRİŞ YAP
              </button>
            </form>
          </div>
        )}

        {view.kind === "forbidden" && (
          <div className="bg-white border-2 border-neutral-900 shadow-[10px_10px_0_0_#000000] p-6">
            <div className="text-[10px] font-bold tracking-[0.15em] text-[#cc0000] mb-2">YETKİ GEREKİYOR</div>
            <h2 className="text-xl font-extrabold mb-2">Bu hesap admin değil.</h2>
            <p className="text-sm text-neutral-700">
              Bu e-posta için Firebase Auth Custom Claim olarak <code>admin:true</code> tanımlanmalı.
            </p>
            <p className="text-sm text-neutral-700 mt-2">
              Claim verildikten sonra kullanıcı tekrar giriş yapmalı (token yenilenmesi için).
            </p>
          </div>
        )}

        {view.kind === "panel" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {itemsError && <div className="text-sm text-[#cc0000] font-semibold">{itemsError}</div>}
              <MenuItemTable
                items={items}
                onEdit={(it) => setEditing(it)}
                onDelete={(slug) => {
                  const found = items.find((i) => i.slug === slug) ?? null;
                  setPendingDelete(found);
                }}
                deletingSlug={deletingSlug}
              />
              {items.length === 0 && (
                <button
                  className="w-full border-2 border-neutral-900 px-4 py-3 text-xs font-extrabold tracking-[0.18em] uppercase hover:border-red-600 transition-colors disabled:opacity-60"
                  onClick={handleSeedFromStatic}
                  disabled={loadingItems || seeding}
                >
                  {seeding ? "Aktarılıyor..." : "Statik menüyü Firestore'a aktar"}
                </button>
              )}
              <button
                className="w-full border-2 border-neutral-900 px-4 py-3 text-xs font-extrabold tracking-[0.18em] uppercase hover:border-red-600 transition-colors"
                onClick={() =>
                  setEditing({
                    slug: "",
                    category: "Burgerler",
                    name: { tr: "", en: "" },
                    description: { tr: "", en: "" },
                    ingredients: [],
                    calories: 0,
                    tags: [],
                    price: 0,
                  })
                }
                disabled={loadingItems}
              >
                YENİ ÜRÜN EKLE
              </button>
            </div>

            <div>
              <MenuItemForm
                initial={editing ?? undefined}
                onSave={handleSave}
                onCancel={() => setEditing(null)}
                busy={saving}
              />
            </div>
          </div>
        )}
      </main>
      {pendingDelete && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60">
          <div className="bg-white border-2 border-neutral-900 shadow-[10px_10px_0_0_#000000] p-6 max-w-sm w-full mx-4">
            <div className="text-[10px] font-bold tracking-[0.15em] text-[#cc0000] mb-2">ONAY</div>
            <h2 className="text-lg font-extrabold mb-3">Ürünü silmek istiyor musun?</h2>
            <p className="text-sm text-neutral-800 mb-6">
              <span className="font-semibold">"{pendingDelete.name.tr}"</span> ürününü menüden kaldırmak üzeresin. Bu işlem geri
              alınamaz.
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="border-2 border-neutral-900 px-4 py-2 text-xs font-extrabold tracking-[0.18em] uppercase hover:border-red-600 transition-colors"
                onClick={() => setPendingDelete(null)}
                disabled={deletingSlug === pendingDelete.slug}
              >
                İptal
              </button>
              <button
                className="bg-[#cc0000] text-white px-4 py-2 text-xs font-extrabold tracking-[0.18em] uppercase hover:bg-[#b30000] transition-colors shadow-[6px_6px_0_0_#000000] disabled:opacity-60"
                onClick={async () => {
                  const slug = pendingDelete.slug;
                  setPendingDelete(null);
                  await handleDelete(slug);
                }}
                disabled={deletingSlug === pendingDelete.slug}
              >
                {deletingSlug === pendingDelete.slug ? "Siliniyor..." : "Evet, sil"}
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}


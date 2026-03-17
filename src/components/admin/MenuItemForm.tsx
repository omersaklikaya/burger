"use client";

import { useEffect, useMemo, useState } from "react";

export type MenuItemDoc = {
  slug: string;
  category: string;
  name: { tr: string; en: string };
  description: { tr: string; en: string };
  ingredients: string[];
  calories: number;
  tags: string[];
  price: number;
  image?: string;
};

type Props = {
  initial?: MenuItemDoc;
  onSave: (doc: MenuItemDoc) => Promise<void>;
  onCancel: () => void;
  busy?: boolean;
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/(^-|-$)+/g, "");
}

export function MenuItemForm({ initial, onSave, onCancel, busy }: Props) {
  const isEdit = Boolean(initial?.slug);
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [category, setCategory] = useState(initial?.category ?? "Burgerler");
  const [nameTr, setNameTr] = useState(initial?.name?.tr ?? "");
  const [nameEn, setNameEn] = useState(initial?.name?.en ?? "");
  const [descTr, setDescTr] = useState(initial?.description?.tr ?? "");
  const [descEn, setDescEn] = useState(initial?.description?.en ?? "");
  const [ingredients, setIngredients] = useState((initial?.ingredients ?? []).join("\n"));
  const [tags, setTags] = useState((initial?.tags ?? []).join(", "));
  const [calories, setCalories] = useState(String(initial?.calories ?? 0));
  const [price, setPrice] = useState(String(initial?.price ?? 0));
  const [image, setImage] = useState(initial?.image ?? "");
  const [error, setError] = useState<string | null>(null);

  const canAutoSlug = useMemo(() => !isEdit, [isEdit]);

  // initial değiştiğinde form alanlarını güncelle
  useEffect(() => {
    setSlug(initial?.slug ?? "");
    setCategory(initial?.category ?? "Burgerler");
    setNameTr(initial?.name?.tr ?? "");
    setNameEn(initial?.name?.en ?? "");
    setDescTr(initial?.description?.tr ?? "");
    setDescEn(initial?.description?.en ?? "");
    setIngredients((initial?.ingredients ?? []).join("\n"));
    setTags((initial?.tags ?? []).join(", "));
    setCalories(String(initial?.calories ?? 0));
    setPrice(String(initial?.price ?? 0));
    setImage(initial?.image ?? "");
    setError(null);
  }, [initial]);

  async function handleSave() {
    setError(null);
    const finalSlug = slugify(slug || nameTr);
    if (!finalSlug) return setError("Slug zorunlu.");
    if (!nameTr.trim()) return setError("İsim (TR) zorunlu.");
    if (!category.trim()) return setError("Kategori zorunlu.");
    const priceNum = Number(price);
    if (!Number.isFinite(priceNum) || priceNum <= 0) return setError("Fiyat geçerli olmalı.");
    const caloriesNum = Number(calories);
    if (!Number.isFinite(caloriesNum) || caloriesNum < 0) return setError("Kalori geçerli olmalı.");

    await onSave({
      slug: finalSlug,
      category,
      name: { tr: nameTr.trim(), en: nameEn.trim() },
      description: { tr: descTr.trim(), en: descEn.trim() },
      ingredients: ingredients
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      tags: tags
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      calories: caloriesNum,
      price: priceNum,
      image: image.trim() || undefined,
    });
  }

  return (
    <div className="bg-white border-2 border-neutral-900 shadow-[10px_10px_0_0_#000000] p-6">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <div className="text-[10px] font-bold tracking-[0.15em] text-[#cc0000] mb-2">MENÜ YÖNETİMİ</div>
          <h2 className="text-xl font-extrabold tracking-tight">{isEdit ? "Ürünü Düzenle" : "Yeni Ürün Ekle"}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="border-2 border-neutral-900 px-4 py-2 text-xs font-extrabold tracking-[0.18em] uppercase hover:border-red-600 transition-colors"
            onClick={onCancel}
            disabled={busy}
          >
            İptal
          </button>
          <button
            type="button"
            className="bg-[#cc0000] text-white px-4 py-2 text-xs font-extrabold tracking-[0.18em] uppercase hover:bg-[#b30000] transition-colors shadow-[6px_6px_0_0_#000000] disabled:opacity-60"
            onClick={handleSave}
            disabled={busy}
          >
            {busy ? "Kaydediliyor..." : "Kaydet"}
          </button>
        </div>
      </div>

      {error && <div className="text-sm text-[#cc0000] font-semibold mb-4">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">İsim (TR)</label>
          <input
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
            value={nameTr}
            onChange={(e) => {
              const v = e.target.value;
              setNameTr(v);
              if (canAutoSlug) setSlug(slugify(v));
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">İsim (EN)</label>
          <input
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Slug</label>
          <input
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            disabled={isEdit}
          />
          <p className="text-xs text-neutral-600 mt-1">{isEdit ? "Slug değiştirilemez." : "Boş bırakılırsa TR isimden üretilir."}</p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Kategori</label>
          <select
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {["Burgerler", "Hot Doglar", "Atıştırmalıklar", "Milkshake", "Tatlılar", "İçecekler"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Fiyat (TL)</label>
          <input
            type="number"
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={0}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Kalori</label>
          <input
            type="number"
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            min={0}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Açıklama (TR)</label>
          <textarea
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
            rows={3}
            value={descTr}
            onChange={(e) => setDescTr(e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Açıklama (EN)</label>
          <textarea
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
            rows={3}
            value={descEn}
            onChange={(e) => setDescEn(e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">İçindekiler (satır satır)</label>
          <textarea
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
            rows={5}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Etiketler (virgülle)</label>
          <input
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Görsel yolu/URL (opsiyonel)</label>
          <input
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <p className="text-xs text-neutral-600 mt-1">Örn: /images/burgers/bulls-burger.png</p>
        </div>
      </div>
    </div>
  );
}


"use client";

import type { MenuItemDoc } from "./MenuItemForm";

type Props = {
  items: MenuItemDoc[];
  onEdit: (item: MenuItemDoc) => void;
  onDelete: (slug: string) => void;
  deletingSlug?: string | null;
};

export function MenuItemTable({ items, onEdit, onDelete, deletingSlug }: Props) {
  return (
    <div className="bg-white border-2 border-neutral-900 shadow-[10px_10px_0_0_#000000] p-6">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <div className="text-[10px] font-bold tracking-[0.15em] text-[#cc0000] mb-2">ÜRÜNLER</div>
          <h2 className="text-xl font-extrabold tracking-tight">Menü Listesi</h2>
        </div>
        <div className="text-xs text-neutral-600">{items.length} ürün</div>
      </div>

      {/* Masaüstü görünümü: tablo */}
      <div className="border-2 border-neutral-900 hidden md:block">
        <table className="w-full text-sm table-fixed">
          <thead className="bg-neutral-50 border-b-2 border-neutral-900">
            <tr>
              <th className="text-left p-3 font-extrabold tracking-wide uppercase w-[28%]">Ürün</th>
              <th className="text-left p-3 font-extrabold tracking-wide uppercase w-[18%]">Kategori</th>
              <th className="text-left p-3 font-extrabold tracking-wide uppercase w-[14%]">Fiyat</th>
              <th className="text-left p-3 font-extrabold tracking-wide uppercase w-[30%] hidden sm:table-cell">
                Slug
              </th>
              <th className="text-right p-3 font-extrabold tracking-wide uppercase w-[24%]">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr key={it.slug} className="border-b border-neutral-200">
                <td className="p-3 font-semibold">{it.name.tr}</td>
                <td className="p-3">{it.category}</td>
                <td className="p-3 font-extrabold text-[#cc0000]">{it.price.toFixed(2)} TL</td>
                <td className="p-3 text-neutral-600 hidden sm:table-cell text-xs break-all">{it.slug}</td>
                <td className="p-3">
                  <div className="flex justify-end gap-2">
                    <button
                      className="border-2 border-neutral-900 px-3 py-1.5 text-xs font-extrabold tracking-[0.18em] uppercase hover:border-red-600 transition-colors"
                      onClick={() => onEdit(it)}
                    >
                      Düzenle
                    </button>
                    <button
                      className="border-2 border-neutral-900 px-3 py-1.5 text-xs font-extrabold tracking-[0.18em] uppercase hover:border-red-600 transition-colors disabled:opacity-60"
                      onClick={() => onDelete(it.slug)}
                      disabled={deletingSlug === it.slug}
                    >
                      {deletingSlug === it.slug ? "Siliniyor..." : "Sil"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td className="p-6 text-neutral-600" colSpan={5}>
                  Firestore&apos;da ürün bulunamadı. Sağdan yeni ürün ekleyin.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobil görünüm: kart listesi */}
      <div className="md:hidden space-y-3">
        {items.map((it) => (
          <div
            key={it.slug}
            className="border-2 border-neutral-900 px-3 py-3 text-sm flex flex-col gap-1"
          >
            <div className="flex justify-between items-baseline gap-2">
              <span className="font-semibold">{it.name.tr}</span>
              <span className="text-xs font-extrabold text-[#cc0000] whitespace-nowrap">
                {it.price.toFixed(2)} TL
              </span>
            </div>
            <div className="text-xs text-neutral-700">{it.category}</div>
            <div className="text-[10px] text-neutral-500 break-all">{it.slug}</div>
            <div className="mt-2 flex justify-end gap-2">
              <button
                className="border-2 border-neutral-900 px-3 py-1 text-[11px] font-extrabold tracking-[0.18em] uppercase hover:border-red-600 transition-colors"
                onClick={() => onEdit(it)}
              >
                Düzenle
              </button>
              <button
                className="border-2 border-neutral-900 px-3 py-1 text-[11px] font-extrabold tracking-[0.18em] uppercase hover:border-red-600 transition-colors disabled:opacity-60"
                onClick={() => onDelete(it.slug)}
                disabled={deletingSlug === it.slug}
              >
                {deletingSlug === it.slug ? "Siliniyor..." : "Sil"}
              </button>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="border-2 border-dashed border-neutral-300 px-3 py-4 text-xs text-neutral-600">
            Firestore&apos;da ürün bulunamadı. Sağdaki formdan yeni ürün ekleyin.
          </div>
        )}
      </div>
    </div>
  );
}


import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { X, ShoppingBag, ShieldCheck, Truck, Star, ArrowLeft } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (item: {
    name: string;
    price: number;
    img: string;
    variantName?: string;
  }) => void;
}

export const ProductDetailModal: React.FC<ProductDetailProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  const currentPrice = selectedVariant ? selectedVariant.harga : product.priceValue;
  const currentName = selectedVariant
    ? `${product.name} (${selectedVariant.nama})`
    : product.name;

  const handleAdd = () => {
    onAddToCart({
      name: currentName,
      price: currentPrice,
      img: product.img,
      variantName: selectedVariant ? selectedVariant.nama : undefined
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-xl overflow-hidden max-w-2xl mx-auto my-4 transition-all">
      {/* Top Bar */}
      <div className="p-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog</span>
        </button>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-5 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60 aspect-square">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-neutral-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {product.category}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-neutral-500 ml-1">
                  {product.rating || '4.9'} (Ulasan Terverifikasi)
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-neutral-900 leading-snug">
                {product.name}
              </h2>
            </div>

            {/* Price */}
            <div className="text-2xl font-extrabold text-rose-600">
              Rp {currentPrice.toLocaleString('id-ID')}
            </div>

            {/* Variant selector */}
            {product.variants && product.variants.length > 0 && (
              <div>
                <label className="block text-xs font-extrabold text-neutral-800 uppercase tracking-wider mb-2">
                  Pilih Tipe / Warna:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant?.nama === v.nama;
                    return (
                      <button
                        key={v.nama}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                          isSelected
                            ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        {v.nama} - Rp {v.harga.toLocaleString('id-ID')}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Guarantees */}
            <div className="pt-2 border-t border-neutral-100 grid grid-cols-2 gap-2 text-[11px] font-semibold text-neutral-600">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garansi Resmi 3 Bulan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-sky-600" />
                <span>e-Package Sameday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specs Box */}
        <div className="mt-8 p-5 bg-neutral-50 border border-neutral-200/80 rounded-2xl text-xs leading-relaxed text-neutral-700">
          <h4 className="font-extrabold text-neutral-900 text-sm mb-2">
            Spesifikasi & Deskripsi Produk
          </h4>
          <p className="mb-3 font-medium text-neutral-600">{product.specs.deskripsi}</p>
          {product.specs.bluetooth && (
            <p className="font-semibold text-neutral-800">
              • Connectivity: {product.specs.bluetooth}
            </p>
          )}
          {product.specs.baterai && (
            <p className="font-semibold text-neutral-800">
              • Battery Specs: {product.specs.baterai}
            </p>
          )}
          {product.specs.fitur && product.specs.fitur.length > 0 && (
            <div className="mt-2">
              <span className="font-bold text-neutral-800">• Key Features: </span>
              <span className="text-neutral-600">{product.specs.fitur.join(', ')}</span>
            </div>
          )}
        </div>

        {/* Add To Cart CTA Button */}
        <div className="mt-6">
          <button
            onClick={handleAdd}
            className="w-full py-3.5 px-6 rounded-2xl bg-neutral-900 text-white font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 active:scale-98"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Tambahkan ke Keranjang Belanja</span>
          </button>
        </div>
      </div>
    </div>
  );
};

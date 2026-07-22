import React from 'react';
import { Product } from '../types';
import { Star, ChevronRight, Eye, Headphones, Smartphone, Volume2, Cable } from 'lucide-react';

interface CategorySectionProps {
  categoryName: 'Earbuds' | 'Smartphone' | 'Speaker' | 'Sparepart';
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const CATEGORY_ICONS = {
  Earbuds: Headphones,
  Smartphone: Smartphone,
  Speaker: Volume2,
  Sparepart: Cable
};

export const CategorySection: React.FC<CategorySectionProps> = ({
  categoryName,
  products,
  onSelectProduct
}) => {
  const categoryProducts = products.filter((p) => p.category === categoryName);
  const IconComponent = CATEGORY_ICONS[categoryName] || Headphones;

  return (
    <div className="mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-neutral-200/80 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-neutral-900 text-white shadow-xs">
            <IconComponent className="w-4 h-4" />
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 tracking-tight">
            {categoryName}
          </h3>
        </div>
        <button
          onClick={() => {
            if (categoryProducts.length > 0) onSelectProduct(categoryProducts[0]);
          }}
          className="flex items-center gap-1 text-xs font-bold text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <span>Lihat Semua</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Horizontal Scroll Cards */}
      {categoryProducts.length > 0 ? (
        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="snap-start min-w-[190px] max-w-[210px] sm:min-w-[220px] sm:max-w-[230px] flex-none bg-white border border-neutral-200/80 rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between hover:shadow-xl hover:border-neutral-900 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Product Image */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-neutral-100 mb-3 cursor-pointer"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Official
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] font-bold text-neutral-400 ml-1">
                    {product.rating || '4.9'}
                  </span>
                </div>

                {/* Name */}
                <h4
                  onClick={() => onSelectProduct(product)}
                  className="text-xs sm:text-sm font-extrabold text-neutral-900 mb-2 cursor-pointer line-clamp-2 hover:text-neutral-600 transition-colors leading-snug"
                >
                  {product.name}
                </h4>
              </div>

              {/* Price & Action */}
              <div className="mt-2 pt-2 border-t border-neutral-100">
                <div className="text-sm sm:text-base font-extrabold text-neutral-900 mb-2.5">
                  {product.price}
                </div>
                <button
                  onClick={() => onSelectProduct(product)}
                  className="w-full py-2 px-3 rounded-xl bg-neutral-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-neutral-800 transition-colors shadow-xs active:scale-98"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Detail</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 bg-white border border-dashed border-neutral-200 rounded-2xl text-center text-xs text-neutral-400 font-medium">
          Belum tersedia unit produk dalam kategori {categoryName}.
        </div>
      )}
    </div>
  );
};

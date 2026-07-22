import React from 'react';
import { Medal, ShieldCheck, Zap, CreditCard, Lock } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  return (
    <div className="mb-10">
      <h3 className="text-center text-lg sm:text-xl font-extrabold text-neutral-900 mb-6">
        Mengapa Memilih Ousevoid?
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Feature 1 */}
        <div className="bg-white border border-neutral-100 rounded-2xl p-4 sm:p-5 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 text-amber-400 mb-3 shadow-xs">
            <Medal className="w-6 h-6" />
          </div>
          <h4 className="text-xs sm:text-sm font-extrabold text-neutral-900 mb-1">
            100% Original
          </h4>
          <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-relaxed">
            Kualitas audio premium terjamin produsen.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white border border-neutral-100 rounded-2xl p-4 sm:p-5 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 text-emerald-400 mb-3 shadow-xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h4 className="text-xs sm:text-sm font-extrabold text-neutral-900 mb-1">
            Garansi Resmi
          </h4>
          <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-relaxed">
            Perhitungan klaim cacat pabrik 3 bulan.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white border border-neutral-100 rounded-2xl p-4 sm:p-5 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 text-sky-400 mb-3 shadow-xs">
            <Zap className="w-6 h-6" />
          </div>
          <h4 className="text-xs sm:text-sm font-extrabold text-neutral-900 mb-1">
            Pengiriman Cepat
          </h4>
          <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-relaxed">
            Sameday 8 Jam via Gamoon e-Package.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white border border-neutral-100 rounded-2xl p-4 sm:p-5 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all">
          <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 text-indigo-400 mb-3 shadow-xs">
            <CreditCard className="w-6 h-6" />
            <Lock className="w-3.5 h-3.5 text-emerald-400 absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 border border-neutral-200" />
          </div>
          <h4 className="text-xs sm:text-sm font-extrabold text-neutral-900 mb-1">
            Transaksi Aman
          </h4>
          <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-relaxed">
            Sistem diawasi Otoritas Jasa Keuangan (OJK).
          </p>
        </div>
      </div>
    </div>
  );
};

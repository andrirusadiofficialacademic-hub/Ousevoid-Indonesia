import React, { useState } from 'react';
import { getTrackingInfoByResi } from '../data/trackingData';
import { TrackingInfo } from '../types';
import {
  Search,
  MapPin,
  CheckCircle2,
  Clock,
  PackageCheck,
  Truck,
  ShieldAlert,
  Calendar,
  User,
  ArrowRight
} from 'lucide-react';

export const OrderTrackingView: React.FC = () => {
  const [resiInput, setResiInput] = useState('2026/OUSE/84920');
  const [trackingResult, setTrackingResult] = useState<TrackingInfo | null>(
    getTrackingInfoByResi('2026/OUSE/84920')
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleLacak = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!resiInput.trim()) {
      alert('Harap memasukkan Nomor Invoice/Resi yang sah.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const result = getTrackingInfoByResi(resiInput);
      setTrackingResult(result);
      setIsLoading(false);
    }, 600);
  };

  const handleQuickResi = (resi: string) => {
    setResiInput(resi);
    setIsLoading(true);
    setTimeout(() => {
      setTrackingResult(getTrackingInfoByResi(resi));
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 my-4">
      {/* Title */}
      <div className="text-center space-y-1.5">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-400 bg-neutral-200/60 px-3 py-1 rounded-full inline-block">
          Logistik & Pengiriman Ousevoid
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
          Pelacakan Status Pengiriman Pesanan
        </h2>
        <p className="text-xs text-neutral-500 font-medium max-w-md mx-auto">
          Silakan masukkan Nomor Invoice atau Resi resmi yang diterbitkan melalui surel untuk memantau status logistik secara real-time.
        </p>
      </div>

      {/* Input Box & Button */}
      <div className="bg-white rounded-3xl border border-neutral-200/80 p-5 sm:p-6 shadow-sm space-y-4">
        <form onSubmit={handleLacak} className="space-y-3">
          <div className="relative">
            <input
              type="text"
              value={resiInput}
              onChange={(e) => setResiInput(e.target.value)}
              placeholder="Contoh: 2026/OUSE/84920"
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-neutral-200 bg-neutral-50 text-sm font-bold text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all placeholder:text-neutral-400 placeholder:font-normal"
            />
            <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* THE TRACKING BUTTON - Requirement #1 */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-2xl bg-neutral-900 text-white font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all shadow-md active:scale-98 disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Memvalidasi Data Logistik...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Periksa Status Logistik</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Sample Pills */}
        <div className="pt-2 border-t border-neutral-100 flex items-center justify-between gap-2 flex-wrap text-xs">
          <span className="font-bold text-neutral-400">Contoh No. Resi Sample:</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleQuickResi('2026/OUSE/84920')}
              className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 font-extrabold text-neutral-700 transition-colors"
            >
              2026/OUSE/84920
            </button>
            <button
              type="button"
              onClick={() => handleQuickResi('2026/OUSE/10294')}
              className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 font-extrabold text-neutral-700 transition-colors"
            >
              2026/OUSE/10294
            </button>
          </div>
        </div>
      </div>

      {/* TRACKING RESULT DISPLAY */}
      {trackingResult && !isLoading && (
        <div className="space-y-5 animate-fade-in">
          {/* Status Terakhir Highlight Card */}
          <div className="bg-neutral-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
            {/* Background decoration gradient */}
            <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-extrabold text-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>STATUS TERAKHIR</span>
              </span>
              <span className="text-[11px] font-semibold text-neutral-400">
                No. Resi: <strong className="text-white">{trackingResult.resi}</strong>
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-extrabold text-amber-400 leading-snug">
                {trackingResult.statusTerakhir}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    <strong>Lokasi Saat Ini:</strong> {trackingResult.lokasiTerakhir}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    <strong>Waktu Pemutakhiran:</strong> {trackingResult.waktuTerakhir}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>
                    <strong>Mitra Kurir:</strong> {trackingResult.kurir}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Estimasi Tiba:</strong> {trackingResult.estimasiTiba}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-neutral-400" />
                <span>Penerima: <strong className="text-white">{trackingResult.namaPenerima}</strong></span>
              </div>
              <span className="text-emerald-400 font-bold">Terverifikasi Ousevoid Logistics</span>
            </div>
          </div>

          {/* Detailed Timeline Steps */}
          <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 shadow-sm space-y-4">
            <h4 className="text-sm font-extrabold text-neutral-900 uppercase tracking-wider flex items-center gap-2 border-b border-neutral-100 pb-3">
              <PackageCheck className="w-4 h-4 text-neutral-700" />
              <span>Riwayat Perjalanan Paket</span>
            </h4>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-neutral-200">
              {trackingResult.timeline.map((step, idx) => {
                const isCompleted = step.status === 'completed';
                const isActive = step.status === 'active';

                return (
                  <div key={idx} className="relative group">
                    {/* Circle Node */}
                    <div
                      className={`absolute -left-[19px] top-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                        isCompleted
                          ? 'bg-neutral-900 border-neutral-900 text-white'
                          : isActive
                          ? 'bg-amber-500 border-white ring-4 ring-amber-100 text-white scale-110'
                          : 'bg-white border-neutral-300'
                      }`}
                    >
                      {isCompleted && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>

                    {/* Step Details */}
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <h5
                          className={`text-xs sm:text-sm font-extrabold ${
                            isActive
                              ? 'text-amber-600 font-extrabold'
                              : isCompleted
                              ? 'text-neutral-900'
                              : 'text-neutral-400'
                          }`}
                        >
                          {step.title}
                        </h5>
                        <span className="text-[10px] font-semibold text-neutral-400">
                          {step.timestamp}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                        {step.description}
                      </p>
                      {step.location && (
                        <div className="text-[11px] font-bold text-neutral-400 flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-neutral-400" />
                          <span>{step.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

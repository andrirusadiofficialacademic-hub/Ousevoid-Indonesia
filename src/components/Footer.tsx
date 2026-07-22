import React from 'react';
import { Mail, Phone, Facebook, Instagram, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200/80 pt-12 pb-8 text-neutral-600 text-xs leading-relaxed">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-neutral-100">
          {/* Col 1: About */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-neutral-900 tracking-tight">
              Tentang PT Gerbang Masa Depan (Ousevoid)
            </h4>
            <p className="text-neutral-500 font-medium">
              Ousevoid adalah merek di bawah naungan PT Gerbang Masa Depan yang berfokus pada inovasi perangkat audio nirkabel. Kami berkomitmen untuk menghadirkan produk dengan desain fungsional, spesifikasi andal, dan harga yang kompetitif guna memenuhi kebutuhan produktivitas dan gaya hidup digital masyarakat.
            </p>
          </div>

          {/* Col 2: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-neutral-900 tracking-tight">
              Kontak & Bantuan Resmi
            </h4>
            <p className="text-neutral-500 font-medium">
              Apabila Anda mengalami kendala atau membutuhkan informasi produk silakan hubungi kami melalui:
            </p>
            <ul className="space-y-2 font-semibold text-neutral-700">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>email: ousevoid@gmail.com</span>
              </li>
              <li>
                <a
                  href="https://wa.me/6285715000443"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-neutral-900 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp: 0857 15000 443</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Ousevoid Official</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
                <span>@ousevoid</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Headquarters & Powered By */}
          <div className="space-y-3">
            <img
              src="https://i.ibb.co.com/x8MrtzXr/8588.png"
              alt="Ousevoid HQ"
              className="h-7 w-auto object-contain mb-1"
            />
            <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
              Kantor Pusat
            </div>
            <div className="font-extrabold text-neutral-900">
              PT Gerbang Masa Depan
            </div>
            <p className="text-neutral-500 font-medium">
              Jl. K.H Zainul Arifin 71 Duri Pulo Gambir, Jakarta Pusat, Indonesia 10140
            </p>

            <div className="pt-3 border-t border-dashed border-neutral-200 space-y-1">
              <div className="text-[10px] font-extrabold text-neutral-400 uppercase">
                Powered By Logistics:
              </div>
              <div className="font-bold text-neutral-800">
                PT Gamoon Desember Indonesia (e-Package)
              </div>
              <p className="text-[11px] text-neutral-400">
                Jl KP Bakti Raya 22 Cideng Gambir, Jakarta Pusat 10150
              </p>
            </div>
          </div>
        </div>

        {/* Ministry of Trade Notice */}
        <div className="my-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/60 text-center text-[11px] text-neutral-500 font-medium">
          Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga • Kementerian Perdagangan Republik Indonesia • Kontak WhatsApp Layanan: 0853-1111-1010
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold text-neutral-400 gap-2">
          <span>&copy; 2026 PT Gerbang Masa Depan. Semua Hak Cipta Dilindungi.</span>
          <span className="flex items-center gap-1 text-emerald-600 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Terverifikasi Sistem Keuangan OJK
          </span>
        </div>
      </div>
    </footer>
  );
};

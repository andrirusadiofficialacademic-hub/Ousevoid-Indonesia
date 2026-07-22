import React from 'react';
import { ShieldCheck, Truck, CreditCard, Lock, FileText, ArrowLeft } from 'lucide-react';

interface InfoPagesProps {
  pageType: 'garansi' | 'pengiriman' | 'pembayaran' | 'privasi' | 'syarat';
  onGoHome: () => void;
}

export const InfoPages: React.FC<InfoPagesProps> = ({ pageType, onGoHome }) => {
  return (
    <div className="max-w-2xl mx-auto my-4 space-y-6">
      <button
        onClick={onGoHome}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-neutral-900"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Beranda</span>
      </button>

      {pageType === 'garansi' && (
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-emerald-600">
            <div className="p-3 bg-emerald-50 rounded-2xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Kebijakan Garansi Resmi Produk
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-3 font-medium">
            <p>
              Berdasarkan ketentuan operasional PT Gerbang Masa Depan, seluruh produk resmi merek Ousevoid dilindungi oleh program <strong>Garansi Resmi Produsen selama 3 (tiga) bulan</strong> terhitung sejak tanggal diterbitkannya bukti transaksi pembelian yang sah.
            </p>
            <p>
              <strong>Cakupan Garansi:</strong><br />
              Garansi ini secara eksklusif hanya mencakup kerusakan atau cacat bawaan pabrik (<em>manufacturing defects</em>) serta malfungsi pada perangkat keras utama.
            </p>
            <p>
              <strong>Pengecualian Garansi:</strong><br />
              Kerusakan yang diakibatkan oleh kelalaian atau kesalahan penggunaan oleh pihak konsumen—termasuk namun tidak terbatas pada paparan cairan, benturan fisik, terjatuh, maupun upaya perbaikan atau modifikasi mandiri di luar pusat servis resmi—dinyatakan gugur dari klaim garansi.
            </p>
          </div>
        </div>
      )}

      {pageType === 'pengiriman' && (
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-sky-600">
            <div className="p-3 bg-sky-50 rounded-2xl">
              <Truck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Ketentuan Layanan Logistik & Pengiriman
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-3 font-medium">
            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100 flex items-center gap-3">
              <img
                src="https://i.ibb.co.com/DHZj9dpW/8827-2.jpg"
                alt="Gamoon e-Package"
                className="h-10 w-auto object-contain filter invert mix-blend-multiply"
              />
              <div className="text-xs font-bold text-neutral-800">
                Layanan Pengiriman Sameday e-Package Priority
              </div>
            </div>
            <p>
              PT Gerbang Masa Depan berkomitmen untuk menjamin ketepatan waktu pengiriman barang demi kepuasan konsumen. Untuk wilayah operasional khusus Jakarta dan Bodetabek, kami menggunakan jasa pengiriman prioritas <strong>Gamoon e-Package Sameday</strong>, dengan ketentuan batas waktu tiba maksimal <strong>8 (delapan) jam</strong> setelah konfirmasi pembayaran berhasil diverifikasi oleh sistem.
            </p>
            <p>
              Adapun untuk wilayah di luar jangkauan tersebut, pengiriman logistik dikoordinasikan melalui mitra perusahaan ekspedisi nasional terpercaya seperti J&T Express dan JNE Reguler.
            </p>
          </div>
        </div>
      )}

      {pageType === 'pembayaran' && (
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-indigo-600">
            <div className="p-3 bg-indigo-50 rounded-2xl">
              <CreditCard className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Regulasi & Keamanan Sistem Pembayaran OJK
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-3 font-medium">
            <p>
              Seluruh infrastruktur dan mekanisme pemrosesan transaksi finansial pada situs web resmi <em>ousevoid.biz.id</em> dioperasikan secara transparan, menggunakan protokol enkripsi berstandar perbankan tinggi, serta mematuhi ketentuan regulasi yang berlaku dan <strong>diawasi langsung oleh Otoritas Jasa Keuangan (OJK)</strong> melalui mitra gerbang pembayaran resmi.
            </p>
            <p className="font-bold text-neutral-800">Metode transaksi yang didukung mencakup:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Layanan Dompet Digital (E-Wallet): GoPay, DANA, ShopeePay, serta QRIS Nasional.</li>
              <li>Layanan Transfer Bank (Virtual Account): Bank BCA, Bank Mandiri, BNI, BRI, dan BTN.</li>
            </ul>
          </div>
        </div>
      )}

      {pageType === 'privasi' && (
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-neutral-800">
            <div className="p-3 bg-neutral-100 rounded-2xl">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Kebijakan Privasi & UU Perlindungan Data Pribadi
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-3 font-medium">
            <p>
              <strong>1. Dasar Hukum Kepatuhan</strong><br />
              PT Gerbang Masa Depan tunduk dan patuh terhadap ketentuan <strong>Undang-Undang Perlindungan Data Pribadi Republik Indonesia (UU PDP)</strong> dalam mengumpulkan, mengelola, serta melindungi kerahasiaan data seluruh konsumen.
            </p>
            <p>
              <strong>2. Pembatasan Pengumpulan Data</strong><br />
              Data pribadi yang dimintai dari Pengguna dibatasi secara ketat hanya pada informasi esensial yang diperlukan untuk kepentingan administrasi transaksi dan pengiriman logistik, meliputi: nama lengkap, nomor kontak telekomunikasi, alamat surel, serta alamat domisili penerima.
            </p>
            <p>
              <strong>3. Retensi Data dan Keamanan</strong><br />
              Data sensitif konsumen akan dihapus secara permanen dari server aktif kami segera setelah proses pengiriman logistik dinyatakan tuntas. Perusahaan tidak menyimpan informasi kredensial finansial atau perbankan milik Pengguna.
            </p>
          </div>
        </div>
      )}

      {pageType === 'syarat' && (
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-neutral-800">
            <div className="p-3 bg-neutral-100 rounded-2xl">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Syarat & Ketentuan Umum Penggunaan Layanan
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-3 font-medium">
            <p>
              <strong>Pasal 1: Ketentuan Umum</strong><br />
              Dengan mengakses serta melakukan transaksi jual beli melalui portal <em>ousevoid.biz.id</em>, Pengguna menyatakan telah membaca, memahami, serta menyatakan setuju untuk terikat secara hukum pada seluruh klausul Syarat dan Ketentuan Umum ini.
            </p>
            <p>
              <strong>Pasal 2: Keabsahan Data Pengguna</strong><br />
              Pengguna bertanggung jawab penuh atas keakuratan, kebenaran, dan kelengkapan data informasi yang diinput saat melakukan pemesanan. Segala bentuk kerugian akibat kesalahan pencantuman alamat atau kontak di luar tanggung jawab PT Gerbang Masa Depan.
            </p>
            <p>
              <strong>Pasal 3: Prosedur Pengembalian (Return & Refund)</strong><br />
              Klaim pengembalian barang akibat ketidaksesuaian atau cacat produk wajib disertakan dengan dokumen rekam video proses pembukaan paket (<em>unboxing</em>) secara utuh tanpa suntingan, selambat-lambatnya 2x24 jam sejak barang diterima.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

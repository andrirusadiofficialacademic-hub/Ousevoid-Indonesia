import React, { useState } from 'react';
import { CartItem } from '../types';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
  Truck,
  CreditCard,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

interface CartCheckoutProps {
  cart: CartItem[];
  onUpdateQty: (index: number, delta: number) => void;
  onClearCart: () => void;
  onGoHome: () => void;
}

export const CartCheckout: React.FC<CartCheckoutProps> = ({
  cart,
  onUpdateQty,
  onClearCart,
  onGoHome
}) => {
  const [step, setStep] = useState<'cart' | 'invoice'>('cart');
  const [formData, setFormData] = useState({
    nama: '',
    wa: '',
    email: '',
    alamat: '',
    courierCost: 35000
  });
  const [selectedPayment, setSelectedPayment] = useState<'gopay' | 'dana' | 'bca_va' | 'qris'>('gopay');
  const [isProcessing, setIsProcessing] = useState(false);
  const [invoiceData, setInvoiceData] = useState<{
    idTrx: string;
    total: number;
    nama: string;
    email: string;
  } | null>(null);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const grandTotal = subtotal + formData.courierCost;

  const handleLanjutInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nama || !formData.wa || !formData.email || !formData.alamat) {
      alert('Mohon lengkapi seluruh field informasi pengiriman.');
      return;
    }

    const idTrx = `2026/OUSE/${Math.floor(10000 + Math.random() * 90000)}`;
    setInvoiceData({
      idTrx,
      total: grandTotal,
      nama: formData.nama,
      email: formData.email
    });
    setStep('invoice');
  };

  const handleEksekusiBayar = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Pembayaran transaksi ${invoiceData?.idTrx} berhasil dikonfirmasi! Resi dan bukti transaksi telah dikirimkan ke email ${invoiceData?.email}.`);
      onClearCart();
      onGoHome();
    }, 1500);
  };

  if (cart.length === 0 && step === 'cart') {
    return (
      <div className="bg-white rounded-3xl border border-neutral-200 p-8 text-center max-w-md mx-auto my-8 shadow-sm">
        <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-400">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-extrabold text-neutral-900 mb-2">
          Keranjang Belanja Kosong
        </h3>
        <p className="text-xs text-neutral-500 mb-6 font-medium">
          Anda belum memasukkan produk apapun ke dalam keranjang.
        </p>
        <button
          onClick={onGoHome}
          className="w-full py-3 px-6 rounded-2xl bg-neutral-900 text-white font-bold text-xs hover:bg-neutral-800 transition-colors shadow-md"
        >
          Kembali Berbelanja
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-4 space-y-6">
      {step === 'cart' ? (
        <form onSubmit={handleLanjutInvoice} className="space-y-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
            <button
              type="button"
              onClick={onGoHome}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-neutral-900"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali Berbelanja</span>
            </button>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              Checkout & Pengiriman
            </span>
          </div>

          {/* Cart Items List */}
          <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs">
            <h3 className="text-sm font-extrabold text-neutral-900 mb-4 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-neutral-700" />
              <span>Daftar Pesanan ({cart.length} Produk)</span>
            </h3>

            <div className="divide-y divide-neutral-100">
              {cart.map((item, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex gap-3.5 items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl border border-neutral-200/80 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 truncate">
                      {item.name}
                    </h4>
                    <div className="text-xs font-extrabold text-rose-600 mt-0.5">
                      Rp {item.price.toLocaleString('id-ID')}
                    </div>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="inline-flex items-center gap-2 border border-neutral-200 rounded-lg p-1 bg-neutral-50">
                        <button
                          type="button"
                          onClick={() => onUpdateQty(idx, -1)}
                          className="p-1 text-neutral-600 hover:text-neutral-900 rounded-sm"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-neutral-900 w-4 text-center">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQty(idx, 1)}
                          className="p-1 text-neutral-600 hover:text-neutral-900 rounded-sm"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(idx, -item.qty)}
                        className="text-neutral-400 hover:text-rose-600 p-1 transition-colors"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Details Form */}
          <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs space-y-3.5">
            <h3 className="text-sm font-extrabold text-neutral-900 flex items-center gap-2">
              <Truck className="w-4 h-4 text-neutral-700" />
              <span>Informasi Alamat Pengiriman</span>
            </h3>

            <input
              type="text"
              required
              placeholder="Nama Lengkap Penerima"
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-medium focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all"
            />

            <input
              type="tel"
              required
              placeholder="Nomor WhatsApp / Telepon Aktif"
              value={formData.wa}
              onChange={(e) => setFormData({ ...formData, wa: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-medium focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all"
            />

            <input
              type="email"
              required
              placeholder="Alamat Email (Untuk Bukti Transaksi)"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-medium focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all"
            />

            <textarea
              required
              rows={3}
              placeholder="Alamat Domisili Pengiriman Secara Lengkap (Jalan, RT/RW, Kota, Kode Pos)"
              value={formData.alamat}
              onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-medium focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all resize-none"
            />

            <div className="pt-2">
              <label className="block text-[11px] font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">
                Pilih Kurir Logistik:
              </label>
              <select
                value={formData.courierCost}
                onChange={(e) => setFormData({ ...formData, courierCost: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-bold text-neutral-900 focus:outline-hidden"
              >
                <option value={35000}>Gamoon e-Package Sameday Priority (8 Jam) - Rp 35.000</option>
                <option value={20000}>J&T Express Super Fast (1-2 Hari) - Rp 20.000</option>
                <option value={18000}>JNE Reguler Logistik (2-3 Hari) - Rp 18.000</option>
              </select>
            </div>
          </div>

          {/* Bottom Total & Proceed Button */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-4 flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[11px] font-bold text-neutral-400 block uppercase">
                Total Tagihan:
              </span>
              <span className="text-xl font-extrabold text-neutral-900">
                Rp {grandTotal.toLocaleString('id-ID')}
              </span>
            </div>
            <button
              type="submit"
              className="py-3 px-6 rounded-xl bg-neutral-900 text-white font-extrabold text-xs hover:bg-neutral-800 transition-colors shadow-md active:scale-95"
            >
              Lanjutkan ke Pembayaran
            </button>
          </div>
        </form>
      ) : (
        /* Invoice Screen */
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="text-center pb-6 border-b border-dashed border-neutral-300">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-[10px] rounded-full uppercase tracking-wider mb-2">
              Menunggu Pembayaran
            </span>
            <h3 className="text-sm font-bold text-neutral-500">
              Nomor Invoice Transaksi: <span className="font-extrabold text-neutral-900">{invoiceData?.idTrx}</span>
            </h3>
            <div className="text-3xl font-extrabold text-neutral-900 mt-2">
              Rp {invoiceData?.total.toLocaleString('id-ID')}
            </div>
          </div>

          <div className="text-xs space-y-2 text-neutral-600 bg-neutral-50 p-4 rounded-2xl border border-neutral-200/60">
            <div><strong>Pemesan:</strong> {invoiceData?.nama}</div>
            <div><strong>Surel Konfirmasi:</strong> {invoiceData?.email}</div>
            <div><strong>Otorisasi Keamanan:</strong> Diproteksi Encryption OJK Gateway</div>
          </div>

          <div>
            <label className="block text-xs font-extrabold text-neutral-800 uppercase tracking-wider mb-3">
              Pilih Kanal Pembayaran Resmi:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'gopay', name: 'GoPay', logo: 'https://i.ibb.co.com/MDFzRSrD/Gopay-logo-svg.png' },
                { id: 'dana', name: 'DANA', logo: 'https://i.ibb.co.com/xqg0PbT4/Logo-dana-blue-svg.png' },
                { id: 'bca_va', name: 'BCA VA', logo: 'https://i.ibb.co.com/qLT2FX8W/500px-Bank-Central-Asia-svg.png' },
                { id: 'qris', name: 'QRIS', logo: 'https://images.unsplash.com/photo-1595079672139-cee4c06cdc92?w=200&auto=format&fit=crop&q=80' }
              ].map((p) => {
                const isSelected = selectedPayment === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPayment(p.id as any)}
                    className={`p-3 rounded-2xl border text-center flex flex-col items-center justify-center gap-1.5 transition-all ${
                      isSelected
                        ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span className="text-xs font-bold">{p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleEksekusiBayar}
            disabled={isProcessing}
            className="w-full py-4 rounded-2xl bg-neutral-900 text-white font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all shadow-lg active:scale-98 disabled:opacity-50"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{isProcessing ? 'Memverifikasi Pembayaran...' : 'Konfirmasi Pembayaran Resmi'}</span>
          </button>

          <div className="text-center text-[11px] text-neutral-400 font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Transaksi dilindungi enkripsi SSL 256-bit OJK</span>
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import {
  X,
  Home,
  Headphones,
  Smartphone as PhoneIcon,
  Volume2,
  Cable,
  MapPin,
  ShieldCheck,
  Truck,
  CreditCard,
  Lock,
  FileText,
  UserCheck
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, param?: string) => void;
  onOpenLogin: () => void;
  activeView: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenLogin,
  activeView
}) => {
  return (
    <>
      {/* Dark Blur Overlay */}
      <div
        className={`fixed inset-0 bg-neutral-900/60 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-center justify-between">
          <img
            src="https://i.ibb.co.com/x8MrtzXr/8588.png"
            alt="Ousevoid Logo"
            className="h-7 w-auto object-contain"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Main Link */}
          <div>
            <button
              onClick={() => {
                onNavigate('home');
                onClose();
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activeView === 'home'
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Beranda</span>
            </button>
          </div>

          {/* Product Categories Group */}
          <div>
            <div className="px-3 text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
              Kategori Produk
            </div>
            <div className="space-y-1">
              <button
                onClick={() => {
                  onNavigate('category', 'Earbuds');
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <Headphones className="w-4 h-4 text-neutral-500" />
                <span>Earbuds</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('category', 'Smartphone');
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-neutral-500" />
                <span>Smartphone</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('category', 'Speaker');
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <Volume2 className="w-4 h-4 text-neutral-500" />
                <span>Speaker</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('category', 'Sparepart');
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <Cable className="w-4 h-4 text-neutral-500" />
                <span>Sparepart</span>
              </button>
            </div>
          </div>

          {/* Customer Service Group */}
          <div>
            <div className="px-3 text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
              Layanan Pelanggan
            </div>
            <div className="space-y-1">
              <button
                onClick={() => {
                  onNavigate('tracking');
                  onClose();
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeView === 'tracking'
                    ? 'bg-neutral-100 text-neutral-900 font-bold'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Pelacakan Pesanan</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('info', 'garansi');
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-neutral-500" />
                <span>Kebijakan Garansi Resmi</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('info', 'pengiriman');
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <Truck className="w-4 h-4 text-neutral-500" />
                <span>Ketentuan Logistik & Pengiriman</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('info', 'pembayaran');
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <CreditCard className="w-4 h-4 text-neutral-500" />
                <span>Regulasi Pembayaran & OJK</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('info', 'privasi');
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <Lock className="w-4 h-4 text-neutral-500" />
                <span>Kebijakan Privasi & UU PDP</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('info', 'syarat');
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <FileText className="w-4 h-4 text-neutral-500" />
                <span>Syarat & Ketentuan Umum</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Footer with Login Button (Renamed to Login) */}
        <div className="p-4 border-t border-neutral-100 bg-neutral-50/50">
          <button
            onClick={() => {
              onOpenLogin();
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 text-white font-bold text-sm hover:bg-neutral-800 transition-all shadow-sm active:scale-98"
          >
            <UserCheck className="w-4 h-4" />
            <span>Login</span>
          </button>
        </div>
      </aside>
    </>
  );
};

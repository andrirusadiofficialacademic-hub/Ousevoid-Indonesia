import React from 'react';
import { Menu, ShoppingBag, User, Search } from 'lucide-react';

interface HeaderProps {
  onToggleMenu: () => void;
  onOpenCart: () => void;
  onOpenLogin: () => void;
  onGoHome: () => void;
  onGoTracking: () => void;
  cartCount: number;
  userLoggedIn: boolean;
  username?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleMenu,
  onOpenCart,
  onOpenLogin,
  onGoHome,
  onGoTracking,
  cartCount,
  userLoggedIn,
  username
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Hamburger menu */}
        <button
          onClick={onToggleMenu}
          className="p-2 -ml-2 rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors focus:outline-hidden"
          aria-label="Toggle Navigation Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Center: Ousevoid Logo */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-2 group focus:outline-hidden"
          aria-label="Ousevoid Home"
        >
          <img
            src="https://i.ibb.co.com/x8MrtzXr/8588.png"
            alt="Ousevoid Official Store"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </button>

        {/* Right actions: Tracking shortcut, Cart icon, Login button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onGoTracking}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
            title="Lacak Pesanan"
          >
            <Search className="w-3.5 h-3.5 text-neutral-500" />
            <span>Lacak Status</span>
          </button>

          {/* Cart Icon with Counter */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors focus:outline-hidden"
            aria-label="Keranjang Belanja"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>

          {/* Login Button - Changed label to 'Login', compact e-commerce styling */}
          <button
            onClick={onOpenLogin}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-bold hover:bg-neutral-800 transition-all shadow-xs active:scale-95"
          >
            <User className="w-3.5 h-3.5" />
            <span>{userLoggedIn ? username || 'Akun Saya' : 'Login'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

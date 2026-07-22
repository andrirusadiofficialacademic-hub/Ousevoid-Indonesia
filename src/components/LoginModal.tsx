import React, { useState } from 'react';
import { X, Eye, EyeOff, Lock, User, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (username: string, role: 'buyer' | 'admin') => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [loginMode, setLoginMode] = useState<'buyer' | 'admin'>('buyer');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!username.trim() || !password.trim()) {
      setErrorMessage('Mohon isi Username/Email dan Password Anda.');
      return;
    }

    if (loginMode === 'admin' && !pin.trim()) {
      setErrorMessage('PIN Keamanan wajib diisi untuk mode Admin.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess(username, loginMode);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
      />

      {/* Compact E-Commerce Login Box (Fixing oversized modal) */}
      <div className="relative w-full max-w-[380px] bg-white rounded-3xl shadow-2xl border border-neutral-100 p-6 sm:p-7 z-10 transition-all animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <img
            src="https://i.ibb.co.com/x8MrtzXr/8588.png"
            alt="Ousevoid"
            className="h-8 w-auto mx-auto mb-3 object-contain"
          />
          {/* Changed title to 'Login' as requested */}
          <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight">
            Login
          </h3>
          <p className="text-xs text-neutral-500 font-medium mt-0.5">
            Masuk ke Akun Ousevoid Anda
          </p>
        </div>

        {/* Login Mode Tabs */}
        <div className="grid grid-cols-2 p-1 bg-neutral-100 rounded-2xl mb-5 text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              setLoginMode('buyer');
              setErrorMessage('');
            }}
            className={`py-2 rounded-xl transition-all ${
              loginMode === 'buyer'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Pembeli
          </button>
          <button
            type="button"
            onClick={() => {
              setLoginMode('admin');
              setErrorMessage('');
            }}
            className={`py-2 rounded-xl transition-all ${
              loginMode === 'admin'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Admin Portal
          </button>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-semibold text-rose-600">
              {errorMessage}
            </div>
          )}

          <div>
            <label className="block text-[11px] font-extrabold text-neutral-500 uppercase tracking-wider mb-1">
              Username atau Email
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="Masukkan username atau email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all"
              />
              <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-extrabold text-neutral-500 uppercase tracking-wider mb-1">
              Kata Sandi
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all"
              />
              <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {loginMode === 'admin' && (
            <div>
              <label className="block text-[11px] font-extrabold text-neutral-500 uppercase tracking-wider mb-1">
                PIN Keamanan (6 Digit)
              </label>
              <div className="relative">
                <input
                  type="password"
                  maxLength={6}
                  required
                  placeholder="6 Digit PIN"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all"
                />
                <ShieldCheck className="w-4 h-4 text-amber-500 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-1.5 text-neutral-600 font-medium cursor-pointer">
              <input type="checkbox" className="rounded border-neutral-300 text-neutral-900 focus:ring-0" />
              <span>Ingat saya</span>
            </label>
            <a href="#" className="text-neutral-900 font-bold hover:underline">
              Lupa sandi?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-2xl bg-neutral-900 text-white font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all shadow-md active:scale-98 disabled:opacity-60 mt-4"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Memproses...</span>
              </>
            ) : (
              <>
                <span>Login</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-5 pt-4 border-t border-neutral-100 text-center text-xs text-neutral-500 font-medium">
          Belum punya akun?{' '}
          <a href="#" className="text-neutral-900 font-extrabold hover:underline">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

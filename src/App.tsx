import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from './data/products';
import { Product, CartItem, UserSession } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { BannerSlider } from './components/BannerSlider';
import { FeaturesGrid } from './components/FeaturesGrid';
import { CategorySection } from './components/CategorySection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartCheckout } from './components/CartCheckout';
import { OrderTrackingView } from './components/OrderTrackingView';
import { LoginModal } from './components/LoginModal';
import { InfoPages } from './components/InfoPages';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'cart' | 'tracking' | 'info' | 'detail'>('home');
  const [selectedCategoryParam, setSelectedCategoryParam] = useState<string | undefined>(undefined);
  const [infoPageType, setInfoPageType] = useState<'garansi' | 'pengiriman' | 'pembayaran' | 'privasi' | 'syarat'>('garansi');
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [userSession, setUserSession] = useState<UserSession>({
    isLoggedIn: false,
    username: '',
    role: 'buyer'
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleNavigate = (view: string, param?: string) => {
    if (view === 'home') {
      setActiveView('home');
      setSelectedCategoryParam(undefined);
    } else if (view === 'category' && param) {
      setActiveView('home');
      setSelectedCategoryParam(param);
    } else if (view === 'tracking') {
      setActiveView('tracking');
    } else if (view === 'cart') {
      setActiveView('cart');
    } else if (view === 'info' && param) {
      setInfoPageType(param as any);
      setActiveView('info');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (item: {
    name: string;
    price: number;
    img: string;
    variantName?: string;
  }) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((i) => i.name === item.name);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].qty += 1;
        return updated;
      } else {
        return [...prevCart, { ...item, qty: 1 }];
      }
    });

    showToast(`"${item.name}" berhasil ditambahkan ke keranjang!`);
    setSelectedProduct(null);
    setActiveView('cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateCartQty = (index: number, delta: number) => {
    setCart((prevCart) => {
      const updated = [...prevCart];
      updated[index].qty += delta;
      if (updated[index].qty <= 0) {
        updated.splice(index, 1);
      }
      return updated;
    });
  };

  const handleLoginSuccess = (username: string, role: 'buyer' | 'admin') => {
    setUserSession({
      isLoggedIn: true,
      username,
      role
    });
    showToast(`Selamat datang, ${username}! Login berhasil.`);
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50/60 text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-neutral-900 text-white px-5 py-3 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 border border-neutral-700 animate-scale-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <Header
        onToggleMenu={() => setIsSidebarOpen(true)}
        onOpenCart={() => setActiveView('cart')}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onGoHome={() => handleNavigate('home')}
        onGoTracking={() => handleNavigate('tracking')}
        cartCount={cartTotalItems}
        userLoggedIn={userSession.isLoggedIn}
        username={userSession.username}
      />

      {/* Sidebar Overlay Drawer */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={handleNavigate}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        activeView={activeView}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6">
        {activeView === 'home' && (
          <div>
            <BannerSlider />
            <FeaturesGrid />

            {/* Product Categories */}
            {selectedCategoryParam ? (
              <div className="mb-8">
                <button
                  onClick={() => setSelectedCategoryParam(undefined)}
                  className="mb-4 text-xs font-bold text-neutral-500 hover:text-neutral-900 underline"
                >
                  ← Tampilkan Semua Kategori
                </button>
                <CategorySection
                  categoryName={selectedCategoryParam as any}
                  products={INITIAL_PRODUCTS}
                  onSelectProduct={handleSelectProduct}
                />
              </div>
            ) : (
              <>
                <CategorySection
                  categoryName="Earbuds"
                  products={INITIAL_PRODUCTS}
                  onSelectProduct={handleSelectProduct}
                />
                <CategorySection
                  categoryName="Smartphone"
                  products={INITIAL_PRODUCTS}
                  onSelectProduct={handleSelectProduct}
                />
                <CategorySection
                  categoryName="Speaker"
                  products={INITIAL_PRODUCTS}
                  onSelectProduct={handleSelectProduct}
                />
                <CategorySection
                  categoryName="Sparepart"
                  products={INITIAL_PRODUCTS}
                  onSelectProduct={handleSelectProduct}
                />
              </>
            )}
          </div>
        )}

        {/* Product Detail Modal/View */}
        {activeView === 'detail' && selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => handleNavigate('home')}
            onAddToCart={handleAddToCart}
          />
        )}

        {/* Shopping Cart & Checkout */}
        {activeView === 'cart' && (
          <CartCheckout
            cart={cart}
            onUpdateQty={handleUpdateCartQty}
            onClearCart={() => setCart([])}
            onGoHome={() => handleNavigate('home')}
          />
        )}

        {/* Order Tracking View (Tombol Lacak Berfungsi & Menampilkan Data Status Terakhir) */}
        {activeView === 'tracking' && <OrderTrackingView />}

        {/* Info & Governance Pages */}
        {activeView === 'info' && (
          <InfoPages pageType={infoPageType} onGoHome={() => handleNavigate('home')} />
        )}
      </main>

      {/* Compact E-Commerce Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Support Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}

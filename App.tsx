
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Success from './pages/Success';
import ProductDetail from './pages/ProductDetail';
import AllProducts from './pages/AllProducts';
import Checkout from './pages/Checkout';
import NotificationSystem from './components/NotificationSystem';
import { AppRoute } from './types';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(AppRoute.HOME);

  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash.replace('#', '') || '/';
      // Handle routes with query params like #/congratulations?session_id=...
      const path = fullHash.split('?')[0];
      
      if (path === '/congratulations') {
        setCurrentRoute(AppRoute.SUCCESS);
      } else {
        setCurrentRoute(path as AppRoute);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: AppRoute) => {
    window.location.hash = route;
  };

  const handleStripeRedirect = () => {
    // Direct redirect to the provided Stripe Payment Link
    window.location.href = 'https://buy.stripe.com/4gMfZg4HpcYHdcPfnhgEg00';
  };

  const renderPage = () => {
    switch (currentRoute) {
      case AppRoute.HOME:
        return <Home onNavigate={navigateTo} />;
      case AppRoute.BEST_EBOOK:
        return <ProductDetail onBuy={() => navigateTo(AppRoute.CHECKOUT)} />;
      case AppRoute.ALL_EBOOKS:
        return <AllProducts onNavigate={navigateTo} />;
      case AppRoute.WHO_WE_ARE:
        return <WhoWeAre />;
      case AppRoute.CHECKOUT:
        return <Checkout onPay={handleStripeRedirect} />;
      case AppRoute.SUCCESS:
        return <Success onNavigate={navigateTo} />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar 
        onNavigate={navigateTo} 
        currentRoute={currentRoute} 
      />
      
      {/* Social Proof Layer */}
      <NotificationSystem onNavigate={navigateTo} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />

      {/* Persistent Buy Now for Mobile Home */}
      {currentRoute === AppRoute.HOME && (
        <div className="md:hidden fixed bottom-6 left-4 right-4 z-40">
          <button 
            onClick={() => navigateTo(AppRoute.BEST_EBOOK)}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-2xl shadow-2xl shadow-emerald-500/40 transform active:scale-95 transition-all flex items-center justify-center space-x-2"
          >
            <span className="uppercase text-xs tracking-widest">Buy Best Product</span>
            <span className="font-black text-lg">$1</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;

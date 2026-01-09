
import React, { useState } from 'react';
import { AppRoute } from '../types';

interface NavbarProps {
  onNavigate: (route: AppRoute) => void;
  currentRoute: AppRoute;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentRoute }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Best Product', route: AppRoute.BEST_EBOOK },
    { label: 'All Products', route: AppRoute.ALL_EBOOKS },
    { label: 'Who We Are', route: AppRoute.WHO_WE_ARE },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate(AppRoute.HOME)}
          >
            {/* Professional Wealth & Growth Emblem */}
            <div className="relative mr-4">
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full group-hover:bg-emerald-500/30 transition-all"></div>
              <div className="relative w-12 h-12 bg-slate-900 border-2 border-white/10 rounded-2xl flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-105 group-hover:border-emerald-500/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
                <svg className="w-8 h-8 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* The 'Z' with a Growth Arrow integrated */}
                  <path d="M5 7H19L5 17H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-20" />
                  <path d="M5 17L19 7" stroke="url(#logo-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 7L19 13M19 7L13 7" stroke="url(#logo-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="logo-gradient" x1="5" y1="17" x2="19" y2="7" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10b981" />
                      <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-2xl font-black tracking-tighter text-white leading-none">ZETA</span>
                <span className="text-2xl font-black tracking-tighter text-emerald-500 italic leading-none">ONE</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-[7px] font-black text-slate-500 uppercase tracking-[0.5em] leading-none">Wealth • Systems • Growth</span>
                <div className="h-[1px] w-4 bg-emerald-500/30"></div>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.route)}
                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:text-emerald-400 ${
                  currentRoute === item.route ? 'text-emerald-500' : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button 
              onClick={() => onNavigate(AppRoute.BEST_EBOOK)}
              className="bg-emerald-600 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-emerald-600/20 hover:bg-emerald-500 active:scale-95"
            >
              Get The Framework
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2}/> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2}/>}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { onNavigate(item.route); setIsOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest ${
                currentRoute === item.route ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-300'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/5 space-y-2">
            <button 
              onClick={() => { onNavigate(AppRoute.BEST_EBOOK); setIsOpen(false); }}
              className="w-full bg-emerald-600 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest"
            >
              Buy Framework
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

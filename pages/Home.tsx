
import React from 'react';
import { PRIMARY_EBOOK, TOTAL_STUDENT_EARNINGS } from '../constants';
import { AppRoute } from '../types';
import CountdownTimer from '../components/CountdownTimer';

interface HomeProps {
  onNavigate: (route: AppRoute) => void;
}

const AnimatedCheckIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} text-emerald-500 flex-shrink-0 mt-1 animate-pop-in`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
    <path className="animate-draw-check" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const TrustpilotStars: React.FC = () => (
  <div className="flex items-center space-x-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} className="w-5 h-5 text-[#ffb600] fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center relative z-10">
          
          {/* 1. Title (Top) */}
          <div className="mb-2 px-4">
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] uppercase">
              The TikTok <br />
              <span className="gradient-text italic">Alpha Framework.</span>
            </h1>
          </div>

          {/* 2. Stars + Reviews (Tightly grouped under title) */}
          <div className="flex flex-col items-center mb-6 space-y-2">
            <TrustpilotStars />
            <div className="text-slate-400 font-bold text-xs md:text-sm tracking-tight">
              <span className="text-white font-black">5.0/5.0</span> 
              <span className="mx-2 opacity-30">|</span> 
              <span className="text-emerald-400">740+ verified reviews</span>
            </div>
          </div>

          {/* 3. Ebook Cover (Tightly grouped under stars) */}
          <div className="relative group mb-10 w-[70%] sm:w-[55%] md:w-[280px] lg:w-[320px] perspective-1000">
            <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full transform scale-125"></div>
            <div className="relative aspect-[2/3] transform transition-all duration-1000 hover:rotate-y-3 hover:scale-[1.02] shadow-[0_50px_100px_rgba(0,0,0,0.8)] rounded-[4px] overflow-hidden border border-white/10">
              <div className="absolute top-0 left-0 w-[5%] h-full bg-slate-900/90 z-20 border-r border-white/5"></div>
              <img 
                src={PRIMARY_EBOOK.coverImage} 
                alt={PRIMARY_EBOOK.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* 4. Price Section (Below cover) */}
          <div className="mb-4 flex flex-col items-center">
             <div className="flex items-end space-x-4">
                <span className="text-slate-600 line-through text-2xl font-bold mb-1">$99.00</span>
                <span className="text-white font-black text-7xl tracking-tighter drop-shadow-xl">${PRIMARY_EBOOK.price}</span>
             </div>
             <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-80">
                Exclusive Institutional Pricing
             </p>
          </div>

          {/* 5. Countdown Timer (Yellow, below price) */}
          <div className="mb-12 w-full flex justify-center px-4">
            <CountdownTimer />
          </div>

          {/* 6. Description (Below countdown) */}
          <div className="max-w-2xl w-full text-left bg-slate-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] mb-12 shadow-2xl backdrop-blur-md">
            <div className="space-y-6 text-slate-300 font-bold text-sm md:text-base leading-relaxed">
              {PRIMARY_EBOOK.description.split('\n\n').map((paragraph, idx) => {
                const isCheckmarkLine = paragraph.trim().startsWith('✔');
                const content = paragraph.trim().replace(/^✔\s*/, '');
                
                return (
                  <p key={idx} className="flex items-start space-x-3">
                    {isCheckmarkLine ? <AnimatedCheckIcon /> : null}
                    <span className="whitespace-pre-line flex-grow">{content}</span>
                  </p>
                );
              })}
            </div>
          </div>

          {/* 7. Buy Button (Elegant, Premium size) */}
          <div className="w-full flex flex-col items-center mb-24 px-4">
            <button 
              onClick={() => onNavigate(AppRoute.BEST_EBOOK)}
              className="w-full max-w-xs bg-white text-slate-950 hover:bg-emerald-50 font-black py-4 px-8 rounded-2xl text-lg uppercase tracking-[0.15em] transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)] active:scale-95 group flex items-center justify-center border-b-4 border-slate-200"
            >
              Buy This Ebook
              <span className="ml-4 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <div className="mt-8 flex items-center space-x-6 opacity-30 grayscale hover:grayscale-0 transition-all">
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Community Revenue", val: `$${(TOTAL_STUDENT_EARNINGS/1000).toFixed(0)}k+` },
            { label: "Active Units", val: "740+" },
            { label: "Success Rate", val: "99.2%" },
            { label: "Technical Support", val: "24/7" }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/40 border border-white/5 p-6 rounded-[2rem] text-center">
              <div className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tighter">{stat.val}</div>
              <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

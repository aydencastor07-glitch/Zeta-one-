
import React from 'react';
import { PRIMARY_EBOOK, TOTAL_STUDENT_EARNINGS } from '../constants';
import { AppRoute } from '../types';
import CountdownTimer from '../components/CountdownTimer';
import BookCover from '../components/BookCover';

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
          <div className="mb-4 px-4">
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] uppercase">
              FROM 0 TO $2,000 <br />
              <span className="gradient-text italic">ON TIKTOK IN 30 DAYS.</span>
            </h1>
          </div>

          {/* 2. Stars + Reviews */}
          <div className="flex flex-col items-center mb-10 space-y-2">
            <TrustpilotStars />
            <div className="text-slate-400 font-bold text-xs md:text-sm tracking-tight">
              <span className="text-white font-black">5.0/5.0</span> 
              <span className="mx-2 opacity-30">|</span> 
              <span className="text-emerald-400">740+ verified reviews</span>
            </div>
          </div>

          {/* 3. High-Fidelity Ebook Cover Component */}
          {/* Removed rotation and scaling effects to ensure image is presented 100% true to source */}
          <div className="relative group mb-12 w-[85%] sm:w-[60%] md:w-[320px] lg:w-[360px]">
            <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full transform scale-125"></div>
            <BookCover 
              title={PRIMARY_EBOOK.title}
              image={PRIMARY_EBOOK.coverImage}
              className="shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* 4. Price Section */}
          <div className="mb-6 flex flex-col items-center">
             <div className="flex items-end space-x-4">
                <span className="text-slate-600 line-through text-2xl font-bold mb-2">$99.00</span>
                <span className="text-white font-black text-7xl md:text-8xl tracking-tighter drop-shadow-2xl">${PRIMARY_EBOOK.price}</span>
             </div>
             <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mt-3 opacity-90">
                Official Institutional Launch Price
             </p>
          </div>

          {/* 5. Countdown Timer */}
          <div className="mb-14 w-full flex justify-center px-4">
            <CountdownTimer />
          </div>

          {/* 6. Buy Button */}
          <div className="w-full flex flex-col items-center mb-20 px-4">
            <button 
              onClick={() => onNavigate(AppRoute.BEST_EBOOK)}
              className="w-full max-w-sm bg-white text-slate-950 hover:bg-emerald-50 font-black py-5 px-8 rounded-2xl text-xl uppercase tracking-[0.15em] transition-all shadow-[0_30px_60px_rgba(255,255,255,0.1)] active:scale-95 group flex items-center justify-center border-b-4 border-slate-200"
            >
              Get Instant Access
              <span className="ml-4 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <div className="mt-8 flex items-center space-x-8 opacity-40 grayscale hover:grayscale-0 transition-all">
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
            </div>
          </div>

          {/* 7. Detailed Feature Block */}
          <div className="max-w-3xl w-full text-left bg-slate-900/60 border border-white/10 p-10 md:p-14 rounded-[3rem] mb-24 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500"></div>
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-10">System Architecture Overview</h3>
            <div className="space-y-8 text-slate-200 font-bold text-base md:text-lg leading-relaxed">
              {PRIMARY_EBOOK.description.split('\n\n').map((paragraph, idx) => {
                const isCheckmarkLine = paragraph.trim().startsWith('✔');
                const content = paragraph.trim().replace(/^✔\s*/, '');
                
                return (
                  <p key={idx} className="flex items-start space-x-4">
                    {isCheckmarkLine ? <AnimatedCheckIcon className="w-6 h-6" /> : null}
                    <span className="whitespace-pre-line flex-grow">{content}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Community Revenue", val: `$${(TOTAL_STUDENT_EARNINGS/1000).toFixed(0)}k+` },
            { label: "Active Units", val: "740+" },
            { label: "Success Rate", val: "99.2%" },
            { label: "Technical Support", val: "24/7" }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] text-center hover:border-emerald-500/20 transition-colors">
              <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tighter">{stat.val}</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

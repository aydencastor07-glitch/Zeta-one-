
import React, { useState } from 'react';
import { PRIMARY_EBOOK, REVIEWS } from '../constants';
import CountdownTimer from '../components/CountdownTimer';
import BookCover from '../components/BookCover';

interface ProductDetailProps {
  onBuy: () => void;
}

const AnimatedCheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={`${className} text-emerald-500 flex-shrink-0 mt-0.5 animate-pop-in`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
    <path className="animate-draw-check" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const TrustpilotStars: React.FC<{ size?: string }> = ({ size = "w-6 h-6" }) => (
  <div className="flex items-center space-x-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} className={`${size} text-[#ffb600] fill-current`} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ProductDetail: React.FC<ProductDetailProps> = ({ onBuy }) => {
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

  const handleShare = async () => {
    const shareData = {
      title: PRIMARY_EBOOK.title,
      text: `Check out ${PRIMARY_EBOOK.title} - The ultimate framework for TikTok growth!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareStatus('copied');
        setTimeout(() => setShareStatus('idle'), 2000);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        
        {/* 1. Header Title */}
        <div className="text-center mb-2 px-4 relative">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight uppercase">
            {PRIMARY_EBOOK.title}
          </h1>
        </div>

        {/* 2. Stars + Review Count (Tightly grouped) */}
        <div className="flex flex-col items-center mb-8 px-4 space-y-2">
          <TrustpilotStars size="w-5 h-5" />
          <p className="text-slate-400 font-bold text-xs md:text-sm tracking-tight">
            <span className="text-white font-black">5.0/5.0</span>
            <span className="mx-2 opacity-30">|</span>
            <span className="text-emerald-400">740+ verified student reviews</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          {/* Main Visuals & Purchase Block */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* 3. Cover (Tightly grouped) */}
            <div className="relative group w-[75%] sm:w-[55%] lg:w-full max-w-[340px] mb-8 perspective-1000">
              <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full transform scale-125"></div>
              <BookCover 
                title={PRIMARY_EBOOK.title}
                image={PRIMARY_EBOOK.coverImage}
                className="hover:rotate-y-3"
              />
            </div>

            {/* 4. Price (Clean, bigger) */}
            <div className="text-center mb-4">
               <div className="flex items-end justify-center space-x-3">
                  <span className="text-slate-500 line-through text-2xl font-bold mb-1">$99</span>
                  <span className="text-white font-black text-6xl tracking-tighter">${PRIMARY_EBOOK.price}</span>
               </div>
            </div>

            {/* 5. Countdown (Below Price) */}
            <div className="w-full max-w-[320px] mb-8">
              <CountdownTimer />
            </div>

            {/* 6. Action Buttons (Buy & Share) */}
            <div className="w-full max-w-[320px] space-y-4">
              <button 
                onClick={onBuy}
                className="w-full bg-white text-slate-950 hover:bg-emerald-50 font-black py-4 rounded-2xl text-lg uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center group border-b-4 border-slate-200"
              >
                Buy Now
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button 
                onClick={handleShare}
                className="w-full bg-slate-900/50 border border-white/10 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-slate-800 transition-all flex items-center justify-center space-x-3 group"
              >
                {shareStatus === 'copied' ? (
                   <span className="text-emerald-400">Link Copied!</span>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span>Share This System</span>
                  </>
                )}
              </button>
            </div>
            
            <p className="mt-6 text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] flex items-center space-x-2">
              <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>Secure Digital Delivery</span>
            </p>
          </div>

          {/* Right side: Benefits & Social Proof */}
          <div className="lg:col-span-7 space-y-12 pt-4">
            {/* 7. Description Block */}
            <section className="bg-slate-900/30 border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-xl backdrop-blur-sm">
              <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-8">Core Framework Benefits</h2>
              <div className="space-y-6 text-slate-300 font-bold text-base md:text-lg leading-relaxed">
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
            </section>

            {/* Testimonials */}
            <section className="pt-12 border-t border-white/5">
              <h2 className="text-3xl font-black text-white tracking-tight mb-10">Institutional Proof</h2>
              <div className="space-y-6">
                {REVIEWS.map((review) => (
                  <div key={review.id} className="bg-slate-900/20 border border-white/5 p-8 rounded-[2rem] hover:bg-slate-900/40 transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center font-black text-slate-500 text-xl group-hover:text-emerald-400 transition-colors">
                          {review.author[0]}
                        </div>
                        <div>
                          <div className="font-black text-white text-lg">{review.author}</div>
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{review.date}</div>
                        </div>
                      </div>
                      <div className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-4 py-2 rounded-xl border border-emerald-500/20 uppercase tracking-[0.2em]">
                        {review.earningsMention}
                      </div>
                    </div>
                    <p className="text-slate-300 italic font-medium text-lg leading-relaxed">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

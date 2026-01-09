
import React from 'react';
import { REVIEWS } from '../constants';
import { AppRoute } from '../types';

interface ReviewsPageProps {
  onNavigate: (route: AppRoute) => void;
}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4">Institutional Validation</h2>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
          SUCCESS <br />
          <span className="gradient-text italic">STORIES.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
          Verified results from members who implemented the ZETA ONE protocols. These aren't just opinions; they are documented revenue outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {REVIEWS.map((review, i) => (
          <div key={review.id} className="bg-slate-900/40 border border-white/10 p-10 rounded-[3rem] hover:border-emerald-500/30 transition-all group backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] -mr-16 -mt-16"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-white/5 flex items-center justify-center font-black text-emerald-500 text-2xl group-hover:scale-110 transition-transform">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-black text-white text-xl">{review.author}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{review.date}</div>
                </div>
              </div>
              <div className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-4 py-2 rounded-xl border border-emerald-500/20 uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/5">
                {review.earningsMention}
              </div>
            </div>

            <div className="flex items-center space-x-1 mb-6">
               {[1, 2, 3, 4, 5].map(s => (
                 <svg key={s} className="w-4 h-4 text-[#ffb600] fill-current" viewBox="0 0 20 20">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
               ))}
            </div>

            <p className="text-slate-300 italic font-medium text-xl leading-relaxed relative z-10">
              "{review.comment}"
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-[4rem] p-12 md:p-20 text-center shadow-2xl shadow-emerald-500/20">
        <h2 className="text-white font-black text-4xl md:text-6xl tracking-tighter mb-8 leading-none">
          Ready to add your name <br />
          to this list?
        </h2>
        <button 
          onClick={() => onNavigate(AppRoute.BEST_EBOOK)}
          className="bg-white text-slate-950 font-black px-12 py-6 rounded-2xl text-lg uppercase tracking-[0.2em] hover:bg-emerald-50 transition-all shadow-2xl active:scale-95"
        >
          Secure Your Copy Now
        </button>
      </div>
    </div>
  );
};

export default ReviewsPage;


import React from 'react';
import { PRIMARY_EBOOK, UPCOMING_EBOOK } from '../constants';
import { AppRoute, Ebook } from '../types';

interface AllProductsProps {
  onNavigate: (route: AppRoute) => void;
}

const TrustpilotStar: React.FC<{ fillPercent: number; isUpcoming?: boolean }> = ({ fillPercent, isUpcoming }) => (
  <div className={`relative w-4 h-4 md:w-5 md:h-5 ${isUpcoming ? 'text-slate-800' : 'text-[#ffb600]'}`}>
    <svg viewBox="0 0 20 20" className="w-full h-full">
      <path 
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
        fill={fillPercent > 0 ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={fillPercent > 0 ? "0" : "1.5"}
      />
    </svg>
  </div>
);

const RatingHeader: React.FC<{ ebook: Ebook; isUpcoming?: boolean }> = ({ ebook, isUpcoming }) => (
  <div className="flex flex-col items-center mb-3 space-y-1">
    <div className="flex items-center space-x-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <TrustpilotStar key={s} fillPercent={isUpcoming ? 0 : 100} isUpcoming={isUpcoming} />
      ))}
    </div>
    <div className="text-[8px] md:text-[10px] font-black tracking-widest uppercase flex items-center space-x-1.5">
      <span className={isUpcoming ? 'text-slate-700' : 'text-white'}>
        {isUpcoming ? '0.0' : ebook.rating.toFixed(1)}/5.0
      </span>
      <span className="opacity-10 text-white">|</span>
      <span className={isUpcoming ? 'text-slate-700' : 'text-emerald-500'}>
        {isUpcoming ? '0 REVIEWS' : `${ebook.reviewCount}+ REVIEWS`}
      </span>
    </div>
  </div>
);

const ProductCard: React.FC<{ 
  ebook: Ebook; 
  onNavigate?: () => void;
  isUpcoming?: boolean;
}> = ({ ebook, onNavigate, isUpcoming = false }) => {
  return (
    <div 
      className={`flex flex-col items-center w-full max-w-[160px] sm:max-w-[240px] md:max-w-[300px] transition-all duration-500 ${isUpcoming ? 'opacity-80' : 'cursor-pointer hover:scale-[1.03]'}`}
      onClick={!isUpcoming ? onNavigate : undefined}
    >
      {/* 1. Rating Area (Above and very close to cover) */}
      <RatingHeader ebook={ebook} isUpcoming={isUpcoming} />

      {/* 2. Ebook Cover (Vertical Book Format) */}
      <div className="relative w-full aspect-[2/3] rounded-md overflow-hidden border border-white/10 shadow-xl mb-4 group">
        <div className="absolute top-0 left-0 w-[6%] h-full bg-slate-900/90 z-20 border-r border-white/5"></div>
        <img 
          src={ebook.coverImage} 
          alt={ebook.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {isUpcoming && (
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex items-center justify-center z-30">
            <span className="bg-white/10 border border-white/20 text-white text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full backdrop-blur-md">
              Coming Soon
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* 3. Title & Price (Below Cover) */}
      <div className="text-center space-y-1.5 px-2">
        <h3 className={`text-sm md:text-lg font-black tracking-tight leading-tight ${isUpcoming ? 'text-slate-600' : 'text-white'}`}>
          {ebook.title}
        </h3>
        {!isUpcoming && (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-slate-600 line-through text-[10px] md:text-xs font-bold">$99</span>
            <span className="text-emerald-500 font-black text-base md:text-xl">${ebook.price}</span>
          </div>
        )}
        {isUpcoming && (
          <div className="text-slate-700 text-[9px] font-black uppercase tracking-widest">
            Protocol Pending
          </div>
        )}
      </div>
    </div>
  );
};

const AllProducts: React.FC<AllProductsProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Purpose Text Section */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4">Official Catalog</h2>
        <p className="text-lg md:text-2xl text-white font-bold leading-snug tracking-tight px-4 opacity-90">
          All these products are designed to help you make money, get massive views, and go viral on social media.
        </p>
      </div>

      {/* Horizontal Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-16 justify-items-center">
        {/* Available Product */}
        <ProductCard 
          ebook={PRIMARY_EBOOK} 
          onNavigate={() => onNavigate(AppRoute.BEST_EBOOK)} 
        />

        {/* Coming Soon Product */}
        <ProductCard 
          ebook={UPCOMING_EBOOK} 
          isUpcoming={true}
        />
      </div>

      {/* Institutional Trust Elements */}
      <div className="mt-32 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { title: "Direct Access", desc: "Downloads are provisioned immediately upon transaction confirmation." },
          { title: "Technical Support", desc: "Expert advisory services available for implementation troubleshooting." },
          { title: "Global Systems", desc: "Operational protocols validated for performance in all major jurisdictions." }
        ].map((benefit, i) => (
          <div key={i} className="px-6 group">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.2em] mb-3 group-hover:text-emerald-500 transition-colors">{benefit.title}</h4>
            <p className="text-slate-500 text-[11px] font-medium leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

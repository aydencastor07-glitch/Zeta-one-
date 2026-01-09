
import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-black text-white mb-8 tracking-tighter">The <span className="text-emerald-500 italic">ZETA ONE</span> Operational Standard.</h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-12 font-medium">
          ZETA ONE represents a convergence of professional creators, high-yield entrepreneurs, and digital system architects dedicated to institutionalizing digital success.
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-black text-white mb-4 border-l-4 border-emerald-500 pl-4 uppercase tracking-tighter">Institutional Excellence</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Every member of the ZETA ONE steering committee has successfully navigated the 7-figure revenue threshold. Our curriculum bypasses theoretical speculation, focusing exclusively on operational frameworks that have achieved documented market liquidity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4 border-l-4 border-emerald-500 pl-4 uppercase tracking-tighter">Strategic Leadership</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our authority is rooted in empirical success. Having optimized high-performance content systems and global monetization funnels, we provide the technical expertise necessary to achieve significant market presence without the requirement of personal exposure.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5 shadow-xl">
              <div className="text-4xl font-black text-emerald-500 mb-2 tracking-tighter">$1.2M+</div>
              <div className="text-slate-300 font-black uppercase tracking-widest text-[10px]">Capital Facilitated</div>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5 shadow-xl">
              <div className="text-4xl font-black text-emerald-500 mb-2 tracking-tighter">700+</div>
              <div className="text-slate-300 font-black uppercase tracking-widest text-[10px]">Verified Success Stories</div>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5 shadow-xl">
              <div className="text-4xl font-black text-emerald-500 mb-2 tracking-tighter">24/7</div>
              <div className="text-slate-300 font-black uppercase tracking-widest text-[10px]">Advisory Availability</div>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5 shadow-xl">
              <div className="text-4xl font-black text-emerald-500 mb-2 tracking-tighter">100%</div>
              <div className="text-slate-300 font-black uppercase tracking-widest text-[10px]">Technical Validation</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

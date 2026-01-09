
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-slate-900 border-2 border-white/10 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                 <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 17L19 7M19 7L19 13M19 7L13 7" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-3xl font-black tracking-tighter text-white">ZETA</span>
                <span className="text-3xl font-black tracking-tighter text-emerald-500 italic">ONE</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm font-medium leading-relaxed text-base">
              The premier operational framework for modern digital creators. We specialize in converting attention into liquid capital through faceless viral systems.
            </p>
            <div className="mt-8 flex space-x-4 opacity-50 grayscale hover:grayscale-0 transition-all">
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-4" />
            </div>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 border-l-2 border-emerald-500 pl-4">Operational Support</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Advisory Dashboard</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Revenue Tracking</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Strategic Discord</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">System Updates</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 border-l-2 border-emerald-500 pl-4">Global Intelligence</h4>
            <p className="text-slate-500 text-xs font-medium mb-6">Receive high-yield algorithmic protocols directly to your private inbox.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="name@zeta.one" 
                className="bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 text-sm w-full focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
              />
              <button className="w-full bg-white text-slate-950 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-50 transition-all shadow-xl">
                Secure Invitation
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-700 text-[10px] font-black uppercase tracking-[0.4em]">
          <div>&copy; {new Date().getFullYear()} ZETA ONE • Institutional Systems</div>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <span className="cursor-pointer hover:text-slate-400 transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-slate-400 transition-colors">Compliance</span>
            <span className="cursor-pointer hover:text-slate-400 transition-colors">Revenue Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

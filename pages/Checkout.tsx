
import React, { useState } from 'react';
import { PRIMARY_EBOOK } from '../constants';

interface CheckoutProps {
  onPay: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onPay }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      // Persist to localStorage to survive the Stripe redirect
      localStorage.setItem('zeta_pending_name', formData.fullName);
      localStorage.setItem('zeta_pending_email', formData.email);
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-slate-900/40 border border-white/10 p-8 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
        
        {step === 1 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12">
              <div className="inline-block bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-emerald-500/20 mb-4">
                Step 1: Delivery Protocol
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">Identity Details</h1>
              <p className="text-slate-400 font-medium">Enter your details to receive your ebook.</p>
            </div>

            <form onSubmit={handleDetailsSubmit} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 ml-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-800 text-sm font-medium"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 ml-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-800 text-sm font-medium"
                    placeholder="name@example.com"
                  />
                  <p className="mt-3 text-[10px] text-slate-500 font-medium leading-relaxed italic ml-1">
                    Please enter the exact email address where you want to receive the ebook.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-slate-950 font-black py-6 rounded-2xl text-xs uppercase tracking-[0.3em] hover:bg-emerald-50 transition-all shadow-xl shadow-white/5 active:scale-[0.98] flex items-center justify-center space-x-3 group"
              >
                <span>Confirm my information</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-blue-500/20 mb-4">
                Step 2: Operational Review
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">Review Order</h1>
              <p className="text-slate-400 font-medium">Verify your information before finalizing acquisition.</p>
            </div>

            <div className="space-y-8">
              {/* Customer Info Section */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl -mr-12 -mt-12 group-hover:bg-blue-500/10 transition-colors"></div>
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Customer Information
                </h4>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">Full Name</div>
                    <div className="text-white font-bold text-lg tracking-tight">{formData.fullName}</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">Delivery Email</div>
                    <div className="text-white font-bold text-lg tracking-tight">{formData.email}</div>
                  </div>
                </div>
                <button 
                  onClick={() => setStep(1)}
                  className="mt-6 text-[9px] font-black text-emerald-500/60 hover:text-emerald-500 uppercase tracking-widest transition-colors flex items-center"
                >
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  Edit Details
                </button>
              </div>

              {/* Product Info Section */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-3xl p-8 flex items-center space-x-8">
                <div className="w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl border border-white/5">
                  <img src={PRIMARY_EBOOK.coverImage} alt={PRIMARY_EBOOK.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">Product</h4>
                  <h3 className="text-white font-black text-xl mb-1 tracking-tight leading-tight">{PRIMARY_EBOOK.title}</h3>
                  <div className="text-emerald-500 font-black text-2xl mt-4">${PRIMARY_EBOOK.price}.00</div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <div className="flex justify-between items-center mb-10 px-2">
                  <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Grand Total</div>
                  <div className="text-white text-3xl font-black">${PRIMARY_EBOOK.price}.00</div>
                </div>

                <button
                  onClick={onPay}
                  className="w-full bg-white text-slate-950 font-black py-6 rounded-2xl text-sm uppercase tracking-[0.3em] hover:bg-emerald-50 transition-all shadow-xl shadow-white/5 active:scale-[0.98] flex items-center justify-center space-x-3 group"
                >
                  <span>Pay for the Ebook</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="mt-12 text-[10px] font-black text-slate-700 uppercase tracking-[0.5em]">
        ZETA ONE Institutional Systems • 256-Bit SSL Secured
      </p>
    </div>
  );
};

export default Checkout;

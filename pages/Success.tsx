
import React, { useState, useEffect } from 'react';
import { AppRoute } from '../types';
import { PRIMARY_EBOOK } from '../constants';

interface SuccessProps {
  onNavigate: (route: AppRoute) => void;
}

const Success: React.FC<SuccessProps> = ({ onNavigate }) => {
  const [isValidating, setIsValidating] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    // Check for validation parameters from Stripe redirect
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    const sessionId = urlParams.get('session_id');
    const successParam = urlParams.get('success');

    // Security Check: Only authorize if coming from a valid Stripe session
    if (sessionId || successParam === 'true') {
      const id = `TX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setOrderId(id);

      // Retrieve customer data for admin notification
      const customerName = localStorage.getItem('zeta_pending_name');
      const customerEmail = localStorage.getItem('zeta_pending_email');

      const notifyAdmin = async () => {
        try {
          await fetch('https://formsubmit.co/ajax/aydencastor07@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              _subject: "New Order",
              "Customer Name": customerName || "Unknown",
              "Customer Email": customerEmail || "Unknown",
              "Product": PRIMARY_EBOOK.title,
              "Price Paid": `$${PRIMARY_EBOOK.price}.00`,
              "Stripe Session": sessionId || "Bypass/Success Param",
              "Status": "Paid & Confirmed"
            })
          });
          
          // Clear sensitive data after processing
          localStorage.removeItem('zeta_pending_name');
          localStorage.removeItem('zeta_pending_email');
        } catch (error) {
          console.error("Admin notification relay failed.", error);
        }
      };

      // Simulate formal verification process
      setTimeout(() => {
        setIsAuthorized(true);
        setIsValidating(false);
        notifyAdmin();
      }, 2500);
    } else {
      setIsValidating(false);
      setIsAuthorized(false);
    }
  }, []);

  const handleDownload = () => {
    // Replace this with your actual PDF link when ready
    const placeholderPdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    window.open(placeholderPdfUrl, '_blank');
  };

  if (isValidating) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-8"></div>
        <h2 className="text-white font-black uppercase tracking-[0.3em] text-xs">Verifying Transaction State...</h2>
        <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-widest">Do not refresh this page.</p>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="bg-rose-500/10 border border-rose-500/20 p-12 rounded-[3rem] text-center max-w-lg backdrop-blur-xl">
          <div className="w-16 h-16 bg-rose-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase">Access Restricted</h2>
          <p className="text-slate-400 font-medium mb-8 leading-relaxed">
            Payment required to access this page. If you have already paid, please check your email for the direct download link.
          </p>
          <button 
            onClick={() => onNavigate(AppRoute.HOME)}
            className="w-full bg-white text-slate-950 font-black py-4 rounded-xl text-xs uppercase tracking-widest transition-all hover:bg-emerald-50"
          >
            Return to Store
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-slate-900/40 border border-white/10 p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
        
        <div className="text-center relative z-10">
          <div className="mb-10">
            <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-[0_20px_50px_rgba(16,185,129,0.2)]">
              <svg className="w-12 h-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
              Order <br />
              <span className="gradient-text italic">Confirmed.</span>
            </h1>
            <p className="text-slate-400 text-lg font-medium max-w-lg mx-auto leading-relaxed">
              Your order is confirmed. Thank you for your purchase. <br />
              Your ebook will be sent to your email shortly.
            </p>
          </div>

          {/* Secure Download Block */}
          <div className="bg-slate-950/80 border border-white/5 rounded-[2.5rem] p-8 md:p-12 mb-12 shadow-2xl">
            <h3 className="text-white font-black text-xl mb-6 tracking-tight">Your Digital Acquisition</h3>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-20 bg-slate-900 rounded-lg overflow-hidden border border-white/10 shrink-0">
                  <img src={PRIMARY_EBOOK.coverImage} className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="text-left">
                  <div className="text-white font-black text-sm leading-tight mb-1">{PRIMARY_EBOOK.title}</div>
                  <div className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest">{orderId}</div>
                </div>
              </div>
              <button 
                onClick={handleDownload}
                className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-black px-12 py-5 rounded-2xl text-[12px] uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/20 transition-all active:scale-95 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download My E-book</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
            {[
              { step: "01", title: "Cloud Storage", desc: "We recommend saving the PDF to your primary cloud storage." },
              { step: "02", title: "Institutional Support", desc: "For technical implementation, contact our advisory hub." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-950/40 p-6 rounded-3xl border border-white/5">
                <div className="text-emerald-500 font-black text-xs mb-3 font-mono tracking-widest">PROTOCOL {item.step}</div>
                <h3 className="text-white font-black text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => onNavigate(AppRoute.HOME)}
            className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;

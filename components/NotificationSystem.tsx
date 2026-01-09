
import React, { useState, useEffect } from 'react';
import { TESTIMONIAL_NOTIFICATIONS } from '../constants';
import { AppRoute } from '../types';

interface NotificationSystemProps {
  onNavigate: (route: AppRoute) => void;
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({ onNavigate }) => {
  const [current, setCurrent] = useState<typeof TESTIMONIAL_NOTIFICATIONS[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const triggerNotification = () => {
      const randomItem = TESTIMONIAL_NOTIFICATIONS[Math.floor(Math.random() * TESTIMONIAL_NOTIFICATIONS.length)];
      setCurrent(randomItem);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      // Schedule next notification (30s to 90s)
      const nextDelay = Math.random() * (90000 - 30000) + 30000;
      setTimeout(triggerNotification, nextDelay);
    };

    const firstDelay = 15000; // First one after 15s
    const timeout = setTimeout(triggerNotification, firstDelay);
    return () => clearTimeout(timeout);
  }, []);

  if (!current && !isModalOpen) return null;

  return (
    <>
      {/* Toast Notification */}
      <div 
        className={`fixed top-24 left-1/2 -translate-x-1/2 z-[60] transition-all duration-700 ease-out cursor-pointer transform ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
        }`}
        onClick={() => {
          setIsModalOpen(true);
          setIsVisible(false);
        }}
      >
        <div className="bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center space-x-4 max-w-sm">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-black text-sm shrink-0 border border-emerald-500/20">
            {current?.name[0]}
          </div>
          <div className="overflow-hidden">
            <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-0.5">New Success Story</div>
            <div className="text-white text-xs font-bold truncate">{current?.message}</div>
            <div className="text-slate-500 text-[9px] uppercase tracking-tighter mt-0.5">{current?.name} from {current?.location}</div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {isModalOpen && current && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-slate-900 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-200">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tighter">Verified Result</h3>
              <p className="text-slate-400 font-medium mb-8 leading-relaxed italic">
                "{current.message}"
              </p>
              
              <div className="bg-slate-950/50 rounded-2xl p-4 border border-white/5 mb-8 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-xs">
                    {current.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{current.name}</div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-widest">Student from {current.location}</div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  onNavigate(AppRoute.BEST_EBOOK);
                  setIsModalOpen(false);
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-xl uppercase tracking-widest shadow-xl shadow-emerald-500/20 transition-all active:scale-95"
              >
                Get the Ebook
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationSystem;

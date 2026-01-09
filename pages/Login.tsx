import React, { useState } from 'react';
import { TOTAL_STUDENT_EARNINGS } from '../constants';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate high-end backend validation and identity verification
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32 relative overflow-hidden bg-slate-950">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Institutional Value Prop */}
        <div className="hidden lg:block space-y-8 pr-12 border-r border-white/5">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">Verified Institutional Access</span>
          </div>
          
          <h2 className="text-5xl font-black text-white tracking-tighter leading-[0.95]">
            Secure Your <br />
            <span className="gradient-text italic">Digital Estate</span>.
          </h2>
          
          <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
            Initialize your profile to access the high-yield frameworks utilized by the world's most efficient digital creators.
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center shadow-xl">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <div className="text-white font-black text-sm uppercase tracking-widest">Community Revenue</div>
                <div className="text-emerald-500 font-mono text-xl font-black">${TOTAL_STUDENT_EARNINGS.toLocaleString()}+</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center shadow-xl">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <div className="text-white font-black text-sm uppercase tracking-widest">Data Protection</div>
                <div className="text-slate-500 font-mono text-xs font-bold uppercase tracking-widest">AES-256 Encryption Standard</div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Creator" className="w-full h-full object-cover opacity-80" />
              </div>
            ))}
            <div className="h-10 px-4 rounded-full border-2 border-slate-950 bg-slate-900 flex items-center justify-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
              +700 Members
            </div>
          </div>
        </div>

        {/* Right Column: Access Terminal (The Form) */}
        <div className="w-full max-w-md mx-auto lg:max-w-none">
          <div className="bg-slate-900/40 border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors"></div>
            
            <div className="text-center mb-10">
              <div className="mb-6 inline-block p-1 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-2xl shadow-xl">
                <div className="bg-slate-950 rounded-[14px] p-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2 leading-none">
                {isNewUser ? 'Begin Inscription' : 'System Login'}
              </h1>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                {isNewUser ? 'Operational Enrollment Protocol v.4.0' : 'Identity Verification Required'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {isNewUser && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                    Full Professional Identity
                  </label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/10 transition-all placeholder:text-slate-800 text-sm font-medium"
                    placeholder="Full Legal Name"
                  />
                </div>
              )}

              <div>
                <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                  Registry Email Address
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/10 transition-all placeholder:text-slate-800 text-sm font-medium"
                  placeholder="name@zeta.hub"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 ml-1">
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest">
                    Encryption Password
                  </label>
                  {!isNewUser && (
                    <button type="button" className="text-[9px] font-black text-emerald-500/60 hover:text-emerald-500 uppercase tracking-widest transition-colors">
                      Reset
                    </button>
                  )}
                </div>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/10 transition-all placeholder:text-slate-800 text-sm font-medium"
                  placeholder="••••••••••••"
                />
              </div>

              <div className="pt-2">
                <button
                  disabled={loading}
                  className="w-full bg-white text-slate-950 font-black py-4 rounded-2xl text-[11px] uppercase tracking-[0.3em] hover:bg-emerald-50 transition-all shadow-xl shadow-white/5 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>{isNewUser ? 'Execute Inscription' : 'Authenticate Entry'}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-10 pt-8 border-t border-white/5 text-center">
              <button
                onClick={() => setIsNewUser(!isNewUser)}
                className="text-slate-500 text-[10px] font-black uppercase tracking-[0.15em] hover:text-emerald-400 transition-colors inline-flex items-center space-x-2"
              >
                <span>{isNewUser ? 'Existing registry entry? Login' : 'New operational unit? Create Identity'}</span>
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center opacity-30">
            <p className="text-[8px] font-black text-slate-600 uppercase tracking-[0.5em]">
              Zeta Global Network • London • Paris • New York
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
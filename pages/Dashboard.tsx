
import React from 'react';
import { AppRoute } from '../types';
import { PRIMARY_EBOOK, TOTAL_STUDENT_EARNINGS } from '../constants';

interface DashboardProps {
  onNavigate: (route: AppRoute) => void;
  onLogout?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, onLogout }) => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 space-y-4 md:space-y-0">
        <div>
          <div className="inline-block bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-emerald-500/20 mb-3">
            Elite Creator Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Creator Dashboard</h1>
          <p className="text-slate-400 font-medium mt-1">Manage your empire and track your growth states.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right hidden sm:block">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Account ID</div>
            <div className="text-white font-mono text-sm">#ZETA-99421</div>
          </div>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-blue-600 p-0.5">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-white text-xs">JD</div>
          </div>
          {onLogout && (
            <button 
              onClick={onLogout}
              className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all"
              title="Logout"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Stats (States) Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { 
            label: "Community Revenue", 
            value: `$${TOTAL_STUDENT_EARNINGS.toLocaleString()}`, 
            change: "+$42k this week", 
            trend: "up",
            description: "Total collective student earnings"
          },
          { 
            label: "Personal Points", 
            value: "84,200", 
            change: "+24k", 
            trend: "up",
            description: "Viral growth score"
          },
          { 
            label: "Success Rate", 
            value: "94.8%", 
            change: "+0.2%", 
            trend: "up",
            description: "Member completion rate"
          },
          { 
            label: "Global Reach", 
            value: "142k", 
            change: "+15%", 
            trend: "up",
            description: "Content impressions"
          }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl shadow-xl hover:border-emerald-500/20 transition-all group">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 group-hover:text-emerald-500 transition-colors">{stat.label}</div>
            <div className="flex items-baseline space-x-2 mb-1">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className={`text-[10px] font-black ${stat.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stat.change}
              </div>
            </div>
            <p className="text-[9px] text-slate-600 font-bold uppercase tracking-tight mb-4">{stat.description}</p>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={`h-full ${stat.trend === 'up' ? 'bg-emerald-500' : 'bg-rose-500'}`} 
                style={{ width: stat.trend === 'up' ? '75%' : '40%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-8">
          {/* Your Products / Ebook Section */}
          <section className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] -mr-32 -mt-32"></div>
             <div className="relative z-10">
               <div className="flex justify-between items-center mb-8">
                 <h2 className="text-2xl font-black text-white tracking-tight">Your Purchased Systems</h2>
                 <button 
                  onClick={() => onNavigate(AppRoute.ALL_EBOOKS)}
                  className="text-emerald-500 text-xs font-black uppercase tracking-widest hover:text-emerald-400 transition-colors"
                 >
                  View All Store Items
                 </button>
               </div>

               <div className="space-y-4">
                 <div 
                  className="group bg-slate-950/50 border border-slate-800 hover:border-emerald-500/30 p-6 rounded-3xl transition-all cursor-pointer flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6"
                  onClick={() => onNavigate(AppRoute.BEST_EBOOK)}
                 >
                   <div className="w-24 h-32 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl transition-transform group-hover:scale-105">
                     <img src={PRIMARY_EBOOK.coverImage} alt={PRIMARY_EBOOK.title} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-grow text-center md:text-left">
                     <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                       <h3 className="text-xl font-black text-white">{PRIMARY_EBOOK.title}</h3>
                       <div className="mt-2 md:mt-0 bg-emerald-500 text-white text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest inline-block mx-auto md:mx-0">
                         Active Now
                       </div>
                     </div>
                     <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-lg">
                       Verified strategy by professionals. This blueprint has helped students reach a collective <span className="text-emerald-400 font-bold">$600,000</span> in earnings.
                     </p>
                     <div className="flex items-center justify-center md:justify-start space-x-4">
                       <button 
                        className="bg-white text-slate-950 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-lg"
                        onClick={(e) => { e.stopPropagation(); onNavigate(AppRoute.BEST_EBOOK); }}
                       >
                         Open Ebook Page
                       </button>
                       <button className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">
                         Download PDF
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </section>

          {/* Mastery Tools */}
          <section className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
            <h2 className="text-2xl font-black text-white tracking-tight mb-8">Professional Creator Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Hook Generator", desc: "AI-powered viral hook templates.", icon: "🔗", status: "Active" },
                { name: "Post Scheduler", desc: "Optimize your upload times.", icon: "⏰", status: "Active" },
                { name: "Revenue Tracker", desc: "Connect your global accounts.", icon: "📊", status: "Setup Needed" },
                { name: "Voice Cloning", desc: "Clone your voice for fast content.", icon: "🎙️", status: "Pro Feature" }
              ].map((tool, i) => (
                <div key={i} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex items-start space-x-4 hover:border-blue-500/20 transition-all cursor-pointer group">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-2xl shadow-inner border border-white/5 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <div>
                    <div className="font-black text-white text-sm">{tool.name}</div>
                    <p className="text-slate-500 text-xs mb-3">{tool.desc}</p>
                    <span className={`text-[8px] font-black uppercase tracking-widest ${tool.status === 'Active' ? 'text-emerald-500' : 'text-slate-600'}`}>
                      {tool.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
            <h3 className="text-lg font-black text-white mb-6 tracking-tight">Community Live Feed</h3>
            <div className="space-y-6">
              {[
                { user: "Admin", msg: "New strategy video uploaded to the #global-hacks channel.", time: "4m ago", color: "bg-blue-600" },
                { user: "Chidi", msg: "Just hit 10k followers in Nigeria using Chapter 4!", time: "1h ago", color: "bg-emerald-600" },
                { user: "Sarah", msg: "Does anyone have the hook sheet for fashion niche?", time: "3h ago", color: "bg-rose-600" },
                { user: "Mike", msg: "Payout received! $450 from this week's work.", time: "5h ago", color: "bg-purple-600" }
              ].map((post, i) => (
                <div key={i} className="flex space-x-4">
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 ${post.color} flex items-center justify-center font-black text-[10px] text-white uppercase`}>
                    {post.user[0]}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-0.5">
                       <span className="text-xs font-black text-white">{post.user}</span>
                       <span className="text-[8px] font-bold text-slate-500 uppercase">{post.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {post.msg}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 bg-slate-950 border border-slate-800 text-slate-400 font-black py-3 rounded-xl text-[10px] uppercase tracking-widest hover:text-white transition-all">
              Join Discord Server
            </button>
          </section>

          <section className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-[2rem] p-8 shadow-2xl shadow-emerald-500/10">
            <h3 className="text-white font-black text-xl mb-4 tracking-tight leading-none">Creator Wealth Program</h3>
            <p className="text-white/80 text-xs font-medium leading-relaxed mb-6">
              You are currently earning at Tier 1. Scale to Tier 2 by completing 3 more modules and hit the $5k milestone.
            </p>
            <div className="w-full bg-black/20 h-2 rounded-full mb-6">
              <div className="bg-white h-full w-[65%] rounded-full shadow-lg"></div>
            </div>
            <button className="w-full bg-white text-slate-950 font-black py-3 rounded-xl text-xs uppercase tracking-widest">
              Upgrade Membership
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

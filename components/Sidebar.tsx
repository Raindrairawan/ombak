
import React from 'react';
import { LogOut, ChevronRight } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../constants';

interface SidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200/60 h-screen flex flex-col overflow-y-auto">
      {/* Logo Area */}
      <div className="p-8 mb-4">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl shadow-indigo-100 group-hover:rotate-6 transition-transform">
            OB
          </div>
          <div>
            <h1 className="font-black text-slate-900 leading-none uppercase tracking-tighter text-base">
              Ombak <br /> <span className="text-indigo-600">Bersaudara</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 space-y-2">
        <p className="px-4 py-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-2">Menu Utama</p>
        {NAVIGATION_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 ring-4 ring-indigo-50' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-600 transition-colors'} />
                <span className="font-bold text-sm tracking-tight">{item.label}</span>
              </div>
              {isActive && <ChevronRight size={14} className="animate-in slide-in-from-left-2" />}
            </button>
          );
        })}
      </nav>

      {/* Logout Footer */}
      <div className="p-6">
        <div className="bg-slate-50 p-4 rounded-[2rem] space-y-4">
          <div className="flex items-center gap-3 px-2">
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">System Online</p>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-white hover:shadow-sm transition-all font-black text-xs uppercase tracking-widest">
            <LogOut size={18} />
            <span>Keluar</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;


import React from 'react';
import { ChevronDown, Search, Bell, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/60 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 transition-all">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Trigger */}
        <button 
          onClick={onMenuClick}
          className="p-2.5 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 md:hidden transition-colors border border-slate-200/50"
        >
          <Menu size={20} />
        </button>

        <div className="hidden lg:flex items-center gap-3 bg-slate-100/80 px-4 py-2.5 rounded-2xl w-96 transition-all focus-within:ring-4 focus-within:ring-indigo-50 focus-within:bg-white border border-transparent focus-within:border-indigo-100 group">
          <Search size={18} className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Cari data, produk, atau staff..." 
            className="bg-transparent outline-none text-sm w-full placeholder:text-slate-500 font-medium"
          />
        </div>
      </div>

      <div className="flex md:hidden">
         <h1 className="text-sm font-black text-slate-800 tracking-tighter uppercase">OB <span className="text-indigo-600">Inv</span></h1>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <button className="relative p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all border border-transparent hover:border-indigo-100">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

        <button className="flex items-center gap-3 group p-1 pr-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-slate-100 overflow-hidden ring-2 ring-transparent group-hover:ring-indigo-100 transition-all shadow-sm">
            <img 
              src="https://picsum.photos/id/64/100/100" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-sm font-bold text-slate-800 leading-none">Topek Mahaldi</p>
            <p className="text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest opacity-70">Administrator</p>
          </div>
          <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600 transition-colors hidden sm:block" />
        </button>
      </div>
    </header>
  );
};

export default Header;

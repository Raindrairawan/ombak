
import React from 'react';
import { ChevronDown, Search, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
      <div className="hidden lg:flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-full w-96 transition-all focus-within:ring-2 focus-within:ring-indigo-100 focus-within:bg-white border border-transparent focus-within:border-indigo-200">
        <Search size={18} className="text-slate-400" />
        <input 
          type="text" 
          placeholder="Cari data, produk, atau staff..." 
          className="bg-transparent outline-none text-sm w-full placeholder:text-slate-500"
        />
      </div>

      <div className="flex md:hidden">
         <h1 className="text-lg font-bold text-slate-800">OB Inventory</h1>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="relative p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200"></div>

        <button className="flex items-center gap-3 group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-800 leading-none">Topek Mahaldi</p>
            <p className="text-[11px] font-medium text-slate-400 mt-1 uppercase tracking-wider">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-transparent group-hover:ring-indigo-100 transition-all">
            <img 
              src="https://picsum.photos/id/64/100/100" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronDown size={16} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
        </button>
      </div>
    </header>
  );
};

export default Header;

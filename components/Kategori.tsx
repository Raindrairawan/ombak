
import React from 'react';
import { Plus, Search, Tags, Layers, ChevronRight, MoreHorizontal, Box, Palette, Zap, Wrench, Droplets, Lightbulb } from 'lucide-react';
import { MOCK_CATEGORIES_DETAIL } from '../constants';

const IconMap: Record<string, React.ElementType> = {
  Box,
  Palette,
  Zap,
  Wrench,
  Droplets,
  Lightbulb
};

const Kategori: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Kategori Produk</h2>
          <p className="text-slate-500 text-sm">Klasifikasikan inventaris Anda untuk manajemen yang lebih teratur.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-100">
          <Plus size={18} />
          <span>Tambah Kategori Baru</span>
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Kategori</p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-black text-slate-800">{MOCK_CATEGORIES_DETAIL.length}</h3>
            <span className="text-slate-400 text-sm mb-1">Unit</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Kategori Terpopuler</p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-black text-indigo-600">Semen</h3>
            <span className="text-slate-400 text-sm mb-1">(45% Stok)</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Produk Tanpa Kategori</p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-black text-red-500">0</h3>
            <span className="text-slate-400 text-sm mb-1">Items</span>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Cari nama kategori atau deskripsi..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50 rounded-xl outline-none text-sm transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
            Urutkan A-Z
          </button>
          <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
            Terbanyak
          </button>
        </div>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_CATEGORIES_DETAIL.map((cat) => {
          const IconComp = IconMap[cat.iconName] || Tags;
          return (
            <div key={cat.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl transition-transform group-hover:scale-110" style={{ backgroundColor: `${cat.color}15`, color: cat.color }}>
                    <IconComp size={24} />
                  </div>
                  <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-1">{cat.name}</h3>
                <p className="text-sm text-slate-500 line-clamp-2 h-10 mb-4">{cat.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Jumlah Produk</p>
                    <p className="text-sm font-black text-slate-700">{cat.itemCount} SKU</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Kontribusi Stok</p>
                    <p className="text-sm font-black text-indigo-600">{cat.value}%</p>
                  </div>
                </div>

                <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000" 
                    style={{ width: `${cat.value}%`, backgroundColor: cat.color }}
                  ></div>
                </div>
              </div>
              
              <button className="w-full py-3 bg-slate-50 group-hover:bg-indigo-600 text-slate-500 group-hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2">
                <span>Kelola Produk</span>
                <ChevronRight size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Kategori;

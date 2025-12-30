
import React, { useState } from 'react';
import { 
  Plus, Search, Filter, Download, 
  MoreVertical, Edit, Trash2, 
  ArrowUpDown, AlertTriangle, 
  Package, DollarSign, Layers,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const Produk: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const totalValue = MOCK_PRODUCTS.reduce((acc, curr) => acc + (curr.stock * curr.price), 0);
  const lowStockItems = MOCK_PRODUCTS.filter(p => p.status === 'Low Stock' || p.status === 'Out of Stock').length;

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Daftar Inventaris Produk</h2>
          <p className="text-slate-500 text-sm">Monitor stok, harga, dan pergerakan barang Anda.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
            <Download size={18} />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-100">
            <Plus size={18} />
            <span>Produk Baru</span>
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
            <Package size={24} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Produk</p>
            <p className="text-xl font-bold text-slate-800">{MOCK_PRODUCTS.length} SKU</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Stok Kritis</p>
            <p className="text-xl font-bold text-slate-800">{lowStockItems} Item</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Nilai Inventaris</p>
            <p className="text-xl font-bold text-slate-800">{formatCurrency(totalValue)}</p>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Cari SKU atau nama produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-transparent focus:border-indigo-200 focus:bg-white rounded-xl outline-none text-sm transition-all"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-50">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-50">
            <ArrowUpDown size={16} />
            Urutkan
          </button>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                <th className="px-6 py-4">Informasi Produk</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Harga Satuan</th>
                <th className="px-6 py-4">Level Stok</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_PRODUCTS.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => {
                const stockPercentage = Math.min((product.stock / (product.minStock * 5)) * 100, 100);
                let stockBarColor = 'bg-indigo-500';
                if (product.status === 'Low Stock') stockBarColor = 'bg-orange-500';
                if (product.status === 'Out of Stock') stockBarColor = 'bg-red-500';

                return (
                  <tr key={product.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                          <Package size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 leading-tight">{product.name}</p>
                          <p className="text-[11px] text-slate-400 font-mono mt-0.5">{product.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-slate-800">{formatCurrency(product.price)}</p>
                      <p className="text-[10px] text-slate-400 italic">per {product.unit}</p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="w-32">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs font-black text-slate-700">{product.stock} {product.unit}</span>
                          <span className="text-[10px] text-slate-400">Min: {product.minStock}</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`${stockBarColor} h-full rounded-full transition-all duration-500`} 
                            style={{ width: `${product.stock === 0 ? 0 : Math.max(stockPercentage, 5)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        product.status === 'In Stock' ? 'bg-green-50 text-green-700' :
                        product.status === 'Low Stock' ? 'bg-orange-50 text-orange-700' :
                        'bg-red-50 text-red-700'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          product.status === 'In Stock' ? 'bg-green-500' :
                          product.status === 'Low Stock' ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}></div>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                          <Edit size={16} />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-slate-500">
            Menampilkan <span className="text-slate-800">1-8</span> dari <span className="text-slate-800">42</span> produk
          </p>
          <div className="flex items-center gap-1">
            <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg disabled:opacity-30" disabled>
              <ChevronLeft size={18} />
            </button>
            {[1, 2, 3, '...', 12].map((page, i) => (
              <button 
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${
                  page === 1 ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produk;

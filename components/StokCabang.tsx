
import React, { useState } from 'react';
import { 
  Truck, ArrowRightLeft, Search, 
  MapPin, AlertCircle, TrendingUp, 
  History, ChevronRight, Package,
  Filter, MoreVertical, RefreshCw
} from 'lucide-react';
import { MOCK_BRANCHES, MOCK_BRANCH_STOCK, MOCK_STOCK_MOVEMENTS } from '../constants';

const StokCabang: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState(MOCK_BRANCHES[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const currentBranch = MOCK_BRANCHES.find(b => b.id === selectedBranchId);
  const branchStocks = MOCK_BRANCH_STOCK.filter(s => s.branchId === selectedBranchId);
  const filteredStocks = branchStocks.filter(s => 
    s.productName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lowStockCount = branchStocks.filter(s => s.currentStock <= s.minStock).length;

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Monitor Stok Cabang</h2>
          <p className="text-slate-500 text-sm">Kelola distribusi dan persediaan barang di setiap lokasi ritel.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
            <RefreshCw size={18} />
            <span>Update Opname</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-100">
            <ArrowRightLeft size={18} />
            <span>Transfer Antar Cabang</span>
          </button>
        </div>
      </div>

      {/* Branch Tabs Selection */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-slate-100">
        {MOCK_BRANCHES.map((branch) => (
          <button
            key={branch.id}
            onClick={() => setSelectedBranchId(branch.id)}
            className={`px-5 py-3 rounded-t-xl text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              selectedBranchId === branch.id 
                ? 'bg-white text-indigo-600 border-x border-t border-slate-100' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <MapPin size={16} />
            {branch.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Stats Section */}
        <div className="lg:col-span-3 space-y-6">
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total SKU Tersedia</p>
              <h4 className="text-2xl font-black text-slate-800">{branchStocks.length} Items</h4>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Barang Stok Rendah</p>
              <div className="flex items-center gap-2 text-red-600">
                <AlertCircle size={18} />
                <h4 className="text-2xl font-black">{lowStockCount} Items</h4>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pergerakan Tercepat</p>
              <div className="flex items-center gap-2 text-green-600">
                <TrendingUp size={18} />
                <h4 className="text-xl font-black">Semen Holcim</h4>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Cari barang di cabang ini..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-transparent focus:border-indigo-200 focus:bg-white rounded-xl outline-none text-sm transition-all"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50">
                <Filter size={14} />
                Filter
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                    <th className="px-6 py-4">Nama Produk / SKU</th>
                    <th className="px-6 py-4 text-center">Stok Saat Ini</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4">Update Terakhir</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStocks.length > 0 ? filteredStocks.map((stock) => {
                    const isLow = stock.currentStock <= stock.minStock;
                    return (
                      <tr key={stock.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-sm font-bold text-slate-800">{stock.productName}</p>
                            <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">{stock.sku}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`text-sm font-black ${isLow ? 'text-red-600' : 'text-slate-800'}`}>
                            {stock.currentStock} {stock.unit}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase ${isLow ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                            {isLow ? 'Kritis' : 'Aman'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs text-slate-500 font-medium">{stock.lastRestock}</span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-1.5 text-slate-300 hover:text-indigo-600 transition-colors">
                            <MoreVertical size={16} />
                          </button>
                        </td>
                      </tr>
                    );
                  }) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center">
                        <Package size={48} className="mx-auto text-slate-200 mb-3" />
                        <p className="text-slate-400 text-sm italic">Tidak ada stok yang cocok dengan pencarian Anda.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Movements Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <History size={16} className="text-indigo-600" />
              Aktivitas Stok
            </h3>
            <button className="text-[10px] font-bold text-indigo-600 hover:underline">Semua</button>
          </div>

          <div className="space-y-4">
            {MOCK_STOCK_MOVEMENTS.map((mv) => (
              <div key={mv.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider ${
                    mv.type === 'Transfer' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                  }`}>
                    {mv.type}
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono">#{mv.id}</span>
                </div>
                
                <h4 className="text-xs font-bold text-slate-800 mb-1">{mv.item}</h4>
                <p className="text-[10px] font-black text-indigo-600 mb-2">{mv.quantity}</p>
                
                <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-3 bg-slate-50 p-2 rounded-lg">
                  <span className="truncate">{mv.from}</span>
                  <ArrowRightLeft size={10} className="shrink-0" />
                  <span className="truncate">{mv.to}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                  <span className={`text-[9px] font-bold flex items-center gap-1 ${
                    mv.status === 'Selesai' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    <div className={`w-1 h-1 rounded-full ${mv.status === 'Selesai' ? 'bg-green-600' : 'bg-blue-600 animate-pulse'}`}></div>
                    {mv.status}
                  </span>
                  <span className="text-[9px] text-slate-400">{mv.date.split(',')[0]}</span>
                </div>

                {/* Tracking Icon Backdrop */}
                <Truck className="absolute -right-2 -bottom-2 w-12 h-12 text-slate-50 group-hover:text-indigo-50/50 transition-colors pointer-events-none" />
              </div>
            ))}
            
            <button className="w-full py-3 bg-slate-50 hover:bg-indigo-600 text-indigo-600 hover:text-white transition-all rounded-xl text-xs font-bold flex items-center justify-center gap-2">
              Lacak Pengiriman
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StokCabang;

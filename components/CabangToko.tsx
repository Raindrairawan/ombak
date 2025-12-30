
import React from 'react';
import { Plus, Search, MapPin, User, Phone, Calendar, MoreVertical, Store, CheckCircle2, AlertCircle, HardHat } from 'lucide-react';
import { MOCK_BRANCHES } from '../constants';

const CabangToko: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Manajemen Cabang Toko</h2>
          <p className="text-slate-500 text-sm">Kelola lokasi, manager, dan status operasional seluruh cabang.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-100">
          <Plus size={18} />
          <span>Tambah Cabang Baru</span>
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
            <Store size={24} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Cabang</p>
            <p className="text-xl font-bold text-slate-800">{MOCK_BRANCHES.length} Toko</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Aktif Melayani</p>
            <p className="text-xl font-bold text-slate-800">
              {MOCK_BRANCHES.filter(b => b.status === 'Aktif').length} Lokasi
            </p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
            <HardHat size={24} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Dalam Renovasi</p>
            <p className="text-xl font-bold text-slate-800">
              {MOCK_BRANCHES.filter(b => b.status === 'Renovasi').length} Lokasi
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Cari nama cabang, alamat, atau nama manager..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-transparent focus:border-indigo-200 focus:bg-white rounded-xl outline-none text-sm transition-all"
          />
        </div>
      </div>

      {/* Branch Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {MOCK_BRANCHES.map((branch) => (
          <div key={branch.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                    <Store className="text-slate-400 group-hover:text-indigo-600 transition-colors" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg leading-tight">{branch.name}</h3>
                    <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded mt-1 inline-block">ID: {branch.id}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    branch.status === 'Aktif' ? 'bg-green-100 text-green-700' : 
                    branch.status === 'Renovasi' ? 'bg-orange-100 text-orange-700' : 
                    'bg-red-100 text-red-700'
                  }`}>
                    {branch.status}
                  </span>
                  <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <MapPin size={18} className="text-slate-400 mt-0.5" />
                  <span>{branch.address}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <User size={18} className="text-slate-400" />
                    <span className="truncate">{branch.manager}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone size={18} className="text-slate-400" />
                    <span>{branch.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <Calendar size={14} />
                <span>Stock Opname: {branch.lastStockOpname}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-600">
                <span>{branch.employeeCount} Staff</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabangToko;

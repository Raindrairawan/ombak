
import React, { useState } from 'react';
import { 
  Users, UserPlus, Search, 
  Mail, Phone, MapPin, 
  Calendar, MoreVertical, 
  Filter, Shield, Briefcase,
  ExternalLink, MessageSquare
} from 'lucide-react';
import { MOCK_STAFF } from '../constants';

const DataStaff: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'Semua' | 'Aktif' | 'Cuti' | 'Off'>('Semua');

  const filteredStaff = MOCK_STAFF.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'Semua' || s.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: MOCK_STAFF.length,
    active: MOCK_STAFF.filter(s => s.status === 'Aktif').length,
    onLeave: MOCK_STAFF.filter(s => s.status === 'Cuti').length
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Direktori Staff & SDM</h2>
          <p className="text-slate-500 text-sm">Kelola akses, peran, dan status seluruh personil Ombak Bersaudara.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-100">
          <UserPlus size={18} />
          <span>Tambah Staff Baru</span>
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-1">
            <Users size={16} className="text-indigo-600" />
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Personil</p>
          </div>
          <h3 className="text-3xl font-black text-slate-800">{stats.total} Orang</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Aktif Bertugas</p>
          </div>
          <h3 className="text-3xl font-black text-slate-800">{stats.active} Orang</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-1">
            <Calendar size={16} className="text-orange-500" />
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sedang Cuti</p>
          </div>
          <h3 className="text-3xl font-black text-slate-800">{stats.onLeave} Orang</h3>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Cari nama staff atau jabatan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-transparent focus:border-indigo-200 focus:bg-white rounded-xl outline-none text-sm transition-all"
          />
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl w-full md:w-auto">
          {(['Semua', 'Aktif', 'Cuti', 'Off'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeFilter === filter 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">
          <Filter size={16} />
          <span className="hidden sm:inline">Advanced</span>
        </button>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredStaff.map((staff) => (
          <div key={staff.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-slate-50">
                    <img src={staff.avatar} alt={staff.name} className="w-full h-full object-cover" />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    staff.status === 'Aktif' ? 'bg-green-500' : 
                    staff.status === 'Cuti' ? 'bg-orange-500' : 'bg-slate-400'
                  }`}></div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    staff.role === 'Admin' ? 'bg-indigo-100 text-indigo-700' :
                    staff.role === 'Manager Cabang' ? 'bg-purple-100 text-purple-700' :
                    staff.role === 'Kepala Gudang' ? 'bg-blue-100 text-blue-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {staff.role}
                  </span>
                  <button className="p-1 text-slate-300 hover:text-slate-600 transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-800 leading-tight">{staff.name}</h4>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">ID: {staff.id}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <MapPin size={14} className="text-slate-300" />
                  <span className="font-medium">{staff.branch}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <Mail size={14} className="text-slate-300" />
                  <span className="font-medium truncate">{staff.email}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <Phone size={14} className="text-slate-300" />
                  <span className="font-medium">{staff.phone}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className="text-slate-300" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Bergabung: {staff.joinDate}</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-slate-50 hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-lg transition-all">
                    <MessageSquare size={16} />
                  </button>
                  <button className="p-2 bg-slate-50 hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-lg transition-all">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Empty State Mockup */}
        <button className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all group min-h-[300px]">
          <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-all">
            <UserPlus size={24} />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-slate-500 group-hover:text-indigo-700">Tambah Personil</p>
            <p className="text-xs text-slate-400">Rekrut staff baru untuk operasional.</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DataStaff;


import React from 'react';
import { 
  Warehouse, 
  ArrowUpRight, 
  ArrowDownLeft, 
  LayoutGrid, 
  History, 
  PlusCircle, 
  ChevronRight,
  Info,
  Maximize2,
  Box
} from 'lucide-react';
import { MOCK_WAREHOUSE_ZONES, MOCK_WAREHOUSE_LOGS } from '../constants';

const GudangPusat: React.FC = () => {
  const totalCapacity = MOCK_WAREHOUSE_ZONES.reduce((acc, curr) => acc + curr.capacity, 0);
  const totalUsed = MOCK_WAREHOUSE_ZONES.reduce((acc, curr) => acc + curr.used, 0);
  const usedPercentage = Math.round((totalUsed / totalCapacity) * 100);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Manajemen Gudang Pusat</h2>
          <p className="text-slate-500 text-sm">Monitor kapasitas penyimpanan dan alur logistik utama.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
            <Maximize2 size={18} />
            <span>Layout 2D</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-100">
            <PlusCircle size={18} />
            <span>Buat Mutasi Barang</span>
          </button>
        </div>
      </div>

      {/* Capacity Overview */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm overflow-hidden relative">
        <div className="flex flex-col md:flex-row md:items-center gap-8 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-slate-800">Okupansi Gudang</h3>
              <Info size={16} className="text-slate-400 cursor-help" />
            </div>
            <p className="text-slate-500 text-sm mb-6">Kapasitas terpakai saat ini dari seluruh zona penyimpanan aktif.</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-3xl font-black text-slate-800">{usedPercentage}% <span className="text-sm font-medium text-slate-400">Terisi</span></span>
                <span className="text-sm font-bold text-slate-500">{totalUsed.toLocaleString()} / {totalCapacity.toLocaleString()} Unit Kapasitas</span>
              </div>
              <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${usedPercentage > 90 ? 'bg-red-500' : usedPercentage > 70 ? 'bg-orange-500' : 'bg-indigo-600'}`}
                  style={{ width: `${usedPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 md:border-l md:border-slate-100 md:pl-8">
            <div className="text-center px-4">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <ArrowDownLeft size={24} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inbound</p>
              <p className="text-lg font-black text-slate-800">12 Ton</p>
              <p className="text-[10px] text-green-600 font-bold">Hari Ini</p>
            </div>
            <div className="text-center px-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <ArrowUpRight size={24} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Outbound</p>
              <p className="text-lg font-black text-slate-800">8.4 Ton</p>
              <p className="text-[10px] text-indigo-600 font-bold">Hari Ini</p>
            </div>
          </div>
        </div>
        
        {/* Decorative Background Icon */}
        <Warehouse className="absolute -right-12 -bottom-12 w-64 h-64 text-slate-50 opacity-50 z-0 pointer-events-none" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Zone Management */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <LayoutGrid size={20} className="text-indigo-600" />
              Status Zona
            </h3>
            <button className="text-indigo-600 text-xs font-bold hover:underline">Lihat Detail</button>
          </div>
          
          <div className="space-y-4">
            {MOCK_WAREHOUSE_ZONES.map((zone) => {
              const zonePercent = Math.round((zone.used / zone.capacity) * 100);
              return (
                <div key={zone.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: zone.color }}>
                        {zone.id}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{zone.name}</h4>
                        <p className="text-[10px] text-slate-400 font-medium">{zone.type}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${zonePercent > 90 ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-500'}`}>
                      {zonePercent}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden mb-2">
                    <div 
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${zonePercent}%`, backgroundColor: zone.color }}
                    ></div>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1 italic">{zone.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Activity Logs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <History size={20} className="text-indigo-600" />
              Log Aktivitas Logistik
            </h3>
            <button className="text-indigo-600 text-xs font-bold hover:underline">Riwayat Lengkap</button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                    <th className="px-6 py-4">Waktu & Tipe</th>
                    <th className="px-6 py-4">Item & Jumlah</th>
                    <th className="px-6 py-4">Asal / Tujuan</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MOCK_WAREHOUSE_LOGS.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-slate-400 mb-1">{log.date}</span>
                          <span className={`inline-flex items-center gap-1 w-fit px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            log.type === 'Masuk' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {log.type === 'Masuk' ? <ArrowDownLeft size={10} /> : <ArrowUpRight size={10} />}
                            {log.type}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                            <Box size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">{log.item}</p>
                            <p className="text-xs text-indigo-600 font-black">{log.quantity}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-600">
                        {log.origin_destination}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                          log.status === 'Selesai' ? 'bg-green-50 text-green-600' :
                          log.status === 'Proses' ? 'bg-blue-50 text-blue-600' :
                          'bg-orange-50 text-orange-600'
                        }`}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <button className="w-full py-4 bg-slate-50 text-indigo-600 text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-2 border-t border-slate-100">
              Cetak Laporan Harian
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GudangPusat;

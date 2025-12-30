
import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Package, ShoppingCart, DollarSign, Clock, User } from 'lucide-react';
import RevenueChart from './RevenueChart';
import BestSellingTable from './BestSellingTable';
import CategoryChart from './CategoryChart';

const StatCard: React.FC<{
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ElementType;
  color: string;
}> = ({ title, value, change, isPositive, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-4 rounded-2xl ${color} bg-opacity-10 text-${color.split('-')[1]}-600 group-hover:scale-110 transition-transform`}>
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 text-[10px] font-black px-2.5 py-1 rounded-full tracking-tighter uppercase ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
        {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        {change}
      </div>
    </div>
    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
    <h3 className="text-2xl font-black text-slate-800">{value}</h3>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Executive Dashboard</h2>
          <p className="text-slate-500 font-medium">Monitoring performa operasional Ombak Bersaudara secara real-time.</p>
        </div>
        <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
          <button className="px-4 py-2 text-xs font-bold text-indigo-600 bg-indigo-50 rounded-xl">Hari Ini</button>
          <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">7 Hari</button>
          <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">30 Hari</button>
        </div>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Pendapatan" 
          value="Rp 45.28M" 
          change="+12.5%" 
          isPositive={true} 
          icon={DollarSign}
          color="bg-indigo-600"
        />
        <StatCard 
          title="Pesanan Baru" 
          value="156" 
          change="+8.2%" 
          isPositive={true} 
          icon={ShoppingCart}
          color="bg-pink-600"
        />
        <StatCard 
          title="Stok Keluar" 
          value="1.24K" 
          change="-2.4%" 
          isPositive={false} 
          icon={Package}
          color="bg-orange-600"
        />
        <StatCard 
          title="Profit Margin" 
          value="28.4%" 
          change="+3.1%" 
          isPositive={true} 
          icon={TrendingUp}
          color="bg-green-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Analytics Chart */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-black text-slate-800 tracking-tight">Arus Kas & Pendapatan</h3>
                <p className="text-sm text-slate-400 font-medium">Tren finansial operasional mingguan</p>
              </div>
              <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl border border-slate-100 transition-all">
                <Clock size={20} />
              </button>
            </div>
            <div className="h-[350px] w-full">
              <RevenueChart />
            </div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-800 tracking-tight">Inventaris Terlaris</h3>
                <p className="text-sm text-slate-400 font-medium">Barang dengan sirkulasi tercepat bulan ini</p>
              </div>
              <button className="text-indigo-600 text-xs font-black uppercase tracking-widest hover:underline">
                Analisis Lengkap
              </button>
            </div>
            <div className="overflow-x-auto">
              <BestSellingTable />
            </div>
          </div>
        </div>

        {/* Side Feed & Category */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="text-xl font-black text-slate-800 tracking-tight mb-2">Pangsa Kategori</h3>
            <p className="text-sm text-slate-400 font-medium mb-8">Dominasi stok per segmen produk</p>
            <div className="h-[300px]">
              <CategoryChart />
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black text-slate-800">Aktivitas Terbaru</h3>
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
            </div>
            <div className="space-y-6">
              {[
                { user: 'Hendra W.', action: 'Restock Semen', time: '2m ago', color: 'bg-blue-100 text-blue-600' },
                { user: 'Siti A.', action: 'Invoice #8821', time: '15m ago', color: 'bg-green-100 text-green-600' },
                { user: 'Agus P.', action: 'Transfer Gudang', time: '1h ago', color: 'bg-orange-100 text-orange-600' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-default">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center font-black text-xs group-hover:scale-110 transition-transform`}>
                    {item.user.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">{item.action}</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.user} • {item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-slate-50 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-indigo-50 hover:text-indigo-600 transition-all">
              Semua Log Aktivitas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

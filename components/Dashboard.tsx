
import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Package, ShoppingCart, DollarSign } from 'lucide-react';
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
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-${color.split('-')[1]}-600`}>
        <Icon size={24} className={`text-${color.split('-')[1]}-600`} />
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
      </div>
    </div>
    <p className="text-sm font-medium text-slate-400 mb-1">{title}</p>
    <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Title Section */}
      <div>
        <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Overview Dashboard</h2>
        <p className="text-slate-500 text-sm">Selamat datang kembali, Topek. Berikut ringkasan performa toko hari ini.</p>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard 
          title="Total Pendapatan" 
          value="Rp 45.280.000" 
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
          title="Produk Terjual" 
          value="1.240" 
          change="-2.4%" 
          isPositive={false} 
          icon={Package}
          color="bg-orange-600"
        />
        <StatCard 
          title="Profit Bersih" 
          value="Rp 12.850.000" 
          change="+14.2%" 
          isPositive={true} 
          icon={TrendingUp}
          color="bg-green-600"
        />
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Profit & Revenue</h3>
              <p className="text-sm text-slate-400">Analisis perbandingan pendapatan seminggu terakhir</p>
            </div>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              {['W', 'M', '1Y', 'ALL'].map((tab) => (
                <button 
                  key={tab} 
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${tab === 'W' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[300px] w-full">
            <RevenueChart />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Best Selling Category</h3>
          <p className="text-sm text-slate-400 mb-6">Distribusi penjualan berdasarkan kategori produk</p>
          <div className="flex-1 h-[250px]">
            <CategoryChart />
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Produk Paling Laris</h3>
            <p className="text-sm text-slate-400">Daftar produk dengan volume penjualan tertinggi</p>
          </div>
          <button className="text-indigo-600 text-sm font-bold hover:underline">Lihat Semua</button>
        </div>
        <div className="overflow-x-auto">
          <BestSellingTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

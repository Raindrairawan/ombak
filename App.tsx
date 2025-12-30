
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CabangToko from './components/CabangToko';
import Kategori from './components/Kategori';
import Produk from './components/Produk';
import GudangPusat from './components/GudangPusat';
import StokCabang from './components/StokCabang';
import DataStaff from './components/DataStaff';
import AkunSaya from './components/AkunSaya';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'cabang':
        return <CabangToko />;
      case 'kategori':
        return <Kategori />;
      case 'produk':
        return <Produk />;
      case 'gudang':
        return <GudangPusat />;
      case 'stok':
        return <StokCabang />;
      case 'staff':
        return <DataStaff />;
      case 'akun':
        return <AkunSaya />;
      default:
        return (
          <div className="flex items-center justify-center h-[calc(100vh-12rem)] text-slate-400">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl opacity-50">🚧</span>
              </div>
              <p className="text-xl font-medium mb-2">Halaman "{activeTab}" sedang dikembangkan</p>
              <p className="text-sm">Tim kami sedang bekerja untuk merilis fitur ini segera.</p>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="mt-6 text-indigo-600 font-bold hover:underline"
              >
                Kembali ke Dashboard
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Fixed on large screens */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:pl-64">
        <Header />
        <main className="flex-1 p-4 md:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;

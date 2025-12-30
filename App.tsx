
import React, { useState, useEffect } from 'react';
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
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notification, setNotification] = useState<{msg: string, type: 'success' | 'error'} | null>(null);

  // Close sidebar on tab change (mobile)
  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setIsSidebarOpen(false);
    
    // Trigger a mock notification for UX feel
    if (id === 'akun') {
      showToast('Profil pengguna berhasil dimuat', 'success');
    }
  };

  const showToast = (msg: string, type: 'success' | 'error') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'cabang': return <CabangToko />;
      case 'kategori': return <Kategori />;
      case 'produk': return <Produk />;
      case 'gudang': return <GudangPusat />;
      case 'stok': return <StokCabang />;
      case 'staff': return <DataStaff />;
      case 'akun': return <AkunSaya />;
      default: return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] selection:bg-indigo-100 selection:text-indigo-700">
      {/* Sidebar - Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:block`}>
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
        {isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 -right-12 p-2 bg-white rounded-xl shadow-xl text-slate-600 md:hidden"
          >
            <X size={20} />
          </button>
        )}
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="flex-1 p-4 md:p-8 lg:p-10 max-w-[1600px] mx-auto w-full">
          {renderContent()}
        </main>

        {/* Global Toast Notification */}
        {notification && (
          <div className="fixed bottom-8 right-8 z-[100] animate-in slide-in-from-right-10 duration-500">
            <div className={`px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border ${
              notification.type === 'success' ? 'bg-white border-green-100 text-green-800' : 'bg-white border-red-100 text-red-800'
            }`}>
              <div className={`w-2 h-2 rounded-full ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
              <span className="text-sm font-bold tracking-tight">{notification.msg}</span>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Float Bar (Optional UX) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-2xl shadow-2xl shadow-indigo-200 flex items-center gap-2 font-bold text-sm"
        >
          <Menu size={20} />
          Menu Utama
        </button>
      </div>
    </div>
  );
};

export default App;

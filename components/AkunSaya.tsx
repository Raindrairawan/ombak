
import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, 
  Shield, Bell, Globe, Camera,
  CheckCircle, History, Monitor,
  LogOut, Save, Key, UserCheck
} from 'lucide-react';
import { MOCK_USER_PROFILE, MOCK_USER_ACTIVITIES } from '../constants';

const AkunSaya: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'activity'>('profile');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      {/* Profile Header */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600 relative">
          <button className="absolute bottom-4 right-6 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/20 flex items-center gap-2">
            <Camera size={16} />
            <span>Ganti Banner</span>
          </button>
        </div>
        <div className="px-8 pb-8 flex flex-col md:flex-row items-end gap-6 -mt-12 relative z-10">
          <div className="relative group">
            <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <img src={MOCK_USER_PROFILE.avatar} alt={MOCK_USER_PROFILE.name} className="w-full h-full object-cover" />
            </div>
            <button className="absolute -bottom-2 -right-2 p-2 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all border-4 border-white">
              <Camera size={16} />
            </button>
          </div>
          <div className="flex-1 mb-2">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-black text-slate-800">{MOCK_USER_PROFILE.name}</h2>
              <div className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-full flex items-center gap-1 border border-green-100">
                <UserCheck size={10} />
                <span>Verified Admin</span>
              </div>
            </div>
            <p className="text-slate-500 font-medium">{MOCK_USER_PROFILE.role}</p>
          </div>
          <div className="flex gap-2 mb-2">
            <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center gap-2">
              <Save size={18} />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Navigation Tabs (Vertical on desktop) */}
        <div className="lg:col-span-1 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm space-y-1">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold text-sm ${
              activeTab === 'profile' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
            }`}
          >
            <User size={18} />
            <span>Informasi Personal</span>
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold text-sm ${
              activeTab === 'security' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
            }`}
          >
            <Shield size={18} />
            <span>Keamanan</span>
          </button>
          <button 
            onClick={() => setActiveTab('activity')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold text-sm ${
              activeTab === 'activity' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
            }`}
          >
            <History size={18} />
            <span>Log Aktivitas</span>
          </button>
          <div className="pt-4 border-t border-slate-50 mt-4">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold text-sm text-red-500 hover:bg-red-50">
              <LogOut size={18} />
              <span>Keluar Akun</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {activeTab === 'profile' && (
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-xl font-black text-slate-800 mb-6">Informasi Personal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" defaultValue={MOCK_USER_PROFILE.name} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-transparent focus:border-indigo-200 focus:bg-white rounded-2xl outline-none text-sm font-medium transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Kantor</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="email" defaultValue={MOCK_USER_PROFILE.email} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-transparent focus:border-indigo-200 focus:bg-white rounded-2xl outline-none text-sm font-medium transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nomor Telepon</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" defaultValue={MOCK_USER_PROFILE.phone} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-transparent focus:border-indigo-200 focus:bg-white rounded-2xl outline-none text-sm font-medium transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Alamat Tinggal</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" defaultValue={MOCK_USER_PROFILE.address} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-transparent focus:border-indigo-200 focus:bg-white rounded-2xl outline-none text-sm font-medium transition-all" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Bio Ringkas</label>
                  <textarea rows={3} defaultValue={MOCK_USER_PROFILE.bio} className="w-full px-4 py-3 bg-slate-50 border border-transparent focus:border-indigo-200 focus:bg-white rounded-2xl outline-none text-sm font-medium transition-all resize-none"></textarea>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-50">
                <h4 className="text-sm font-black text-slate-800 mb-4">Pengaturan Sistem</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <Globe size={18} className="text-slate-400" />
                      <span className="text-sm font-bold text-slate-600">Bahasa Utama</span>
                    </div>
                    <span className="text-xs font-black text-indigo-600 uppercase tracking-wider">{MOCK_USER_PROFILE.language}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <Bell size={18} className="text-slate-400" />
                      <span className="text-sm font-bold text-slate-600">Notifikasi Browser</span>
                    </div>
                    <div className="w-10 h-5 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-xl font-black text-slate-800 mb-2">Keamanan Akun</h3>
              <p className="text-sm text-slate-400 mb-8">Lindungi akses inventaris Anda dengan enkripsi terbaru.</p>
              
              <div className="space-y-6">
                <div className="p-6 border border-slate-100 rounded-3xl flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Key size={32} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="font-bold text-slate-800">Ubah Kata Sandi</h4>
                    <p className="text-xs text-slate-400 mt-1">Sangat disarankan untuk mengganti password secara berkala (setiap 3 bulan).</p>
                  </div>
                  <button className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold text-xs transition-all">
                    Reset Sekarang
                  </button>
                </div>

                <div className="p-6 border border-slate-100 rounded-3xl flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0 relative">
                    <Shield size={32} />
                    <CheckCircle className="absolute -bottom-1 -right-1 text-green-600 bg-white rounded-full" size={16} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="font-bold text-slate-800">Two-Factor Authentication (2FA)</h4>
                    <p className="text-xs text-slate-400 mt-1">Akun Anda sudah dilindungi dengan kode OTP melalui aplikasi Authenticator.</p>
                  </div>
                  <button className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold text-xs transition-all">
                    Konfigurasi
                  </button>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-50">
                <h4 className="text-sm font-black text-slate-800 mb-4">Sesi Login Aktif</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                        <Monitor size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">Chrome on Windows 11 (Perangkat Ini)</p>
                        <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">Active Now • Surabaya, ID</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-xl font-black text-slate-800 mb-6">Log Aktivitas Terbaru</h3>
              <div className="relative">
                <div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-100"></div>
                <div className="space-y-8">
                  {MOCK_USER_ACTIVITIES.map((act) => (
                    <div key={act.id} className="relative pl-12">
                      <div className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center z-10 group-hover:border-indigo-200 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <p className="text-sm font-black text-slate-800">{act.action}</p>
                          <p className="text-[10px] text-slate-400 font-bold flex items-center gap-2 mt-1 uppercase tracking-widest">
                            <Monitor size={12} /> {act.device}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-slate-500">{act.timestamp}</p>
                          <p className="text-[10px] text-slate-400 font-medium italic">{act.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full mt-10 py-3 bg-slate-50 text-indigo-600 rounded-2xl font-black text-xs hover:bg-indigo-50 transition-all uppercase tracking-widest">
                Muat Lebih Banyak Riwayat
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AkunSaya;


import React from 'react';
import { 
  LayoutDashboard, 
  Store, 
  Tags, 
  Package, 
  Warehouse, 
  Truck, 
  Users, 
  UserCircle 
} from 'lucide-react';
import { 
  NavItem, StoreBranch, CategoryDetail, ProductItem, 
  WarehouseZone, WarehouseLog, BranchStockItem, StockMovement, 
  StaffMember, UserProfile, UserActivityLog 
} from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'cabang', label: 'Cabang Toko', icon: Store },
  { id: 'kategori', label: 'Kategori', icon: Tags },
  { id: 'produk', label: 'Produk', icon: Package },
  { id: 'gudang', label: 'Gudang Pusat', icon: Warehouse },
  { id: 'stok', label: 'Stok Cabang', icon: Truck },
  { id: 'staff', label: 'Data Staff', icon: Users },
  { id: 'akun', label: 'Akun Saya', icon: UserCircle },
];

export const MOCK_USER_PROFILE: UserProfile = {
  id: 'USR-8821',
  name: 'Topek Mahaldi',
  role: 'Super Administrator',
  email: 'topek@ombakbersaudara.com',
  phone: '+62 812 3344 5566',
  bio: 'Berpengalaman lebih dari 8 tahun dalam manajemen rantai pasok material bangunan.',
  avatar: 'https://picsum.photos/id/64/400/400',
  address: 'Jl. Melati Indah No. 42, Surabaya, Jawa Timur',
  language: 'Bahasa Indonesia',
  timezone: 'GMT +07:00 (WIB)'
};

export const MOCK_USER_ACTIVITIES: UserActivityLog[] = [
  { id: 'ACT-01', action: 'Login Berhasil', timestamp: 'Hari ini, 08:15', device: 'Chrome / Windows 11', location: 'Surabaya, ID' },
  { id: 'ACT-02', action: 'Update Stok: Semen Holcim 50kg', timestamp: 'Kemarin, 14:20', device: 'Mobile App / Android', location: 'Sidoarjo, ID' },
  { id: 'ACT-03', action: 'Menambah Cabang Baru: OB Gresik', timestamp: '14 Mar 2024, 10:05', device: 'Chrome / MacOS', location: 'Surabaya, ID' },
  { id: 'ACT-04', action: 'Mengubah Password Akun', timestamp: '10 Mar 2024, 09:12', device: 'Chrome / Windows 11', location: 'Surabaya, ID' },
];

export const MOCK_STAFF: StaffMember[] = [
  { id: 'ST-001', name: 'Topek Mahaldi', role: 'Admin', email: 'topek@ombakbersaudara.com', phone: '0812-3344-5566', branch: 'Kantor Pusat', status: 'Aktif', joinDate: '10 Jan 2022', avatar: 'https://picsum.photos/id/64/100/100' },
  { id: 'ST-002', name: 'Hendra Wijaya', role: 'Kepala Gudang', email: 'hendra@ombakbersaudara.com', phone: '0812-5566-7788', branch: 'Gudang Pusat', status: 'Aktif', joinDate: '15 Feb 2022', avatar: 'https://picsum.photos/id/91/100/100' },
  { id: 'ST-003', name: 'Siti Aminah', role: 'Manager Cabang', email: 'siti@ombakbersaudara.com', phone: '0812-9988-1122', branch: 'Cabang Sidoarjo', status: 'Aktif', joinDate: '01 Mar 2023', avatar: 'https://picsum.photos/id/65/100/100' },
  { id: 'ST-004', name: 'Budi Santoso', role: 'Manager Cabang', email: 'budi@ombakbersaudara.com', phone: '0855-6677-8899', branch: 'Cabang Malang', status: 'Cuti', joinDate: '12 Nov 2022', avatar: 'https://picsum.photos/id/177/100/100' },
  { id: 'ST-005', name: 'Agus Pratama', role: 'Logistik', email: 'agus@ombakbersaudara.com', phone: '0811-2233-4455', branch: 'Cabang Gresik', status: 'Aktif', joinDate: '05 May 2023', avatar: 'https://picsum.photos/id/342/100/100' },
  { id: 'ST-006', name: 'Lia Permata', role: 'Sales', email: 'lia@ombakbersaudara.com', phone: '0899-8877-6655', branch: 'Cabang Surabaya', status: 'Off', joinDate: '20 Jun 2023', avatar: 'https://picsum.photos/id/447/100/100' },
];

export const MOCK_REVENUE_DATA = [
  { time: 'Mon', amount: 3000 },
  { time: 'Tue', amount: 4500 },
  { time: 'Wed', amount: 3200 },
  { time: 'Thu', amount: 5000 },
  { time: 'Fri', amount: 4200 },
  { time: 'Sat', amount: 6000 },
  { time: 'Sun', amount: 4800 },
];

export const MOCK_BEST_SELLING_PRODUCTS = [
  { id: '2314', name: 'Semen Holcim 50kg', category: 'Semen', quantity: '120 SAK' },
  { id: '1231', name: 'Cat Nippon Weatherbond', category: 'Cat', quantity: '85 Pail' },
  { id: '3212', name: 'Paku Beton 3 Inch', category: 'Perkakas', quantity: '45 Box' },
  { id: '4452', name: 'Pipa PVC Rucika 4"', category: 'Pipa', quantity: '210 Lonjor' },
];

export const MOCK_CATEGORIES = [
  { name: 'Semen', value: 45, color: '#6366f1' },
  { name: 'Cat', value: 30, color: '#ec4899' },
  { name: 'Besi & Baja', value: 25, color: '#f59e0b' },
];

export const MOCK_BRANCH_STOCK: BranchStockItem[] = [
  { id: 'BS-001', branchId: 'BR-001', productId: '1', productName: 'Semen Holcim 50kg', sku: 'SEM-HC-50', currentStock: 450, minStock: 100, unit: 'SAK', lastRestock: '12 Mar 2024' },
  { id: 'BS-002', branchId: 'BR-001', productId: '2', productName: 'Cat Nippon Weatherbond 25kg', sku: 'CAT-NW-25', currentStock: 12, minStock: 20, unit: 'Pail', lastRestock: '10 Mar 2024' },
  { id: 'BS-003', branchId: 'BR-002', productId: '1', productName: 'Semen Holcim 50kg', sku: 'SEM-HC-50', currentStock: 85, minStock: 100, unit: 'SAK', lastRestock: '14 Mar 2024' },
  { id: 'BS-004', branchId: 'BR-002', productId: '4', productName: 'Pipa PVC Rucika 4"', sku: 'PP-RCK-4', currentStock: 156, minStock: 30, unit: 'Lonjor', lastRestock: '11 Mar 2024' },
  { id: 'BS-005', branchId: 'BR-003', productId: '3', productName: 'Paku Beton 3 Inch', sku: 'PK-BTN-3', currentStock: 5, minStock: 25, unit: 'Box', lastRestock: '05 Mar 2024' },
  { id: 'BS-006', branchId: 'BR-004', productId: '1', productName: 'Semen Holcim 50kg', sku: 'SEM-HC-50', currentStock: 210, minStock: 100, unit: 'SAK', lastRestock: '13 Mar 2024' },
];

export const MOCK_STOCK_MOVEMENTS: StockMovement[] = [
  { id: 'MV-771', type: 'Transfer', from: 'Gudang Pusat', to: 'Cabang Sidoarjo', item: 'Semen Holcim 50kg', quantity: '200 SAK', status: 'Dalam Perjalanan', date: '15 Mar 2024, 09:00' },
  { id: 'MV-772', type: 'Transfer', from: 'Cabang Surabaya', to: 'Cabang Malang', item: 'Paku Beton 3 Inch', quantity: '50 Box', status: 'Selesai', date: '14 Mar 2024, 15:30' },
  { id: 'MV-773', type: 'Penyesuaian', from: 'Inventory System', to: 'Cabang Gresik', item: 'Besi Beton 12mm', quantity: '-2 Batang', status: 'Selesai', date: '14 Mar 2024, 10:20' },
];

export const MOCK_PRODUCTS: ProductItem[] = [
  { id: '1', sku: 'SEM-HC-50', name: 'Semen Holcim 50kg', category: 'Semen', stock: 1240, minStock: 200, unit: 'SAK', price: 65000, status: 'In Stock' },
  { id: '2', sku: 'CAT-NW-25', name: 'Cat Nippon Weatherbond 25kg', category: 'Cat', stock: 85, minStock: 100, unit: 'Pail', price: 1250000, status: 'Low Stock' },
  { id: '3', sku: 'PK-BTN-3', name: 'Paku Beton 3 Inch', category: 'Perkakas', stock: 450, minStock: 50, unit: 'Box', price: 45000, status: 'In Stock' },
  { id: '4', sku: 'PP-RCK-4', name: 'Pipa PVC Rucika 4" (4m)', category: 'Pipa', stock: 210, minStock: 30, unit: 'Lonjor', price: 185000, status: 'In Stock' },
  { id: '5', sku: 'BS-BTN-12', name: 'Besi Beton 12mm Full', category: 'Besi & Baja', stock: 0, minStock: 50, unit: 'Batang', price: 115000, status: 'Out of Stock' },
  { id: '6', sku: 'KB-SK-25', name: 'Kabel Supreme NYM 2x1.5', category: 'Kelistrikan', stock: 15, minStock: 20, unit: 'Roll', price: 425000, status: 'Low Stock' },
  { id: '7', sku: 'SN-GRS-40', name: 'Semen Gresik 40kg', category: 'Semen', stock: 2100, minStock: 500, unit: 'SAK', price: 52000, status: 'In Stock' },
  { id: '8', sku: 'TL-MR-60', name: 'Tali Manila 60mm (Meter)', category: 'Lainnya', stock: 120, minStock: 50, unit: 'Meter', price: 12000, status: 'In Stock' },
];

export const MOCK_WAREHOUSE_ZONES: WarehouseZone[] = [
  { id: 'Z-A', name: 'Zona A (Material Berat)', description: 'Penyimpanan semen, bata ringan, dan mortar.', capacity: 5000, used: 4200, type: 'Heavy Duty', color: '#4f46e5' },
  { id: 'Z-B', name: 'Zona B (Logam & Besi)', description: 'Area besi beton, pipa galvanis, dan baja ringan.', capacity: 2000, used: 1100, type: 'Open Racks', color: '#f59e0b' },
  { id: 'Z-C', name: 'Zona C (Kimia & Cairan)', description: 'Penyimpanan cat, tinner, dan bahan kimia.', capacity: 1500, used: 1450, type: 'Fire Safe', color: '#ec4899' },
  { id: 'Z-D', name: 'Zona D (Perangkat Kecil)', description: 'Paku, baut, keran, dan alat pertukangan.', capacity: 3000, used: 800, type: 'Shelving', color: '#10b981' },
];

export const MOCK_WAREHOUSE_LOGS: WarehouseLog[] = [
  { id: 'LOG-101', date: '2024-03-15 08:30', type: 'Masuk', item: 'Semen Holcim 50kg', quantity: '500 SAK', origin_destination: 'PT Solusi Bangun Indonesia', status: 'Selesai' },
  { id: 'LOG-102', date: '2024-03-15 10:15', type: 'Keluar', item: 'Besi Beton 12mm', quantity: '100 Batang', origin_destination: 'Cabang Sidoarjo', status: 'Proses' },
  { id: 'LOG-103', date: '2024-03-14 14:00', type: 'Keluar', item: 'Cat Nippon 25kg', quantity: '40 Pail', origin_destination: 'Cabang Malang', status: 'Selesai' },
  { id: 'LOG-104', date: '2024-03-14 16:45', type: 'Masuk', item: 'Paku Beton 3"', quantity: '20 Box', origin_destination: 'Supplier Perkakas Mandiri', status: 'Tertunda' },
];

export const MOCK_CATEGORIES_DETAIL: CategoryDetail[] = [
  { id: 'CAT-001', name: 'Semen', value: 45, color: '#6366f1', description: 'Segala jenis semen (Portland, Putih, Masonry).', itemCount: 124, iconName: 'Box' },
  { id: 'CAT-002', name: 'Cat & Pelapis', value: 30, color: '#ec4899', description: 'Cat tembok, kayu, besi, dan waterproofing.', itemCount: 452, iconName: 'Palette' },
  { id: 'CAT-003', name: 'Besi & Baja', value: 25, color: '#f59e0b', description: 'Besi beton, pipa galvanis, baja ringan, dan kawat.', itemCount: 89, iconName: 'Zap' },
  { id: 'CAT-004', name: 'Perkakas', value: 15, color: '#10b981', description: 'Alat pertukangan tangan dan mesin listrik.', itemCount: 215, iconName: 'Wrench' },
  { id: 'CAT-005', name: 'Pipa & Plumb', value: 12, color: '#0ea5e9', description: 'Pipa PVC, fitting, keran, dan perlengkapan saniter.', itemCount: 342, iconName: 'Droplets' },
  { id: 'CAT-006', name: 'Kelistrikan', value: 8, color: '#8b5cf6', description: 'Kabel, saklar, lampu, dan panel listrik.', itemCount: 156, iconName: 'Lightbulb' },
];

export const MOCK_BRANCHES: StoreBranch[] = [
  { id: 'BR-001', name: 'Ombak Bersaudara Pusat', manager: 'Hendra Wijaya', address: 'Jl. Raya Manyar No. 12, Surabaya', phone: '0812-3456-7890', status: 'Aktif', employeeCount: 24, lastStockOpname: '12 Mar 2024' },
  { id: 'BR-002', name: 'OB Cabang Sidoarjo', manager: 'Siti Aminah', address: 'Kawasan Industri Rungkut, Sidoarjo', phone: '0812-9988-1122', status: 'Aktif', employeeCount: 12, lastStockOpname: '10 Mar 2024' },
  { id: 'BR-003', name: 'OB Cabang Malang', manager: 'Budi Santoso', address: 'Jl. Soekarno Hatta No. 45, Malang', phone: '0855-6677-8899', status: 'Renovasi', employeeCount: 8, lastStockOpname: '01 Mar 2024' },
  { id: 'BR-004', name: 'OB Cabang Gresik', manager: 'Agus Pratama', address: 'Jl. Veteran No. 8, Gresik', phone: '0811-2233-4455', status: 'Aktif', employeeCount: 15, lastStockOpname: '14 Mar 2024' }
];

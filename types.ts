
import React from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

export interface ProductData {
  id: string;
  name: string;
  category: string;
  quantity: string;
}

export interface ProductItem {
  id: string;
  sku: string;
  name: string;
  category: string;
  stock: number;
  minStock: number;
  unit: string;
  price: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface BranchStockItem {
  id: string;
  branchId: string;
  productId: string;
  productName: string;
  sku: string;
  currentStock: number;
  minStock: number;
  unit: string;
  lastRestock: string;
}

export interface StockMovement {
  id: string;
  type: 'Transfer' | 'Penyesuaian' | 'Penjualan';
  from: string;
  to: string;
  item: string;
  quantity: string;
  status: 'Dalam Perjalanan' | 'Selesai' | 'Dibatalkan';
  date: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: 'Admin' | 'Manager Cabang' | 'Kepala Gudang' | 'Sales' | 'Logistik';
  email: string;
  phone: string;
  branch: string;
  status: 'Aktif' | 'Cuti' | 'Off';
  joinDate: string;
  avatar: string;
}

export interface UserProfile {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  bio: string;
  avatar: string;
  address: string;
  language: string;
  timezone: string;
}

export interface UserActivityLog {
  id: string;
  action: string;
  timestamp: string;
  device: string;
  location: string;
}

export interface RevenueData {
  time: string;
  amount: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface CategoryDetail extends CategoryData {
  id: string;
  description: string;
  itemCount: number;
  iconName: string;
}

export interface StoreBranch {
  id: string;
  name: string;
  manager: string;
  address: string;
  phone: string;
  status: 'Aktif' | 'Non-aktif' | 'Renovasi';
  employeeCount: number;
  lastStockOpname: string;
}

export interface WarehouseZone {
  id: string;
  name: string;
  description: string;
  capacity: number;
  used: number;
  type: string;
  color: string;
}

export interface WarehouseLog {
  id: string;
  date: string;
  type: 'Masuk' | 'Keluar';
  item: string;
  quantity: string;
  origin_destination: string;
  status: 'Selesai' | 'Proses' | 'Tertunda';
}


import React from 'react';
import { MOCK_BEST_SELLING_PRODUCTS } from '../constants';

const BestSellingTable: React.FC = () => {
  return (
    <table className="w-full text-left border-collapse min-w-[600px]">
      <thead>
        <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider">
          <th className="px-6 py-4 font-bold">Product Information</th>
          <th className="px-6 py-4 font-bold">Product ID</th>
          <th className="px-6 py-4 font-bold">Category</th>
          <th className="px-6 py-4 font-bold">Sales Volume</th>
          <th className="px-6 py-4 font-bold text-center">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {MOCK_BEST_SELLING_PRODUCTS.map((product) => (
          <tr key={product.id} className="hover:bg-slate-50 transition-colors group">
            <td className="px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  <span className="text-xs font-bold uppercase">{product.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{product.name}</p>
                  <p className="text-[11px] text-slate-400">Building Materials</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-5">
              <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                #{product.id}
              </span>
            </td>
            <td className="px-6 py-5">
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                product.category === 'Semen' ? 'bg-blue-50 text-blue-600' :
                product.category === 'Cat' ? 'bg-pink-50 text-pink-600' :
                'bg-slate-100 text-slate-600'
              }`}>
                {product.category}
              </span>
            </td>
            <td className="px-6 py-5">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800">{product.quantity}</span>
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </td>
            <td className="px-6 py-5 text-center">
               <span className="inline-flex items-center gap-1 text-green-600 font-bold text-[11px] uppercase tracking-wide">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                 Ready
               </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BestSellingTable;

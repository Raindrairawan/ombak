
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { MOCK_CATEGORIES } from '../constants';

const CategoryChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={MOCK_CATEGORIES}
          cx="50%"
          cy="45%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={8}
          dataKey="value"
        >
          {MOCK_CATEGORIES.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
        />
        <Legend 
          verticalAlign="bottom" 
          align="center"
          iconType="circle"
          wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', paddingTop: '20px' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryChart;

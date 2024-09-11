// src/components/BarChartWidget.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';


const BarChartWidget = ({ data, title }:  {
  data: { name: string; value: number }[];
  title: string;
}) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* Increase Y-axis domain to prevent label overlap */}
          <YAxis domain={[0, (dataMax: number) => Math.ceil(dataMax * 1.3)]} />
          <Tooltip />
          <Bar dataKey="value" fill="#64b5f6"> 
            <LabelList
              dataKey="value"
              position="top"  // Position the label on top
              formatter={(value: number) => value.toFixed(2)}
              style={{ fill: '#333333'}}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartWidget;

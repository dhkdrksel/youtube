import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number; // 변화율 (예: +5%)
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change }) => {
  // Tailwind CSS 기반의 기본적인 디자인 구조를 가정합니다.
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transition hover:shadow-2xl border border-gray-100">
      <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
      <div className="mt-1 flex items-end justify-between">
        <h3 className="text-4xl font-bold text-indigo-600">{value}</h3>
        {change && (
          <span className={`text-lg font-semibold ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {Math.abs(change)}% <span className="ml-1">{change > 0 ? '▲' : '▼'}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
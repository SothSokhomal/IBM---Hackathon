import React from 'react';
import { FarmLocation } from '../types';
import { INITIAL_HISTORY } from '../data/sampleData';

interface DashboardViewProps {
  farm: FarmLocation;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ farm }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 max-w-6xl mx-auto w-full text-text-primary">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
        <p className="text-text-secondary text-sm">Overview of {farm.name} - {farm.fieldPlot}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-surface border border-border-subtle rounded-md">
          <div className="text-sm text-text-secondary mb-1">Active Alerts</div>
          <div className="text-2xl font-mono text-[#FF858D]">{farm.activeAlerts}</div>
        </div>
        <div className="p-4 bg-surface border border-border-subtle rounded-md">
          <div className="text-sm text-text-secondary mb-1">Avg Humidity</div>
          <div className="text-2xl font-mono text-text-primary">{farm.weather.humidity}%</div>
        </div>
        <div className="p-4 bg-surface border border-border-subtle rounded-md">
          <div className="text-sm text-text-secondary mb-1">Leaf Wetness</div>
          <div className="text-2xl font-mono text-[#F5C252]">{farm.weather.leafWetnessHours} hrs</div>
        </div>
        <div className="p-4 bg-surface border border-border-subtle rounded-md">
          <div className="text-sm text-text-secondary mb-1">Est. Crop Value Protected</div>
          <div className="text-2xl font-mono text-[#5EE2A0]">$124,800</div>
        </div>
      </div>

      <h2 className="text-lg font-medium mb-4 border-b border-border-subtle pb-2">Recent Inspections</h2>
      <div className="bg-surface border border-border-subtle rounded-md overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-root border-b border-border-subtle text-text-secondary">
            <tr>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Crop</th>
              <th className="px-4 py-3 font-medium">Finding</th>
              <th className="px-4 py-3 font-medium">Severity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#24303C]">
            {INITIAL_HISTORY.map((item) => (
              <tr key={item.id} className="hover:bg-surface-active/30 transition-colors">
                <td className="px-4 py-3 text-text-secondary">{item.date}</td>
                <td className="px-4 py-3">{item.crop}</td>
                <td className="px-4 py-3">{item.diseaseName}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    item.severity === 'Alert' ? 'bg-[#321417] text-[#FF858D] border border-[#7F232B]' :
                    item.severity === 'Warning' ? 'bg-[#2B200A] text-[#F5C252] border border-[#6B4D08]' :
                    'bg-[#0E2419] text-[#5EE2A0] border border-[#1B5238]'
                  }`}>
                    {item.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


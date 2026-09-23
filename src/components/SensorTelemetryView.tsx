import React from 'react';
import { FarmLocation } from '../types';
import { LORA_SENSOR_NODES, HISTORICAL_TELEMETRY_48H } from '../data/sampleData';

interface SensorTelemetryViewProps {
  farm: FarmLocation;
}

export const SensorTelemetryView: React.FC<SensorTelemetryViewProps> = ({ farm }) => {
  // Simple SVG Chart generator
  const renderChart = () => {
    const width = 800;
    const height = 200;
    const padding = 20;
    const data = [...HISTORICAL_TELEMETRY_48H].reverse(); // oldest to newest
    
    if (data.length === 0) return null;

    const pointsCount = data.length;
    const xStep = (width - padding * 2) / (pointsCount - 1);
    
    // Normalize logic
    const getPoints = (valKey: 'humidity' | 'temp', min: number, max: number) => {
      return data.map((d, i) => {
        const x = padding + i * xStep;
        const normalized = (d[valKey] - min) / (max - min);
        const y = height - padding - normalized * (height - padding * 2);
        return `${x},${y}`;
      }).join(' ');
    };

    const humidityPoints = getPoints('humidity', 40, 100);
    const tempPoints = getPoints('temp', 10, 35);

    return (
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="overflow-visible">
        {/* Grid lines */}
        {[0, 0.5, 1].map(r => (
          <line key={r} x1={padding} y1={padding + r * (height - padding * 2)} x2={width - padding} y2={padding + r * (height - padding * 2)} stroke="#24303C" strokeWidth="1" />
        ))}
        {/* Lines */}
        <polyline fill="none" stroke="#5EE2A0" strokeWidth="2" points={humidityPoints} />
        <polyline fill="none" stroke="#F5C252" strokeWidth="2" points={tempPoints} />
      </svg>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 max-w-6xl mx-auto w-full text-text-primary">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Sensors & Weather</h1>
        <p className="text-text-secondary text-sm">Real-time climate data for {farm.name}</p>
      </div>

      <div className="bg-surface border border-border-subtle rounded-md p-6 mb-8">
        <h2 className="text-sm font-medium mb-4 flex items-center gap-4">
          <span>48-Hour Trend</span>
          <div className="flex items-center gap-3 text-xs text-text-secondary">
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#5EE2A0]"></div> Humidity (%)</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#F5C252]"></div> Temperature (°C)</span>
          </div>
        </h2>
        <div className="h-48 w-full relative">
          {renderChart()}
          <div className="absolute bottom-[-20px] left-0 right-0 flex justify-between text-xs text-text-secondary">
            <span>48h ago</span>
            <span>Now</span>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-medium mb-4 border-b border-border-subtle pb-2">Sensor Nodes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {LORA_SENSOR_NODES.map(node => (
          <div key={node.id} className="bg-surface border border-border-subtle rounded-md p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-medium">{node.nodeName}</h3>
                <p className="text-xs text-text-secondary">{node.zone}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded border font-mono ${
                node.status === 'online' ? 'bg-[#0E2419] text-[#5EE2A0] border-[#1B5238]' :
                'bg-[#2B200A] text-[#F5C252] border-[#6B4D08]'
              }`}>
                {node.status.toUpperCase()}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div>
                <div className="text-xs text-text-secondary">Temp</div>
                <div>{node.readings.tempC}°C</div>
              </div>
              <div>
                <div className="text-xs text-text-secondary">Humidity</div>
                <div>{node.readings.humidityPct}%</div>
              </div>
              <div>
                <div className="text-xs text-text-secondary">Battery</div>
                <div>{node.batteryPct}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

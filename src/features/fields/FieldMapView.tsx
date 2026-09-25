import React, { useState, useEffect } from 'react';
import bgImage from '../../assets/field-map-bg.jpg'; 
import fieldsBg from '../assets/fields-bg.jpg';
import { FIELD_GRID } from '../../data/sampleData';
import { FieldGridCell } from '../../types';

export const FieldMapView: React.FC = () => {
  const [grid, setGrid] = useState<FieldGridCell[]>([]);
  const [selectedCell, setSelectedCell] = useState<FieldGridCell | null>(null);

  useEffect(() => {
    setGrid(FIELD_GRID);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto w-full max-w-full overflow-x-hidden relative">
      <img src={bgImage} alt="Background" className="fixed inset-0 w-full h-full object-cover z-0 contrast-110 saturate-[1.2] brightness-105" />
      <div className="relative z-10 p-6 max-w-6xl mx-auto w-full text-white flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-1">Field Map</h1>
          <p className="text-gray-300 text-sm">Row-by-row crop health status.</p>
        </div>

        <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-6 text-white overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-6 gap-2 min-w-[500px]">
            {grid.map(cell => (
              <div 
                key={cell.id}
                onClick={() => setSelectedCell(cell)}
                className={`h-12 rounded cursor-pointer border transition-colors ${
                  cell.status === 'Action Needed' ? 'bg-[#321417] border-[#7F232B] hover:bg-[#4a1c22]' :
                  cell.status === 'Watch' ? 'bg-[#2B200A] border-[#6B4D08] hover:bg-[#3d2e0e]' :
                  'bg-[#0E2419] border-[#1B5238] hover:bg-[#153826]'
                } ${selectedCell?.id === cell.id ? 'ring-2 ring-white ring-offset-2 ring-offset-surface' : ''}`}
                title={`Row ${cell.row}, Col ${cell.col}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar for Details */}
      <div className="w-full md:w-80 flex-shrink-0">
        {selectedCell ? (
          <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-6 text-white overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <h2 className="text-lg font-medium mb-4 border-b border-border-subtle pb-2">Plot Details</h2>
            
            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-300">Location</div>
                <div className="text-sm font-medium">Row {selectedCell.row}, Column {selectedCell.col}</div>
              </div>
              
              <div>
                <div className="text-xs text-gray-300">Status</div>
                <div className={`mt-1 inline-block px-2 py-0.5 rounded text-xs border font-mono ${
                  selectedCell.status === 'Action Needed' ? 'bg-[#321417] text-[#FF858D] border-[#7F232B]' :
                  selectedCell.status === 'Watch' ? 'bg-[#2B200A] text-[#F5C252] border-[#6B4D08]' :
                  'bg-[#0E2419] text-[#5EE2A0] border-[#1B5238]'
                }`}>
                  {selectedCell.status}
                </div>
              </div>

              {selectedCell.incidentName && (
                <div>
                  <div className="text-xs text-gray-300">Detected Issue</div>
                  <div className="text-sm">{selectedCell.incidentName}</div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-xs text-gray-300">Crop</div>
                  <div className="text-sm">{selectedCell.crop}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-300">Plants</div>
                  <div className="text-sm">{selectedCell.plantCount}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-6 text-white overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <p className="text-sm">Select a plot cell on the map to view details.</p>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};


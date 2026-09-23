import React, { useState, useEffect } from 'react';
import { GENERATE_FIELD_GRID } from '../data/sampleData';
import { FieldGridCell } from '../types';

export const FieldMapView: React.FC = () => {
  const [grid, setGrid] = useState<FieldGridCell[]>([]);
  const [selectedCell, setSelectedCell] = useState<FieldGridCell | null>(null);

  useEffect(() => {
    setGrid(GENERATE_FIELD_GRID());
  }, []);

  return (
    <div className="flex-1 overflow-y-auto p-6 max-w-6xl mx-auto w-full text-text-primary flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-1">Field Map</h1>
          <p className="text-text-secondary text-sm">Row-by-row crop health status.</p>
        </div>

        <div className="bg-surface border border-border-subtle rounded-md p-6 overflow-x-auto">
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
          <div className="bg-surface border border-border-subtle rounded-md p-6 sticky top-6">
            <h2 className="text-lg font-medium mb-4 border-b border-border-subtle pb-2">Plot Details</h2>
            
            <div className="space-y-4">
              <div>
                <div className="text-xs text-text-secondary">Location</div>
                <div className="text-sm font-medium">Row {selectedCell.row}, Column {selectedCell.col}</div>
              </div>
              
              <div>
                <div className="text-xs text-text-secondary">Status</div>
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
                  <div className="text-xs text-text-secondary">Detected Issue</div>
                  <div className="text-sm">{selectedCell.incidentName}</div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-xs text-text-secondary">Crop</div>
                  <div className="text-sm">{selectedCell.crop}</div>
                </div>
                <div>
                  <div className="text-xs text-text-secondary">Plants</div>
                  <div className="text-sm">{selectedCell.plantCount}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-surface border border-border-subtle rounded-md p-6 text-center text-text-secondary sticky top-6">
            <p className="text-sm">Select a plot cell on the map to view details.</p>
          </div>
        )}
      </div>
    </div>
  );
};


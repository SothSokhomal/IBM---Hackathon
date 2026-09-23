import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { PRESET_DIAGNOSES } from '../data/sampleData';
import { DiagnosisResult } from '../types';

export const ScanDiagnoseView: React.FC = () => {
  const [activeDiagnosis, setActiveDiagnosis] = useState<DiagnosisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSimulateScan = (presetKey: string) => {
    setActiveDiagnosis(null);
    setIsAnalyzing(true);
    setTimeout(() => {
      setActiveDiagnosis(PRESET_DIAGNOSES[presetKey] || PRESET_DIAGNOSES.tomato_late_blight);
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 max-w-4xl mx-auto w-full text-text-primary">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Scan & Diagnose</h1>
        <p className="text-text-secondary text-sm">Upload a crop image for pathogen analysis and treatment steps.</p>
      </div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Upload Area */}
        <div className="border-2 border-dashed border-border-subtle rounded-md p-8 flex flex-col items-center justify-center text-center bg-surface">
          <Upload className="w-8 h-8 text-text-secondary mb-3" />
          <h3 className="text-sm font-medium mb-1">Upload Inspection Photo</h3>
          <p className="text-xs text-text-secondary mb-4">Drag and drop or click to browse</p>
          <button className="px-4 py-2 bg-surface-active text-text-primary text-sm rounded-md hover:bg-[#3b4d60] transition-colors">
            Select File
          </button>
        </div>

        {/* Quick Presets (For simulation) */}
        <div className="border border-border-subtle rounded-md p-4 bg-surface">
          <h3 className="text-sm font-medium mb-3">Test Scenarios</h3>
          <div className="space-y-2">
            <button 
              onClick={() => handleSimulateScan('tomato_late_blight')}
              className="w-full text-left px-3 py-2 rounded-md bg-root border border-border-subtle text-sm hover:bg-surface-active transition-colors"
            >
              Simulate: Tomato Late Blight
            </button>
            <button 
              onClick={() => handleSimulateScan('healthy_soybean')}
              className="w-full text-left px-3 py-2 rounded-md bg-root border border-border-subtle text-sm hover:bg-surface-active transition-colors"
            >
              Simulate: Healthy Soybean
            </button>
          </div>
        </div>
      </div>

      {isAnalyzing && (
        <div className="border border-border-subtle bg-surface rounded-md p-6 animate-pulse">
          <div className="h-4 bg-surface-hover rounded w-1/4 mb-4"></div>
          <div className="h-32 bg-surface-hover rounded w-full mb-4"></div>
          <div className="h-4 bg-surface-hover rounded w-1/2"></div>
        </div>
      )}

      {activeDiagnosis && !isAnalyzing && (
        <div className="border border-border-subtle bg-surface rounded-md overflow-hidden">
          <div className="p-4 border-b border-border-subtle flex items-center justify-between bg-[#1C232B]">
            <h2 className="font-semibold text-lg">Inspection Report</h2>
            <button onClick={() => setActiveDiagnosis(null)} className="text-text-secondary hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-span-1 rounded-md overflow-hidden border border-border-subtle bg-black">
                <img src={activeDiagnosis.leafImageUrl} alt="Scanned Leaf" className="w-full h-auto" />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-sm text-text-secondary mb-1">Diagnosis</h3>
                  <div className="text-xl font-semibold flex items-center gap-3">
                    {activeDiagnosis.diseaseName}
                    <span className={`text-xs px-2 py-0.5 rounded font-mono font-normal ${
                      activeDiagnosis.severity === 'Alert' ? 'bg-[#321417] text-[#FF858D] border border-[#7F232B]' :
                      activeDiagnosis.severity === 'Warning' ? 'bg-[#2B200A] text-[#F5C252] border border-[#6B4D08]' :
                      'bg-[#0E2419] text-[#5EE2A0] border border-[#1B5238]'
                    }`}>
                      {activeDiagnosis.severity}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-text-secondary">Crop Type</div>
                    <div className="text-sm">{activeDiagnosis.crop}</div>
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary">Confidence</div>
                    <div className="text-sm">{activeDiagnosis.confidence}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary">Visible Signs</div>
                    <div className="text-sm">{activeDiagnosis.visibleSigns}</div>
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary">Leaf Damage</div>
                    <div className="text-sm">{activeDiagnosis.leafDamage}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border-subtle pt-6">
              <h3 className="font-medium mb-3">Action Steps</h3>
              {activeDiagnosis.treatments.immediateActions.length > 0 ? (
                <ol className="list-decimal list-inside space-y-2 text-sm text-text-primary">
                  {activeDiagnosis.treatments.immediateActions.map((action, idx) => (
                    <li key={idx} className="pl-2">{action}</li>
                  ))}
                </ol>
              ) : (
                <p className="text-sm text-text-secondary">No immediate action required.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


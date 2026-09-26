import React, { useState } from 'react'; 
import scanBg from '../../assets/scan-bg.jpg';
import { Camera, Upload, MapPin, X } from 'lucide-react';

export const ScanView: React.FC = () => {
  const [cropType, setCropType] = useState('');
  const [growthStage, setGrowthStage] = useState('');
  const [field, setField] = useState('');
  const [notes, setNotes] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const CROP_TYPES = ['Maize', 'Tomato', 'Rice', 'Apple', 'Mango', 'Cassava', 'Wheat', 'Soybean'];
  const GROWTH_STAGES = ['Seedling', 'Vegetative', 'Flowering', 'Fruiting', 'Harvest'];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <div className="flex-1 overflow-y-auto w-full max-w-full overflow-x-hidden relative">
      <img src={scanBg} alt="Background" className="fixed inset-0 w-full h-full object-cover z-0 contrast-110 saturate-[1.2] brightness-105" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8 relative z-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-[#064E3B] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">Crop Scan</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1.5 text-white/70">Upload or capture a sample photo for AI diagnostic evaluation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div className="rounded-3xl border p-6 md:p-8 bg-[#37472A]/70 border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white">
            <h2 className="text-lg md:text-xl font-bold mb-1 text-white">Sample Photo</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 text-white/70">Take a photo or upload from gallery</p>

            {previewUrl ? (
              <div className="relative rounded-3xl overflow-hidden border shadow-inner" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                <img src={previewUrl} alt="Crop preview" className="aspect-video md:aspect-[4/3] max-h-[380px] w-full object-cover" />
                <button onClick={() => setPreviewUrl(null)} className="absolute top-4 right-4 p-3 rounded-full hover:scale-105 transition-transform" style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white' }}>
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="aspect-video md:aspect-[4/3] max-h-[380px] w-full rounded-3xl border-2 border-dashed flex flex-col items-center justify-center text-center p-6" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                <Camera className="w-12 h-12 md:w-16 md:h-16 mb-6 opacity-20 text-white/70" />
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
                  <label className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white cursor-pointer transition-colors shadow-md hover:shadow-lg hover:bg-white/30" style={{ backgroundColor: '#10B981' }}>
                    <Camera className="w-5 h-5" /> Take Photo
                    <input type="file" accept="image/*" capture="environment" onChange={handleFileChange} className="hidden" />
                  </label>
                  <label className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white cursor-pointer transition-colors shadow-md hover:shadow-lg hover:bg-white/30" style={{ backgroundColor: 'var(--accent-brown)' }}>
                    <Upload className="w-5 h-5" /> Upload File
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-3xl border p-6 md:p-8 space-y-6 bg-[#37472A]/70 border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white">
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-1 text-white">Scan Details</h2>
              <p className="text-sm md:text-base mt-1 font-bold text-[#064E3B] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">Provide context for precision diagnostic analysis</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs md:text-sm font-semibold mb-1 block text-white/70">Field (Optional)</label>
                <select value={field} onChange={e => setField(e.target.value)} className="w-full text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', outlineColor: 'var(--accent-green)' }}>
                  <option value="">Select field</option>
                  <option>North Acre</option>
                </select>
              </div>
              <div>
                <label className="text-xs md:text-sm font-semibold mb-1 block text-white/70">Crop Type *</label>
                <select value={cropType} onChange={e => setCropType(e.target.value)} className="w-full text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', outlineColor: 'var(--accent-green)' }}>
                  <option value="">Select crop type</option>
                  {CROP_TYPES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs md:text-sm font-semibold mb-1 block text-white/70">Growth Stage</label>
                <select value={growthStage} onChange={e => setGrowthStage(e.target.value)} className="w-full text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', outlineColor: 'var(--accent-green)' }}>
                  <option value="">Select growth stage</option>
                  {GROWTH_STAGES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs md:text-sm font-semibold mb-1 block text-white/70">Notes (Optional)</label>
                <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} placeholder="Add observations..." className="w-full text-sm md:text-base py-4 px-5 rounded-3xl focus:outline-none focus:ring-2 resize-none" style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', outlineColor: 'var(--accent-green)' }} />
              </div>
              <div className="flex items-center gap-3 p-4 rounded-3xl text-sm font-medium" style={{ backgroundColor: 'var(--status-warn-bg)', border: '1px solid var(--status-warn-border)', color: 'var(--status-warn-text)' }}>
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>GPS Not Available (Enable location services for mapping)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
              <button className="w-full sm:w-auto text-sm md:text-base font-bold py-3 px-8 min-h-[48px] rounded-full border transition-colors shadow-sm hover:bg-white/30" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white', backgroundColor: 'rgba(255,255,255,0.2)' }}>Cancel</button>
              <button className="w-full sm:w-auto text-sm md:text-base font-bold py-3 px-8 min-h-[48px] rounded-full text-white transition-all shadow-md hover:shadow-lg" style={{ backgroundColor: '#10B981' }}>Submit Scan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { ScanDiagnoseView } from './components/ScanDiagnoseView';
import { SensorTelemetryView } from './components/SensorTelemetryView';
import { FieldMapView } from './components/FieldMapView';
import { AgentChatView } from './components/AgentChatView';
import { SAMPLE_FARMS } from './data/sampleData';
import { FarmLocation, AppView } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [selectedFarm] = useState<FarmLocation>(SAMPLE_FARMS[0]);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-root text-text-primary font-sans">
      <Header
        activeView={currentView}
        onChangeView={setCurrentView}
      />

      <main className="flex-1 flex min-w-0 relative overflow-hidden">
        {currentView === 'dashboard' && <DashboardView farm={selectedFarm} />}
        {currentView === 'scan' && <ScanDiagnoseView />}
        {currentView === 'sensors' && <SensorTelemetryView farm={selectedFarm} />}
        {currentView === 'field_map' && <FieldMapView />}
        {currentView === 'chat' && <AgentChatView />}
      </main>
    </div>
  );
}

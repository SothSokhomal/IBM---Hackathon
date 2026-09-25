import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AuthModal } from './components/auth/AuthModal';
import { DashboardView } from './features/dashboard/DashboardView';
import { ScanView } from './features/scan/ScanView';
import { AnalyticsView } from './features/analytics/AnalyticsView';
import { HistoryView } from './features/history/HistoryView';
import { FieldMapView } from './features/fields/FieldMapView';
import { SensorTelemetryView } from './components/SensorTelemetryView';
import { SAMPLE_FARMS } from './data/sampleData';
import { AppView } from './types';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const farm = SAMPLE_FARMS[0];

  if (!isAuthenticated) {
    return <AuthModal onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div
      className="flex flex-col h-[100dvh] w-full overflow-hidden overscroll-none font-sans"
      style={{ backgroundColor: 'var(--bg-root)', color: 'var(--text-primary)' }}
    >
      <Navbar activeView={currentView} onChangeView={setCurrentView} />

      <main className="flex-1 min-h-0 flex overflow-hidden">
        {currentView === 'dashboard' && <DashboardView />}
        {currentView === 'scan' && <ScanView />}
        {currentView === 'analytics' && <AnalyticsView />}
        {currentView === 'history' && <HistoryView />}
        {currentView === 'field_map' && <FieldMapView />}
        {currentView === 'sensors' && <SensorTelemetryView farm={farm} />}
      </main>
      <Footer />
    </div>
  );
}

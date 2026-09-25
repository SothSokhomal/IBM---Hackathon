export type SeverityLevel = 'Normal' | 'Warning' | 'Alert';

export type AppView =
  | 'login'
  | 'dashboard'
  | 'scan'
  | 'analytics'
  | 'history'
  | 'sensors'
  | 'field_map';

export interface FarmLocation {
  id: string;
  name: string;
  fieldPlot: string;
  cropType: string;
  coordinates: string;
  totalAcreage: number;
  healthScore: number;
  activeAlerts: number;
  weather: {
    tempC: number;
    humidity: number;
    rainProbability: number;
    condition: string;
    windSpeedKmh: number;
    leafWetnessHours: number;
    plantTranspiration: string;
    sporeGerminationRisk: 'Low' | 'Moderate' | 'High' | 'Severe';
  };
}

export interface MetricCard {
  label: string;
  value: string | number;
  trend?: string;
  status?: string;
  color: 'blue' | 'amber' | 'purple' | 'emerald';
}

export interface ScanRecord {
  id: string;
  timestamp: string;
  crop: string;
  field?: string;
  diseaseName: string;
  confidence: number;
  severity: SeverityLevel;
  thumbnailUrl?: string;
  notes?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  timestamp: string;
  text: string;
  image?: string;
  tags?: string[];
}

export interface FieldLocation {
  id: string;
  name: string;
  crop: string;
  areaHa: number;
  status: 'Healthy' | 'Watch' | 'Action Needed';
  lastScouted: string;
  coordinates?: { lat: number; lng: number };
}

export interface LoRaSensorNode {
  id: string;
  nodeName: string;
  zone: string;
  batteryPct: number;
  rssiDbm: number;
  status: 'online' | 'warning' | 'offline';
  lastSyncSecs: number;
  readings: {
    tempC: number;
    humidityPct: number;
    leafWetnessHrs: number;
  };
}

export interface FieldGridCell {
  row: number;
  col: number;
  id: string;
  crop: string;
  status: 'Healthy' | 'Watch' | 'Action Needed';
  leafWetness: number;
  incidentName?: string;
  severity?: SeverityLevel;
  lastScouted: string;
  plantCount: number;
}

export interface DiagnosisResult {
  id: string;
  timestamp: string;
  crop: string;
  cause: string;
  diseaseName: string;
  confidence: number;
  severity: SeverityLevel;
  leafDamage: string;
  visibleSigns: string;
  leafImageUrl: string;
  isHealthy: boolean;
  analysisMetadata: {
    modelName: string;
    inferenceTimeMs: number;
    lesionsDetected: number;
  };
  weatherAlert?: string;
  recommendedAction?: string;
  verdictTag: string;
  treatments: {
    immediateActions: string[];
    organicTreatments: Array<{
      name: string;
      activeAgent: string;
      dosage: string;
      applicationMethod: string;
      applicationInterval: string;
      safetyNotes: string;
    }>;
    chemicalTreatments: Array<{
      name?: string;
      commercialName: string;
      activeIngredient: string;
      dosage: string;
      phiDays: number;
      reiHours: number;
      precautions: string;
    }>;
    longTermPrevention: string[];
  };
  agronomicAdvice: string;
}

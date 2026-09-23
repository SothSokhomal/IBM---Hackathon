export type SeverityLevel = 'Normal' | 'Warning' | 'Alert';

export type AppView = 'dashboard' | 'scan' | 'sensors' | 'field_map' | 'chat';

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
    plantTranspiration: 'Low (Air is holding too much moisture)' | 'Normal' | 'High';
    sporeGerminationRisk: 'Low' | 'Moderate' | 'High' | 'Severe';
  };
}

export interface BoundingBox {
  id: string;
  label: string;
  box: [number, number, number, number]; // [ymin, xmin, ymax, xmax] in percentages 0-100
  confidence: number;
  type: 'lesion' | 'chlorosis' | 'necrosis' | 'mildew';
}

export interface TreatmentActionPlan {
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
    phiDays: number; // Pre-Harvest Interval in days
    reiHours: number; // Restricted Entry Interval in hours
    precautions: string;
  }>;
  longTermPrevention: string[];
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
  boundingBoxes: BoundingBox[];
  analysisMetadata: {
    modelName: string;
    inferenceTimeMs: number;
    lesionsDetected: number;
  };
  weatherAlert?: string;
  recommendedAction?: string;
  verdictTag: string;
  treatments: TreatmentActionPlan;
  agronomicAdvice: string;
}

export interface HistoryItem {
  id: string;
  date: string;
  crop: string;
  diseaseName: string;
  severity: SeverityLevel;
  confidence: number;
  thumbnail: string;
  farmName: string;
  fieldPlot: string;
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

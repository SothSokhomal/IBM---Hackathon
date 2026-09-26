import {
  FarmLocation,
  DiagnosisResult,
  LoRaSensorNode,
  FieldGridCell,
} from '../types';

export function createSampleLeafSvg(
  type: 'tomato_late_blight' | 'corn_blight' | 'apple_scab' | 'healthy_soybean' | 'healthy_apple' | 'potato_blight'
): string {
  if (type === 'healthy_soybean') {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
      <defs>
        <linearGradient id="soyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="%2315803d" />
          <stop offset="50%" stop-color="%2316a34a" />
          <stop offset="100%" stop-color="%2322c55e" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="none" rx="20"/>
      <g transform="translate(300, 360)">
        <path d="M 0 160 Q -5 80 0 0" stroke="%2384cc16" stroke-width="12" stroke-linecap="round" fill="none"/>
        <g transform="translate(0, -110)">
          <path d="M 0 -140 C 70 -80 90 20 0 100 C -90 20 -70 -80 0 -140 Z" fill="url(%23soyGrad)" stroke="%2315803d" stroke-width="3"/>
          <path d="M 0 -130 L 0 90" stroke="%2386efac" stroke-width="4" opacity="0.8"/>
        </g>
        <g transform="translate(-80, -20) rotate(-42)">
          <path d="M 0 -110 C 60 -60 70 10 0 80 C -70 10 -60 -60 0 -110 Z" fill="url(%23soyGrad)" stroke="%2315803d" stroke-width="3"/>
          <path d="M 0 -100 L 0 70" stroke="%2386efac" stroke-width="3.5" opacity="0.7"/>
        </g>
        <g transform="translate(80, -20) rotate(42)">
          <path d="M 0 -110 C 60 -60 70 10 0 80 C -70 10 -60 -60 0 -110 Z" fill="url(%23soyGrad)" stroke="%2315803d" stroke-width="3"/>
          <path d="M 0 -100 L 0 70" stroke="%2386efac" stroke-width="3.5" opacity="0.7"/>
        </g>
      </g>
      <text x="300" y="565" text-anchor="middle" fill="%2310b981" font-family="system-ui, sans-serif" font-weight="600" font-size="14">Healthy Soybean</text>
    </svg>`;
  }

  if (type === 'apple_scab') {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
      <defs>
        <linearGradient id="appleLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="%2315803d" />
          <stop offset="40%" stop-color="%23166534" />
          <stop offset="80%" stop-color="%233f2e08" />
          <stop offset="100%" stop-color="%231f1304" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="none" rx="20"/>
      <path d="M 300 540 C 295 480 300 420 300 360" stroke="%2384cc16" stroke-width="12" stroke-linecap="round" fill="none"/>
      <path d="M 300 90 C 440 170 460 340 370 460 C 330 500 300 520 300 520 C 300 520 270 500 230 460 C 140 340 160 170 300 90 Z" fill="url(%23appleLeafGrad)" stroke="%2314532d" stroke-width="4"/>
      <path d="M 300 100 Q 302 300 300 520" stroke="%2386efac" stroke-width="6" opacity="0.6" fill="none"/>
      <circle cx="230" cy="220" r="42" fill="%23362a12"/>
      <circle cx="225" cy="215" r="24" fill="%2318181b" opacity="0.9"/>
      <circle cx="370" cy="290" r="54" fill="%23362a12"/>
      <circle cx="365" cy="295" r="32" fill="%2318181b" opacity="0.9"/>
      <text x="300" y="565" text-anchor="middle" fill="%23f59e0b" font-family="system-ui, sans-serif" font-weight="600" font-size="14">Apple Scab</text>
    </svg>`;
  }

  if (type === 'corn_blight') {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
      <defs>
        <linearGradient id="cornGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="%2315803d" />
          <stop offset="30%" stop-color="%234ade80" />
          <stop offset="60%" stop-color="%2316a34a" />
          <stop offset="100%" stop-color="%23166534" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="none" rx="20"/>
      <path d="M 300 40 C 370 120 400 320 360 560 L 240 560 C 200 320 230 120 300 40 Z" fill="url(%23cornGrad)" stroke="%23166534" stroke-width="4"/>
      <line x1="300" y1="40" x2="300" y2="560" stroke="%23fef08a" stroke-width="7" opacity="0.8"/>
      <g transform="translate(260, 200) rotate(8)">
        <rect x="-30" y="-80" width="60" height="160" rx="28" fill="%23713f12" stroke="%23ca8a04" stroke-width="2"/>
        <line x1="0" y1="-70" x2="0" y2="70" stroke="%230f172a" stroke-width="4" opacity="0.6"/>
      </g>
      <text x="300" y="565" text-anchor="middle" fill="%23f59e0b" font-family="system-ui, sans-serif" font-weight="600" font-size="14">Corn Leaf Blight</text>
    </svg>`;
  }

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
    <defs>
      <linearGradient id="tomatoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="%23166534" />
        <stop offset="40%" stop-color="%2315803d" />
        <stop offset="70%" stop-color="%23854d0e" />
        <stop offset="100%" stop-color="%23451a03" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="none" rx="20"/>
    <path d="M 300 550 Q 290 480 300 420" stroke="%2365a30d" stroke-width="14" stroke-linecap="round" fill="none"/>
    <path d="M 300 90 C 370 80 430 140 450 200 C 470 260 410 320 440 370 C 460 410 410 470 350 490 C 310 500 300 520 300 520 C 300 520 290 500 250 490 C 190 470 140 410 160 370 C 190 320 130 260 150 200 C 170 140 230 80 300 90 Z" fill="url(%23tomatoGrad)" stroke="%2314532d" stroke-width="3"/>
    <path d="M 300 110 Q 300 300 300 510" stroke="%234ade80" stroke-width="5" stroke-linecap="round" opacity="0.6"/>
    <ellipse cx="230" cy="220" rx="60" ry="45" fill="%23451a03"/>
    <ellipse cx="230" cy="220" rx="30" ry="20" fill="%231c1917"/>
    <circle cx="215" cy="210" r="14" fill="%23cbd5e1" opacity="0.8"/>
    <text x="300" y="565" text-anchor="middle" fill="%23f43f5e" font-family="system-ui, sans-serif" font-weight="600" font-size="14">Late Blight</text>
  </svg>`;
}

export const SAMPLE_FARMS: FarmLocation[] = [
  {
    id: 'farm-01',
    name: 'Greenhouse 1',
    fieldPlot: 'Tomato Bay',
    cropType: 'Tomato',
    coordinates: '36.7783° N, 119.4179° W',
    totalAcreage: 18.5,
    healthScore: 78,
    activeAlerts: 3,
    weather: {
      tempC: 24.2,
      humidity: 88,
      rainProbability: 75,
      condition: 'Humid Overcast',
      windSpeedKmh: 6,
      leafWetnessHours: 7.5,
      plantTranspiration: 'Low (Air is holding too much moisture)',
      sporeGerminationRisk: 'Severe',
    },
  },
];

export const PRESET_DIAGNOSES: Record<string, DiagnosisResult> = {
  tomato_late_blight: {
    id: 'diag-tomato-late-blight-001',
    timestamp: new Date().toISOString(),
    crop: 'Tomato',
    cause: 'Late Blight Fungus',
    diseaseName: 'Late Blight',
    confidence: 96.4,
    severity: 'Alert',
    leafDamage: 'Severe (~30% of leaves affected)',
    visibleSigns: 'Gray mold spores and dark ring spots',
    leafImageUrl: createSampleLeafSvg('tomato_late_blight'),
    isHealthy: false,
    analysisMetadata: {
      modelName: 'Standard Plant Vision Model',
      inferenceTimeMs: 142,
      lesionsDetected: 3,
    },
    weatherAlert: 'High humidity has triggered disease spread risk',
    recommendedAction: 'Apply deep-penetrating fungicide',
    verdictTag: 'Verified by System Rules (EPA & Organic Standards Compliant)',
    treatments: {
      immediateActions: [
        'Remove and bag infected plants in Bay 3 to prevent spreading.',
        'Increase ventilation to reduce humidity below 70%.',
        'Clean tools with disinfectant after pruning.'
      ],
      organicTreatments: [
        {
          name: 'Copper Fungicide (Organic)',
          activeAgent: 'Copper',
          dosage: '1.5 lbs per acre in 50 gal water',
          applicationMethod: 'Foliar spray',
          applicationInterval: 'Every 5 to 7 days',
          safetyNotes: 'OMRI Listed. 0-Day Pre-Harvest Interval (PHI).',
        }
      ],
      chemicalTreatments: [],
      longTermPrevention: [
        'Transition to drip irrigation to keep leaves dry.',
        'Use resistant varieties next season.'
      ],
    },
    agronomicAdvice: 'Apply fungicide immediately and reduce greenhouse humidity.',
  },
  healthy_soybean: {
    id: 'diag-soybean-healthy-004',
    timestamp: new Date().toISOString(),
    crop: 'Soybean',
    cause: 'None',
    diseaseName: 'Healthy',
    confidence: 99.2,
    severity: 'Normal',
    leafDamage: 'None',
    visibleSigns: 'Even green color, strong leaf structure',
    leafImageUrl: createSampleLeafSvg('healthy_soybean'),
    isHealthy: true,
    analysisMetadata: {
      modelName: 'Standard Plant Vision Model',
      inferenceTimeMs: 118,
      lesionsDetected: 0,
    },
    verdictTag: 'Verified by System Rules (EPA & Organic Standards Compliant)',
    treatments: {
      immediateActions: ['No action required. Continue regular checks.'],
      organicTreatments: [],
      chemicalTreatments: [],
      longTermPrevention: ['Maintain current irrigation schedule.'],
    },
    agronomicAdvice: 'Plants are healthy. No spraying needed.',
  }
};

export const LORA_SENSOR_NODES: LoRaSensorNode[] = [
  {
    id: 'node-01',
    nodeName: 'Sensor Node 1',
    zone: 'Tomato Bay North',
    batteryPct: 94,
    rssiDbm: -68,
    status: 'online',
    lastSyncSecs: 14,
    readings: { tempC: 23.8, humidityPct: 82, leafWetnessHrs: 5.8 },
  },
  {
    id: 'node-02',
    nodeName: 'Sensor Node 2',
    zone: 'Tomato Bay South',
    batteryPct: 89,
    rssiDbm: -72,
    status: 'warning',
    lastSyncSecs: 8,
    readings: { tempC: 24.2, humidityPct: 88, leafWetnessHrs: 7.5 },
  }
];

export const FIELD_GRID: FieldGridCell[] = Array.from({ length: 24 }, (_, i) => {
  const r = Math.floor(i / 6) + 1;
  const c = (i % 6) + 1;
  const isBlighted = r === 2 && c === 3;
  const isWarn = r === 2 && c === 4;

  return {
    row: r,
    col: c,
    id: `row-${r}-col-${c}`,
    crop: 'Tomato',
    status: isBlighted ? 'Action Needed' : isWarn ? 'Watch' : 'Healthy',
    leafWetness: isBlighted ? 9.2 : isWarn ? 7.8 : 4.1,
    incidentName: isBlighted ? 'Late Blight Detected' : undefined,
    severity: isBlighted ? 'Alert' : isWarn ? 'Warning' : 'Normal',
    lastScouted: '2h ago',
    plantCount: 120,
  };
});

export const HISTORICAL_TELEMETRY_48H = Array.from({ length: 48 }, (_, i) => {
  const hour = 48 - i;
  return {
    timestamp: new Date(Date.now() - hour * 3600000).toISOString(),
    tempC: 22 + Math.sin(hour / 4) * 4 + Math.random() * 2,
    humidityPct: 65 + Math.cos(hour / 6) * 20 + Math.random() * 5,
    leafWetnessHrs: Math.max(0, Math.sin(hour / 8) * 8),
  };
});

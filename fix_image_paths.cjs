const fs = require('fs');

const features = [
  'src/features/dashboard/DashboardView.tsx',
  'src/features/scan/ScanView.tsx',
  'src/features/analytics/AnalyticsView.tsx',
  'src/features/history/HistoryView.tsx'
];

for (const file of features) {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(/from ['"]\.\.\/assets/g, "from '../../assets");
  fs.writeFileSync(file, content);
}
console.log("Image paths fixed");

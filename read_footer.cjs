const fs = require('fs');
let doc = fs.readFileSync('src/features/dashboard/DashboardView.tsx', 'utf-8');
const footerIndex = doc.toLowerCase().indexOf('footer');
if (footerIndex > -1) {
  console.log(doc.substring(footerIndex - 50, footerIndex + 1000));
} else {
  console.log("No footer found in DashboardView");
}

const fs = require('fs');
let content = fs.readFileSync('src/components/DashboardView.tsx', 'utf-8');

// Change opacity from 60% to 70%
content = content.replace(/bg-\[#37472A\]\/60/g, 'bg-[#37472A]/70');
content = content.replace(/bg-\[#2D3B22\]\/60/g, 'bg-[#2D3B22]/70');

fs.writeFileSync('src/components/DashboardView.tsx', content);
console.log("Changed card opacity to 70%");

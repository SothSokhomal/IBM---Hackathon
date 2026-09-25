const fs = require('fs');
let content = fs.readFileSync('src/components/DashboardView.tsx', 'utf-8');

// Replace the div with background-image entirely with an img tag
content = content.replace(
  /<div \s*className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"\s*style=\{\{ backgroundImage: "[^"]+" \}\}\s*\/>/g,
  '<img src={dashboardBg} alt="Dashboard Background" className="fixed inset-0 w-full h-full object-cover z-0" />'
);

// Just in case it was a backtick version
content = content.replace(
  /<div \s*className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"\s*style=\{\{ backgroundImage: `[^`]+` \}\}\s*\/>/g,
  '<img src={dashboardBg} alt="Dashboard Background" className="fixed inset-0 w-full h-full object-cover z-0" />'
);

// Remove the gradient overlay completely
content = content.replace(
  /<div \s*className="fixed inset-0 z-0 bg-\[radial-gradient[^>]+>\s*<\/div>/g,
  ''
);

fs.writeFileSync('src/components/DashboardView.tsx', content);
console.log("Forced img tag and removed gradient.");

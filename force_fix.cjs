const fs = require('fs');

const path = 'src/components/CropDoctorView.tsx';
let content = fs.readFileSync(path, 'utf-8');

// Fix var(--) -> var(--bg-root)
content = content.replace(/var\(--\)/g, 'var(--bg-root)');

// Fix onMouseEnter/Leave manual style mutations just in case
content = content.replace(
  /onMouseEnter=\{e => \(e\.currentTarget\.style\.backgroundColor = 'var\(--bg-surface-hover\)'\)\} onMouseLeave=\{e => \(e\.currentTarget\.style\.backgroundColor = 'transparent'\)\}/g,
  ''
);
// Make the buttons use tailwind hover instead
content = content.replace(
  /className="w-full flex items-center gap-3 px-4 py-3\.5 rounded-full text-sm md:text-base font-semibold text-left transition-colors border border-transparent hover:border-black\/5 dark:hover:border-white\/5"/g,
  'className="w-full flex items-center gap-3 px-4 py-3.5 rounded-full text-sm md:text-base font-semibold text-left transition-colors border border-transparent hover:bg-black/5 dark:hover:bg-white/5"'
);

fs.writeFileSync(path, content);
console.log("Forced fix applied");

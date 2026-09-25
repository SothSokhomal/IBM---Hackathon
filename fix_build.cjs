const fs = require('fs');

let doc = fs.readFileSync('src/features/doctor/CropDoctorView.tsx', 'utf-8');
doc = doc.replace(
  /import bgImage from '\.\.\/\.\.\/assets\/crop-doctor-bg\.jpg';, \{ useState, useRef, useEffect \} from 'react';/g,
  "import React, { useState, useRef, useEffect } from 'react';\nimport bgImage from '../../assets/crop-doctor-bg.jpg';"
);
// In case it wasn't exactly that:
doc = doc.replace(
  /import bgImage from '([^']+)';, (.*)/g,
  "import $2\nimport bgImage from '$1';"
);
fs.writeFileSync('src/features/doctor/CropDoctorView.tsx', doc);

let fld = fs.readFileSync('src/features/fields/FieldMapView.tsx', 'utf-8');
fld = fld.replace(
  /import bgImage from '\.\.\/\.\.\/assets\/field-map-bg\.jpg';, \{ useState, useEffect \} from 'react';/g,
  "import React, { useState, useEffect } from 'react';\nimport bgImage from '../../assets/field-map-bg.jpg';"
);
fld = fld.replace(
  /import bgImage from '([^']+)';, (.*)/g,
  "import $2\nimport bgImage from '$1';"
);

// Fix FieldMapView missing closing div:
// the old regex was: content.replace(/<\/div>\n  \);\n};/, '  </div>\n    </div>\n  );\n};');
// But I only ran that on CropDoctorView! I forgot to run it on FieldMapView.
fld = fld.replace(
  /    <\/div>\n  \);\n};/g,
  "    </div>\n  </div>\n  );\n};"
);

fs.writeFileSync('src/features/fields/FieldMapView.tsx', fld);
console.log("Syntax fixed!");

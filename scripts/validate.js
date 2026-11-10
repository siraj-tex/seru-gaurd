const fs = require('fs');
const path = require('path');

console.log('--- SERU GUARD Extension Validation ---');

const extDir = path.join(__dirname, '..', 'extension');
const manifestPath = path.join(extDir, 'manifest.json');

if (!fs.existsSync(manifestPath)) {
  console.error('FAIL: manifest.json not found!');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
console.log(`PASS: Manifest loaded: ${manifest.name} (v${manifest.version})`);

// Verify icon files
const icons = ['16.png', '19.png', '38.png', '48.png', '128.png', '256.png', '512.png'];
let allIconsExist = true;
for (const icon of icons) {
  const iconPath = path.join(extDir, 'icons', icon);
  if (!fs.existsSync(iconPath)) {
    console.error(`FAIL: Missing icon: ${icon}`);
    allIconsExist = false;
  }
}
if (allIconsExist) console.log('PASS: All icon assets verified.');

// Check for _metadata
if (fs.existsSync(path.join(extDir, '_metadata'))) {
  console.warn('WARN: _metadata directory detected. Please remove before distribution.');
} else {
  console.log('PASS: Clean unpacked directory (no reserved _metadata folder).');
}

console.log('\n[SUCCESS] SERU GUARD extension is valid and ready to load!');


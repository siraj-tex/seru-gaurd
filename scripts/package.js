const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('--- Packaging SERU GUARD Extension ---');

const rootDir = path.join(__dirname, '..');
const extDir = path.join(rootDir, 'extension');
const distDir = path.join(rootDir, 'dist');
const zipPath = path.join(distDir, 'seru-guard-extension.zip');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Remove previous zip if exists
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

try {
  // Compress excluding _metadata
  const psCmd = `powershell -Command "$ProgressPreference = 'SilentlyContinue'; Get-ChildItem -Path '${extDir}' -Exclude '_metadata' | Compress-Archive -DestinationPath '${zipPath}' -Force"`;
  execSync(psCmd, { stdio: 'inherit' });
  console.log(`[SUCCESS] Packaged extension into: ${zipPath}`);
} catch (err) {
  console.error('Packaging failed:', err.message);
  process.exit(1);
}

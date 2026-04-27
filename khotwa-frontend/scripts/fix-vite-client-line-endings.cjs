const fs = require('fs');
const path = require('path');

const viteClientPath = path.join(
  __dirname,
  '..',
  'node_modules',
  'vite',
  'dist',
  'client',
  'client.mjs'
);

try {
  if (!fs.existsSync(viteClientPath)) {
    console.log('[fix-vite-client-line-endings] Skipped: vite client file not found.');
    process.exit(0);
  }

  const content = fs.readFileSync(viteClientPath, 'utf8');
  if (!content.includes('\r\n')) {
    console.log('[fix-vite-client-line-endings] No CRLF found; no changes needed.');
    process.exit(0);
  }

  fs.writeFileSync(viteClientPath, content.replace(/\r\n/g, '\n'), 'utf8');
  console.log('[fix-vite-client-line-endings] Normalized line endings to LF.');
} catch (error) {
  console.error('[fix-vite-client-line-endings] Failed:', error.message);
  process.exit(1);
}

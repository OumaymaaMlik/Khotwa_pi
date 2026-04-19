// Polyfills for sockjs-client - must run BEFORE any module imports
(window as any).global = window;
(window as any).process = {
  env: { NODE_ENV: 'production' }
};
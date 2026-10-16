import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset paths so the build works under the GitHub Pages project path.
  base: './',
  plugins: [react()],
});

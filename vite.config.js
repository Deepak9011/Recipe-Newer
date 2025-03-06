import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

const base = process.env.NODE_ENV === "production" ? "/" : "/";


export default defineConfig({
  plugins: [react()],
  base,
});
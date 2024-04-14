import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite';
// import reactPages from 'vite-plugin-react-pages';

// export default defineConfig({
//   plugins: [
//     reactPages(),
//   ],
// });

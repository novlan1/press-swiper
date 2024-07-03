import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
const ENV_PREFIX = ['VITE_', 'VUE_APP'];
// https://vitejs.dev/config/


export default defineConfig(({ mode }) => {
  console.log('mode', mode, process.cwd());
  const env = loadEnv(mode, process.cwd(), ENV_PREFIX);
  console.log('env', env);

  return {
    base: env.VITE_PUBLIC_PATH || './',
    plugins: [
      uni(),
    ],
    build: {
      target: 'es2015',
      rollupOptions: {
        input: {
          1: path.resolve(__dirname, './index.html'),
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  };
});

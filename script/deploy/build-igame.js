const { execSync } = require('child_process');
const { execCommand } = require('t-comm');
const ENV_FILE = '.env.local';


const PUBLIC_PATH_MAP = {
  IGAME: 'https://image-1251917893.file.myqcloud.com/',
  NORMAL: './',
};


function main() {
  // execSync(`echo VUE_APP_PUBLICPATH = ${PUBLIC_PATH_MAP.IGAME} >> .env.local`, {
  //   stdio: 'inherit',
  // });
  require('dotenv').config({ path: ENV_FILE });

  process.env.VUE_APP_PUBLICPATH = PUBLIC_PATH_MAP.IGAME;
  const appDir = process.env.VUE_APP_DIR;
  if (appDir === 'project/press-swiper-docs') {
    process.env.PUBLISH_PATH = '/pmd-mobile.pmd-h5.press-swiper.press-swiper-docs/';
    execSync('pnpm i && npm --prefix ./docs/zebra-swiper-docs run docs:build', {
      stdio: 'inherit',
    });

    execSync('mkdir -p dist/press-swiper-docs/dist && cp -r docs/zebra-swiper-docs/docs/.vuepress/dist/* dist/press-swiper-docs/dist', {
      stdio: 'inherit',
    });

    return;
  }

  delete process.env.UNI_INPUT_DIR;
  execSync(`echo VITE_PUBLIC_PATH = ${PUBLIC_PATH_MAP.IGAME}> ./demos/demo-cli-v3/.env.local`, {
    stdio: 'inherit',
  });

  execCommand('pnpm i && npm run build:h5', './demos/demo-cli-v3', 'inherit');
  execSync('mkdir -p dist/press-swiper/dist && cp -r demos/demo-cli-v3/dist/build/h5/* dist/press-swiper/dist', {
    stdio: 'inherit',
  });
}

main();

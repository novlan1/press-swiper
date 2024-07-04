const path = require('path');
const { execSync } = require('child_process');

const ENV_FILE = require('../env/env-file')();
const REPO = 'press-swiper';

const DIR_MAP = {
  DEMO_DIST: 'demos/demo-cli-v3/dist/build/h5',
  DOCS_DIST: 'docs/zebra-swiper-docs/docs/.vuepress/dist',
};


const parsedDirMap = Object.keys(DIR_MAP).reduce((acc, item) => {
  acc[item] = path.resolve(__dirname, '../../', DIR_MAP[item]);
  return acc;
}, {});


function main() {
  require('dotenv').config({ path: ENV_FILE });
  execSync(`rm -rf ${parsedDirMap.DOCS_DIST}/h5 \\
    && cp -r ${parsedDirMap.DEMO_DIST} ${parsedDirMap.DOCS_DIST}`),
  {
    stdio: 'inherit',
  };
  execSync(`npx t-comm deploy:github --repo ${REPO} --dir ${DIR_MAP.DOCS_DIST}`, {
    stdio: 'inherit',
  });
}

main();

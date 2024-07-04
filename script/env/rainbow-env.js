const { writeEnvFromRainbow } = require('t-comm');


const envPath = require('./env-file')();
const ENV_RAINBOW_KEY = 'press_ui_dev';

async function main() {
  await writeEnvFromRainbow({
    envPath,
    rainbowKey: ENV_RAINBOW_KEY,
    envName: 'Default',
    groupName: 'devops',
  });
}

main();

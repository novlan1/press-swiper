const fs = require('fs-extra');

const folderMappings = {
  'swiper-v3': 'demos/demo-normal-v3/uni_modules/zebra-swiper',
  'swiper-normal': 'demos/zebra-swiper-demo-normal/uni_modules/zebra-swiper',
  'swiper-src': 'src/zebra-swiper',
  'swiper-packages': 'packages/zebra-swiper',
};

const sourceFolderAlias = process.argv[2];

if (!sourceFolderAlias) {
  console.error('请提供源文件夹简称作为命令行参数。');
  process.exit(1);
}

const sourcePath = folderMappings[sourceFolderAlias];

if (!sourcePath) {
  console.error(`未找到与简称 '${sourceFolderAlias}' 相关联的完整路径。`);
  process.exit(1);
}

const destinationPaths = Object.keys(folderMappings).filter(alias => alias !== sourceFolderAlias);

destinationPaths.forEach((destinationPathAlias) => {
  const destinationPath = folderMappings[destinationPathAlias];
  fs.copySync(sourcePath, destinationPath, { overwrite: true });
  console.log(`文件夹内容成功同步到 ${destinationPathAlias}`);
});

console.log('所有目标文件夹同步完成！');

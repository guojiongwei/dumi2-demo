const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

/** 处理jest只执行本次修改到的工具方法内的测试用例 */
async function start() {
  /** 1. 获取git add 的文件的列表 */
  const addFiles = execSync(`git diff --staged --diff-filter=ACMR --name-only`)
    .toString()
    .split('\n');
  /** 2. 获取文件的绝对路径 */
  const diffFileList = addFiles
    .filter(Boolean)
    .map((item) => path.join(__dirname, item));

  /** 3. 获取src源码目录 */
  const srcPath = path.join(__dirname, './src');

  /** 4. 记录本次修改的函数方法 */
  const diffFileMap = {};
  diffFileList.forEach((filePath) => {
    if (
      filePath.includes(srcPath) &&
      (filePath.endsWith('.ts') || filePath.endsWith('.tsx'))
    ) {
      const relativePath = path.relative(srcPath, filePath);
      if (relativePath.includes('/')) {
        diffFileMap[relativePath.split('/')[0]] = true;
      }
    }
  });

  console.log('本次改动的方法', Object.keys(diffFileMap));

  /** 5. 找到改动方法下面所有的单元测试文件 */
  const list = (
    await Promise.all(
      Object.keys(diffFileMap).map(async (toolPath) => {
        const testsDir = path.join(srcPath, toolPath, '__tests__');
        try {
          const files = await fs.readdir(testsDir);
          return files.map((item) => path.join(testsDir, item));
        } catch (error) {
          return [];
        }
      }),
    )
  ).flat();

  /** 6. 执行单元测试脚本 */
  if (list.length) {
    try {
      execSync(`npx jest --bail --findRelatedTests ${list.join(/ /)}`, {
        cwd: __dirname,
        stdio: 'inherit',
      });
    } catch (error) {
      process.exit(1);
    }
  }
}

start();

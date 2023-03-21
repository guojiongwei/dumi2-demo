/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testTimeout: 50000,
  roots: ['./src'], // 查找src目录中的文件
  // collectCoverage: true, // 统计覆盖率
  // coverageDirectory: 'coverage', // 覆盖率结果输出的文件夹
  // 设置别名，若不设置，运行单测时会不认识@符号
  moduleNameMapper: {
    '^@/(.*)$': './src/$1',
  },
  collectCoverageFrom: ['src/**/*.tsx', '!src/index.ts', '!src/**/demo/*'],
};

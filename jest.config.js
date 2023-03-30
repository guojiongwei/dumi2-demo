/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest', // 使用ts-jest预设，支持用ts写单元测试
  testEnvironment: 'jsdom', // 设置测试环境为jsdom环境
  roots: ['./src'], // 查找src目录中的文件
  collectCoverage: true, // 统计覆盖率
  coverageDirectory: 'coverage', // 覆盖率结果输出的文件夹
  transform: {
		'\\.(less|css)$': 'jest-less-loader' // 支持less
	},
  // 单元覆盖率统计的文件
  collectCoverageFrom: ['src/**/*.tsx', '!src/index.ts', '!src/**/demo/*'],
};

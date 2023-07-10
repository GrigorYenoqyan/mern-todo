import type { Config } from 'jest';

const basePath = '<rootDir>';

const config: Config = {
  roots: [`${basePath}/src`],
  verbose: false,
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [`${basePath}/src/setupTestsAfterEnv.ts`],
};

export default config;

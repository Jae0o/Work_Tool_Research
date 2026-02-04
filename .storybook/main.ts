import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: "@storybook/react-vite",

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        // React Compiler 격리: Storybook 빌드에서는 비활성화
        // 프로젝트 vite.config.ts의 babel-plugin-react-compiler를 여기서는 제외
      ],
    });
  },
};

export default config;
const config = {
  stories: ['../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@nrwl/react/plugins/storybook'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        viteConfigPath: '',
      },
    },
  },
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs

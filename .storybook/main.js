const path = require('path')

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-gatsby',
    '@chakra-ui/storybook-addon'
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-webpack5'
  },
  'features': {
    'interactionsDebugger': true,
    emotionAlias: false
  },
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'postcss-loader',
            options: { implementation: require.resolve('postcss') },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      })
    // Return the altered config
    return config
  },
}
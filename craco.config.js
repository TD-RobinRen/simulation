const path = require(`path`);
const CracoLessPlugin = require('craco-less');
const coverage = require('./coverage');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: coverage,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}

const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
    uniqueName: 'mdmfdetails',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'details',
      library: { type: 'var', name: 'details' },
      filename: 'remoteEntry.js',
      exposes: {
        DetailsModule: './src/app/details/details.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true },
        '@ngxs/store': { singleton: true, eager: true },
        'mdmf-shared': { singleton: true, eager: true },
      },
    }),
  ],
};

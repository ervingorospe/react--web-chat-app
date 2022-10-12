const path = require('path');

module.exports = {
  mode: 'development',
  // Adding Server
  devServer: {
    port: 3001,
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
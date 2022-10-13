const path = require('path');

module.exports = {
  // The entry point file described above
  entry: ['./src/index.js', './src/app.js', './src/ui.js'],
  // The location of the build/output folder described above
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
    // Do not need to watch for instant changes since you are already using webpack-dev-server instead ise the below
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
    //webpack should watch for instant changes
    watch: true
};
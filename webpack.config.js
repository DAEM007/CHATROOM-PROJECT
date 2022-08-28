const path = require('path');

module.exports = {
  // The entry point file described above
  entry: ['./src/index.js', './src/ui.js', './src/app.js'],
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
    // To watch for instant changes
  watch: true,
};


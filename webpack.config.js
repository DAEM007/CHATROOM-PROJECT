const path = require('path');

module.exports = {
  // The entry point file described above
  entry: './src/app.js',
  // The location of the build/output folder described above
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
    //webpack should watch for instant changes
    watch: true
};
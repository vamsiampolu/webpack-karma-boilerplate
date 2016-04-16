var webpack = require('webpack');

module.exports = {
  devtool:'eval-source-map',
  devServer:{
    stats:'errors-only',
    contentBase:'./build',
    hot:true,
    inline:true,
    progress:true,
    port:3000,
  },
  plugins:[
     new webpack.HotModuleReplacementPlugin()
  ]
};

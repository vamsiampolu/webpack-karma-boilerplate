var path = require('path');

module.exports = {
  entry:'./index.js',
  output:{
    filename:'bundle.js',
    path:'build'
  },
  module:{
    preLoaders:[
      {
        test:/\.jsx?$/,
        loader:'eslint',
        exclude:/node_modules/
      }
    ],
    loaders:[
      {
        test:/\.jsx?$/,
        loader:'babel',
        exclude:[
          path.resolve(__dirname,'./node_modules'),
          path.resolve(__dirname,'./build')
        ],
        query:{
	        cacheDirectory:true
	      }
      }
    ]
  }
};

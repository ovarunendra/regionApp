var webpack = require('webpack');


var config = {
    context: __dirname + '/app',
    entry: {
        app: './index.js',
        vendor: ['angular','angular-animate','angular-route','angular-cookies','jquery','ngTable'],
        theme: ['./theme/index.js']
    },
    output: {
        path: __dirname + '/app',
        filename: '[name].bundle.js'
    },
    module: {
      loaders: [
      {test: /\.html$/, loader: 'html', exclude: /node_modules/},
      {test: /\.css$/,  include: [
        path.resolve(__dirname, "not_exist_path")
        ], loader: 'style!css', exclude: /node_modules/},
        { test: /\.map$/, loader: 'json-loader' , exclude: /node_modules/},
        {test: /\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/, loader: 'file' ,exclude: /node_modules/}
        ]
      },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery",  "window.jQuery": "jquery"  })
    ]
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/dist';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;

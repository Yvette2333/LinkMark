const { 
  override, 
  fixBabelImports,
  addWebpackAlias,
  // addLessLoader,
  addDecoratorsLegacy,
  addWebpackPlugin,
  addBabelPresets,
  addBabelPlugins,
} = require('customize-cra');
const path = require("path");
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),
  ...addBabelPresets(
    "@babel/preset-react",
    "@babel/preset-env"
  ),
  ...addBabelPlugins(
    "@babel/plugin-syntax-dynamic-import"
  ),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  // addLessLoader({
  //   javascriptEnabled:true,
  //   modules:{
  //     localIdentName: "[local]--[hash:base64:5]",
  //   },
  //   modifyVars: { 
  //     '@primary-color': '#1DA57A' 
  //   },
  // }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
    // ["actions"]: path.resolve(__dirname, "src/actions"),
    // ["assets"]: path.resolve(__dirname, "src/assets"),
    // ["components"]: path.resolve(__dirname, "src/components"),
    // ["views"]: path.resolve(__dirname, "src/views"),
    // ["reducers"]: path.resolve(__dirname, "src/reducers"),
    // ["routes"]: path.resolve(__dirname, "src/routes"),
    // ["styles"]: path.resolve(__dirname, "src/styles"),
    // ["utils"]: path.resolve(__dirname, "src/utils"),
    // ["configs"]: path.resolve(__dirname, "src/configs"),
  }),
  // addWebpackPlugin(
    // 开启 BundleAnalyzerPlugin
    // new BundleAnalyzerPlugin(),
    // // 打包缓存
    // new HardSourceWebpackPlugin({
    //   // Either an absolute path or relative to webpack's options.context.
    //   cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
    //   // Either a string of object hash function given a webpack config.
    //   configHash: function(webpackConfig) {
    //     // node-object-hash on npm can be used to build this.
    //     return require('node-object-hash')({sort: false}).hash(webpackConfig);
    //   },
    //   // Either false, a string, an object, or a project hashing function.
    //   environmentHash: {
    //     root: process.cwd(),
    //     directories: [],
    //     files: ['package-lock.json', 'yarn.lock'],
    //   },
    //   // An object.
    //   info: {
    //     // 'none' or 'test'.
    //     mode: 'none',
    //     // 'debug', 'log', 'info', 'warn', or 'error'.
    //     level: 'debug',
    //   },
    //   // Clean up large, old caches automatically.
    //   cachePrune: {
    //     // Caches younger than `maxAge` are not considered for deletion. They must
    //     // be at least this (default: 2 days) old in milliseconds.
    //     maxAge: 2 * 24 * 60 * 60 * 1000,
    //     // All caches together must be larger than `sizeThreshold` before any
    //     // caches will be deleted. Together they must be at least this
    //     // (default: 50 MB) big in bytes.
    //     sizeThreshold: 50 * 1024 * 1024
    //   },
    // }),
  // )
)
module.exports = {
  // entry:  __dirname + "/node_modules/rxjs/Rx.js",  //已多次提及的唯一入口文件
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/1.js",
  output: {
    path: __dirname + "/src",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
}
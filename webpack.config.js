var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');//node的path对象

module.exports = {
  /*上下文环境*/
 context:__dirname,
  //entry:['./src/js/main.js','./src/js/script.js'],
  /*可用于多页面应用*/
/*  entry:{
      page1:'./page1',
      page2:['./entry1','./entry2']
  },*/
  /*会产生两个chunk*/
 /* entry:{
      main:'./src/js/main.js',
      script:'./src/js/script.js',
      a:"./src/js/a.js",
      b:'./src/js/b.js'
  },*/
  entry:'./src/app.js',
  /*
  不用占位符就只会打包出一个文件,若有多个chunk,那么打包的单文件就会被覆盖
  [name]:chunkname
  [hash]:打包的hash,若文件更新，每次打包都不一样。对静态资源的缓存有用
  [chunkhash]:每个chunk的hash
   */
/*  output:{
    path:'./dist/js',
    filename:'[name].bundle.js'
  },*/
  output:{
     path:path.resolve(__dirname,'dist/'),//'./dist/',
    filename:'./js/[name].bundle.js'
  },
  plugins:[
/*    new htmlWebpackPlugin({
      filename:'index.html',
      inject:'head',//定义脚本放置的位置（head标签中还是body标签中）
      template:'index.html',//模板文件（根目录下的），生成文件默认指向output中的path
      //chunks:['main','script'],
      excludeChunks:['a','b'],//除了a,b chunks其他都引入
    }),
     new htmlWebpackPlugin({
      filename:'a.html',
      inject:'head',
      date:new Date(),
      title:"a.html",
      template:'index.html',
      chunks:['a'],
    }),*/
     new htmlWebpackPlugin({
      filename:'index.html',
      inject:'head',
      title:"index-1.html",
      template:'index.html',
    }),
  ],
  module:{//放在module中
    loaders:[
      {
        test: /\.css$/,
        loader:'style-loader!css-loader',//从右到左执行
      },
      {
        test:'/\.js$/',//以js结尾的文件
        exclude:path.resolve(__dirname,'node/modules'),//排除，此处必须是绝对路径，否则无效
        include:path.resolve(__dirname,'src'),//限定范围
        loader:'babel-loader',
        query:{
          presets:['es2015']
        }
      },
    ]
  }
}

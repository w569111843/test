/*function getNotices() {
  return axios.get('/user/12345');
}

function getFiles() {
  return axios.get('/user/12345/permissions');
}
function getNews(){
	return axios.get('')
}
function getUserType(){
	return axio.get('')
}
function getServiceAgency(){
	return axios.get('')
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));*/
  dev: {
      env: require('./dev.env'),
      port: 8090,
      autoOpenBrowser: true,
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      proxyTable: {
        '/api': {
          target:'http://api.douban.com/v2', // 你请求的第三方接口
          changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          pathRewrite:{  // 路径重写，
            '^/api': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
          }
        }
      },
      // CSS Sourcemaps off by default because relative paths are "buggy"
      // with this option, according to the CSS-Loader README
      // (https://github.com/webpack/css-loader#sourcemaps)
      // In our experience, they generally work as expected,
      // just be aware of this issue when enabling this option.
      cssSourceMap: false
    }
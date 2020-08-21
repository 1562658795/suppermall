module.exports = {
	configureWebpack: {
		resolve : {
			// 别名的配置
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
			}
		}
	},
	// css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require("postcss-px-to-viewport")({
  //           // unitToConvert: "px",
	// 					// viewportWidth: 370,
	// 					// viewportHeight:667,
  //           // unitPrecision: 5,
  //           // propList: [
  //           //   "*"
  //           // ],
  //           // viewportUnit: "vw",
  //           // fontViewportUnit: "vw",
  //           // selectorBlackList: ['ignore','tab-bar','tab-bar-item'],
  //           // minPixelValue: 1,
  //           // mediaQuery: false,
  //           // replace: true,
	// 					// exclude: /(\/|\\)(node_modules)(\/|\\)/,
	// 					viewportWidth:375,  // 视窗的宽度，对应的是我们的设计稿的宽度
	// 					viewportHeight:667, // 视窗的高度，对应的是我们设计稿的高度。（也可以不配置）
	// 					unitPrecision:5, // 指定需要转换成的视窗单位，建议使用vw
	// 					selectorBlackList:['ignore','tab-bar','tab-bar-item'], // 指定不需要转换的类
	// 					minPixeVlue:1, // 小于或等于1px不转换为视窗单位
	// 					mediaQuery:false // 允许在媒体查询中转换`px`
  //         })
  //       ]
  //     }
	// 	}
	// }
}

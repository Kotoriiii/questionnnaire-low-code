const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-pxtorem')

module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [
        '> 0.5%', // 全球超过0.5%的人使用的浏览器
        'last 2 versions', // 每个主要浏览器的最后2个版本
        'Firefox ESR', // 最近一个Firefox ESR版本
        'not dead', // 不在浏览器市场死亡列表中的浏览器版本
      ],
      grid: true,
    }),
    px2rem({ rootValue: 16, unitPrecision: 3, propList: ['*'], exclude: /node_modules/i }),
  ],
}

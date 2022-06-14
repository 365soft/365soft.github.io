const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

const { penName, title } = require('./common/info')

module.exports = {
  //theme: 'vdoing', // 使用npm包主题
  theme: require.resolve('../../vdoing'), // 使用本地主题
  // 如果使用 locales 的 title 和 description，则下方的 title 和 description 失效
  // title: penName + title,
  // description: '零售系统应用帮助中心,金蝶EAS,汽车4S,整车,二手车,保险,维修,会员,客服,财务,供应链,精品,应收,应付,存货核算,固定资产',
  // lang: 'zh-CN',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 显示代码块的行号
    extractHeaders: [ 'h2', 'h3', 'h4', ],  //extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ],
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  // 多语言支持
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '零售系统应用帮助中心',  //penName + title,
      description: '零售系统应用帮助中心,金蝶EAS,汽车4S,整车,二手车,保险,维修,会员,客服,财务,供应链,精品,应收,应付,存货核算,固定资产'
    },
    // '/en/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: penName + title,
    //   description: 'eashelp,kingdee,eas,ctcai,auto4s'
    // }
  },
  head,
  plugins,
  themeConfig,
}

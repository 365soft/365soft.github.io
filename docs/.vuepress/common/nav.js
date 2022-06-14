// nav
// const javaNav = require("../nav/javaNav");
// const databaseNav = require("../nav/databaseNav");
// const frameNav = require("../nav/frameNav");
// const springNav = require("../nav/springNav")
// 微服务统一放在框架里
// const cloudNav = require("../nav/cloudNav");
// const toolNav = require("../nav/toolNav");
// const frontEnd = require("../nav/frontEnd");
// const moreNav = require("../nav/moreNav");
const indexNav = require("../nav/indexNav");
const eashelpfaq = require("../nav/eashelpfaq");
const eashelpspecial = require("../nav/eashelpspecial");
const eashelpautovm = require("../nav/eashelpautovm");
const eashelpautoam = require("../nav/eashelpautoam");
const eashelpautoscm = require("../nav/eashelpautoscm");
const eashelpautorsm = require("../nav/eashelpautorsm");
const eashelpautovip = require("../nav/eashelpautovip");
const eashelpautocsm = require("../nav/eashelpautocsm");
const eashelpfi = require("../nav/eashelpfi");
const eashelpreport = require("../nav/eashelpreport");
const eashelpbase = require("../nav/eashelpbase");
module.exports = [
  {
    text: '首页', link: '/'
  },
  // {
  //   text: '导航站', link: '/navigation/'
  // },
  { text: '主目录', link: '/list/' },
  eashelpfaq,   //问题集锦导航
  eashelpspecial,  // 专项专题导航
  eashelpautovm,   // 整车导航
  eashelpautoam,  // 增值导航
  eashelpautoscm,  // 精品配件导航
  eashelpautorsm,  // 维修导航
  eashelpautovip,  // 会员导航
  eashelpautocsm,   // 客服导航
  eashelpfi,   // 财务导航
  eashelpreport,   // 报表导航
  eashelpbase,   // 建模导航
  { text: '旧版手册', link: '/pages/old/' },
  indexNav,   //索引导航
  // {
  //   text: '留言区', link: '/message-area/'
  // },
]

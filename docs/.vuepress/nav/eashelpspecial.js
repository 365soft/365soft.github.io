// 工具导航栏
module.exports =  {
  text: '专项', link: '/list/index.html#专项专题', items: [
    { text: '周期关注参考', link: '/list/index.html#周期关注建议' },
//        { text: '业务财务一体化', link: '/special/' },
//        { text: '存货账账一致', link: '/special/' },
//        { text: '存货账实一致', link: '/special/' },
//        { text: '两金管理', link: '/special/' },
//        { text: '新车销售质量监控', link: '/special/' },
//        { text: '系统使用检查', link: '/special/' },
//        { text: '更多专项...', link: '/special/' },
    {
      text: '应用规范', items: [
        { text: '系统应用检查', link: '/pages/special-101000/' },
        { text: '更多专项...', link: '/list/index.html#基础系统专项' },
      ]
    },
    {
      text: '财务专项', items: [
        { text: '业务财务一体化', link: '/pages/special-102000/' },
        { text: '更多专项...', link: '/list/index.html#财务专项' },
      ]
    },
    {
      text: '销售专项', items: [
        { text: '账账相符', link: '/pages/special-103011/' },
        { text: '账实相符', link: '/pages/special-103012/' },
        { text: '新车销售质量监控', link: '/pages/special-103013/' },
        { text: '更多专项...', link: '/list/index.html#销售专项' },
      ]
    },
    {
      text: '精品配件专项', items: [
        { text: '账账相符', link: '/pages/special-104011/' },
        { text: '账实相符', link: '/pages/special-104012/' },
        { text: '更多专项...', link: '/list/index.html#精品配件专项' },
      ]
    },
    {
      text: '维修专项', items: [
        { text: '维修超期未结', link: '/pages/special-106001/' },
        { text: '维修未收款未开票', link: '/pages/special-106002/' },
        { text: '更多专项...', link: '/list/index.html#维修件专项' },
      ]
    },
    {
      text: '会员专项', items: [
        { text: '更多专项...', link: '/list/index.html#会员专项' },
      ]
    },
    {
      text: '客服专项', items: [
        { text: '客户档案及客户规范', link: '/pages/basedata-101011/' },
        { text: '车辆档案规范', link: '/pages/basedata-101012/' },
        { text: '更多专项...', link: '/list/index.html#客服专项' },			  
      ]
    },		  
  ]
}
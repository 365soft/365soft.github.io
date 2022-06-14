// 工具导航栏
module.exports =  {
  text: '财务', link: '/list/index.html#总账管理', items: [
    {
      text: '财务系统', items: [
        { text: '总账管理', link: '/list/index.html#总账管理' },
        { text: '出纳管理', link: '/list/index.html#出纳管理' },
        { text: '销售结算', link: '/list/index.html#销售结算管理' },
        { text: '应收管理', link: '/list/index.html#应收管理' },
        { text: '应付管理', link: '/list/index.html#应付管理' },
        { text: '固定资产', link: '/list/index.html#固定资产' },
        { text: 'NCC接口', link: '/list/index.html#NCC接口' },
      ]
    },
    {
      text: '财务专项', items: [
        { text: '业务财务一体化', link: '/pages/special-102000/' },
        { text: '科目及辅助规范', link: '/pages/special-102010/' },
        { text: '客户权益核对', link: '/pages/special-102021/' },
        { text: '超期应收', link: '/pages/special-102022/' },
        { text: '超期预付', link: '/pages/special-102023/' },
        { text: '整车成本核算', link: '/pages/special-102031/' },
        { text: '精品配件成本核算', link: '/pages/special-102032/' },
        { text: '费用管理', link: '/pages/special-102070/' },
        { text: '税率调整', link: '/pages/special-102099/' },
        { text: '更多财务专项', link: '/list/index.html#财务专项' },
      ]
    },		  
  ]
}
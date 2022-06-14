// 工具导航栏
module.exports =  {
  text: '维修', link: '/list/index.html#维修管理', items: [
    {
      text: '维修-基础', items: [
        { text: '基础数据', link: '/list/index.html#维修管理-基础数据' },  
        { text: '常见问题', link: '/list/index.html#维修管理-常见问题' },
      ]
    },
    {
      text: '维修-业务', items: [
        { text: '一般维修', link: '/list/index.html#维修管理-一般维修' },
        { text: '索赔维修', link: '/list/index.html#维修管理-索赔维修' },
        { text: '理赔维修', link: '/list/index.html#维修管理-理赔维修' },
        { text: '维修退单', link: '/list/index.html#维修管理-维修退单' },
      ]
    },
    {
      text: '维修-进阶', items: [
        { text: '特别事项', link: '/list/index.html#维修管理-特别事项' },
        { text: '账务处理', link: '/list/index.html#维修管理-账务处理' },
        { text: '管理报表', link: '/list/index.html#维修管理-管理报表' },
        { text: '更多...', link: '/list/index.html#维修管理' },
      ]
    },
    {
      text: '维修-专项', items: [
        { text: '维修超期未结算', link: '/pages/special-106001/' },
        { text: '维修未收款未开票', link: '/pages/special-106002/' },
        { text: '更多维修专项...', link: '/list/index.html#维修专项' },
      ]
    },		  
  ]
}
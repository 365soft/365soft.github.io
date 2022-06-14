// 工具导航栏
module.exports =  {
  text: '会员', link: '/list/index.html#会员管理', items: [
    {
      text: '会员-基础', items: [
        { text: '基础数据', link: '/list/index.html#会员管理-基础数据' },  
        { text: '常见问题', link: '/list/index.html#会员管理-常见问题' },
      ]
    },
    {
      text: '会员-业务', items: [
        { text: '会籍管理', link: '/list/index.html#会员管理-会籍管理' },
        { text: '会员卡管理', link: '/list/index.html#会员管理-会员卡管理' },
        { text: '会员储值', link: '/list/index.html#会员管理-会员储值' },
        { text: '会员套餐', link: '/list/index.html#会员管理-会员套餐' },
        { text: '会员积分', link: '/list/index.html#会员管理-会员积分' },
        { text: '会员活动', link: '/list/index.html#会员管理-会员活动' },
        { text: '救援服务', link: '/list/index.html#会员管理-救援服务' },
      ]
    },
    {
      text: '会员-进阶', items: [
        { text: '特别事项', link: '/list/index.html#会员管理-特别事项' },
        { text: '财务处理', link: '/list/index.html#会员管理-账务处理' },
        { text: '管理报表', link: '/list/index.html#会员管理-管理报表' },
        { text: '更多...', link: '/list/index.html#会员管理' },
      ]
    },
    {
      text: '会员-专项', items: [
        { text: '更多会员专项...', link: '/list/index.html#会员专项' },
      ]
    },		  
  ]
}
// 工具导航栏
module.exports =  {
  text: '整车', link: '/list/index.html#整车管理', items: [
    {
      text: '整车-基础', items: [
        { text: '基础数据', link: '/list/index.html#整车管理-基础数据' },  
        { text: '常见问题', link: '/list/index.html#整车管理-常见问题' },
      ]
    },
    {
      text: '整车-业务', items: [
        { text: '潜客管理', link: '/list/index.html#潜客商机' },
        { text: '采购管理', link: '/list/index.html#整车管理-采购管理' },
        { text: '销售管理', link: '/list/index.html#整车管理-销售管理' },
        { text: '库存管理', link: '/list/index.html#整车管理-库存管理' },
        { text: '内部调拨', link: '/list/index.html#整车管理-集团内调拨' },
        { text: '二手车置换', link: '/list/index.html#二手车置换' },
      ]
    },
    {
      text: '整车-进阶', items: [
        { text: '特别事项', link: '/list/index.html#整车管理-特别事项' },
        { text: '财务处理', link: '/list/index.html#整车管理-账务处理' },
        { text: '管理报表', link: '/list/index.html#整车管理-管理报表' },
        { text: '更多...', link: '/list/index.html#整车管理' },
      ]
    },
    {
      text: '整车-专项', items: [
        { text: '整车账账相符', link: '/pages/special-103011/' },
        { text: '整车账实相符', link: '/pages/special-103012/' },
        { text: '新车销售质量监控', link: '/pages/special-103013/' },
        { text: '更多销售专项...', link: '/list/index.html#销售专项' },
      ]
    },		  
  ]
}
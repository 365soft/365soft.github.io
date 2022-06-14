// 工具导航栏
module.exports =  {
  text: '建模', link: '', items: [
    {
      text: '企业建模', link: '/list/index.html#企业建模', items: [
        { text: '组织架构', link: '/list/index.html#组织架构' },
        { text: '用户权限', link: '/list/index.html#权限管理' },
        { text: '系统参数', link: '/pages/base-823000/' },
        { text: '业务规则', link: '/list/index.html#业务规则' },
        { text: '套打设置', link: '/pages/base-825000/' },
        { text: '引入引出', link: '/pages/base-826000/' },
        { text: '后台事务', link: '/pages/base-827000/' },
        { text: '工作流', link: '/pages/base-828000/' },
      ]
    },
    {
      text: '基础数据', link: '/list/index.html#基础数据', items: [
        { text: '客户档案和客户', link: '/pages/basedata-200010/' },
        { text: '供应商', link: '/pages/basedata-200011/' },
        { text: '车辆档案', link: '/pages/basedata-200012/' },
        { text: '车系车型', link: '/pages/basedata-200013/' },
        { text: '维修项目', link: '/pages/basedata-200015/' },
        { text: '物料', link: '/list/index.html#基础数据' },
        { text: '仓库库位', link: '/list/index.html#基础数据' },
        { text: '更多基础数据...', link: '/list/index.html#基础数据' },
      ]
    },
    {
      text: '系统初始化', link: '/list/index.html#系统初始化', items: [
        { text: '初始化基本步骤', link: '/pages/init-step/' },  
        { text: '总账初始化', link: '/pages/init-fi-gl/' },
        { text: '出纳初始化', link: '/pages/init-fi-cash/' },
        { text: '应收初始化', link: '/pages/init-fi-ar/' },
        { text: '应付初始化', link: '/pages/init-fi-ap/' },
        { text: '固定资产初始化', link: '/pages/init-fi-fa/' },
        { text: '整车初始化', link: '/pages/init-auto-vm/' },
        { text: '精品配件初始化', link: '/pages/init-scm/' },
        { text: '维修初始化', link: '/pages/init-auto-rsm/' },
        { text: '客户权益初始化', link: '/pages/init-auto-custright/' },
        { text: '会员初始化', link: '/pages/init-auto-vip/' },
        { text: '客服初始化', link: '/pages/init-auto-csm/' },
      ]
    },
  ]
}
---
home: true
# heroImage: # ./img/logo.jpg
heroText: 零售系统应用帮助中心 #金蝶EAS系统帮助中心
tagline: 🚀持续完善 点滴进步
# actionText: 开始使用 →
# actionLink: ./list/

action: 
  - text: 新版完善中 →
    link: ./list/
  - text: 旧版手册 ↗
    link: ./pages/old/

bannerBg: auto # none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量



features: # 可选的
  - title: 基础入门
    details: 了解零售系统的基本概念、基本操作，基本设置
    link: ./pages/abc/
  - title: 系统应用质量检查体系
    details: 通过规范系统应用，促进经营管理改善、促进数据统计准确、减少管理风险
    link: ./list/#整体专项
    #link: ./pages/auto4s-sdv/
  - title: 问题集锦
    details: 为您答疑解惑，让你从容使用系统
    link: ./pages/faq/

showarticlelistblock: true     #true不显示文章分组块，false显示文章分组块
articlelistblocklength: 10
articlelistblock: # 可选的
  - listname: 整车及二手车 #分类或标签的主题
    listauto: auto             #auto,则与分类或标签的文章对应上，如果非auto则取listlink
    listlink: ./pages/abc1/     #要与分类或标签的文章列表对应上，也可以自行指定
    categoryortag: category    #值只能是category 或 tag
    keyname: 整车及二手车管理  #分类或标签
    articleLength: 8
    icon: biaoqian1
  - listname: 增值代办
    listauto: auto
    listlink: ./pages/abc2/
    categoryortag: category    #值只能是category 或 tag
    keyname: 整车及二手车管理
    articleLength: 8
    icon: biaoqian1
  - listname: 精品配件
    listauto: auto
    listlink: ./pages/abc3/
    categoryortag: category    #值只能是category 或 tag
    keyname: 整车及二手车管理
    articleLength: 8
    icon: biaoqian1
  - listname: 维修 #分类或标签的主题
    listauto: auto             #auto,则与分类或标签的文章对应上，如果非auto则取listlink
    listlink: ./pages/abc1/     #要与分类或标签的文章列表对应上，也可以自行指定
    categoryortag: category    #值只能是category 或 tag
    keyname: 整车及二手车管理  #分类或标签
    articleLength: 8
    icon: biaoqian1
  - listname: 会员及客户权益
    listauto: auto
    listlink: ./pages/abc2/
    categoryortag: category    #值只能是category 或 tag
    keyname: 整车及二手车管理
    articleLength: 8
    icon: biaoqian1
  - listname: 业务报表
    listauto: auto
    listlink: ./pages/abc3/
    categoryortag: tag  #值只能是category 或 tag
    keyname: 库存核算
    articleLength: 8
    icon: biaoqian1

articlelistside: # 可选的
  - listname: 问题集锦 #分类或标签的主题
    listauto: auto             #auto,则与分类或标签的文章对应上，如果非auto则取listlink
    listlink: ./pages/faq/     #要与分类或标签的文章列表对应上，也可以自行指定
    categoryortag: category    #值只能是category 或 tag
    keyname: 问题集锦  #分类或标签
    articleLength: 20
    icon: biaoqian1
  - listname: 系统安装
    listauto: auto
    listlink: ./categories/?category=系统安装
    categoryortag: category    #值只能是category 或 tag
    keyname: 系统安装
    articleLength: 5
    icon: biaoqian1
  - listname: 系统应用检查体系
    listauto: auto
    listlink: ./categories/?category=检查体系
    categoryortag: category    #值只能是category 或 tag
    keyname: 系统应用检查体系
    articleLength: 10
    icon: biaoqian1
  - listname: 审批工作流
    listauto: auto
    listlink: ./categories/?category=审批工作流
    categoryortag: category    #值只能是category 或 tag
    keyname: 审批工作流
    articleLength: 10
    icon: biaoqian1

#文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
#postList: none
postList: none  #simple  #detailed
simplePostListLength: 12 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
# hideRightBar: true # 是否隐藏右侧边栏 (v1.11.2+)
---

<!--ClientOnly>
  <WebInfo />
  <IndexBigImg />
  <Fantasy />
</ClientOnly-->

<ClientOnly>
  <!--WebInfo/-->

</ClientOnly>


<style>
.become-sponsor{
  padding: 8px 20px;
  display: inline-block;
  color: #11a8cd;
  border-radius: 30px;
  box-sizing: border-box;
  border: 1px solid #11a8cd;
}
</style>
<br/>

## 🎉公告通知📢

::: warning 重要通知📢

- 请所有门店，参考操作指引[金蝶系统应用质量检查体系数据上报指南 ](/pages/special-101000/)，每月定期（一般在财务结账后、每月7月左右）统计金蝶系统应用检查指标体系各指标数据至外部登记单。
- 填报周期：每月一次，每月7月左右（遇节假日顺延）。

- 请所有门店注意，水平业务需关联生成，不得手工填制。

:::

<!--历史通知

::: warning 重要通知📢

近期拟对各店**客户权益**进行调研，拟了解如下事项，请各店积极配合做好准备！

客户权益包括但不限于：`预收款`，`优惠券`，`会员储值`、`会员套餐`、`会员积分`、`会员折扣`、`会员等级`等。

- 客户权益的形式（储值、基金、优惠券、积分等）
- 客户权益的类型（工时代金券、材料代金券、项目代金券等）
- 政策支持（自店政策、厂家政策、异业联盟等）
- 客户权益发放流程（立项、审批、发放等流程）
- 客户权益使用流程（台账、核销机制等流程）
- 监督流程（赔付率、流失率等）
- 历史数据核对（去年/今年发放金额、去年/今年使用金额、去年/今年有效余额）

:::

-->

## 🎖专项专题

::: cardList 3
```yaml
#- name: 业财一体化
#  desc: 🚀1️⃣哪些业务需生成凭证？如何生成凭证？
#  link: ./pages/special-102000/
#  bgColor: '#5B8982'  #'rgb(221, 237, 234)'
#  textColor: '#ffffff'  # '#2A3344'
- name: 科目及辅助规范
  desc: 🚀1️⃣确保会计科目及辅助账符合上级管理要求及核算规范
  link: ./pages/special-102010/
  bgColor: '#5B8982'  #'rgb(221, 237, 234)'
  textColor: '#ffffff'  # '#2A3344'
- name: 存货账账相符一致
  desc: 🚀2️⃣确保业务和财务账一致,月末结账前必须核对一致
  link: ./pages/special-104011/
  bgColor: '#D47655'  #'rgb(221, 237, 234)'
  textColor: '#E1F8E1'
#- name: 存货账实相符一致
#  desc: 🚀3️⃣确保业务数据与实际相符，如挂单、核销、结算、价格、明细等
#  link: ./pages/special-104012/
#  bgColor: '#42586E' #'rgb(221, 237, 234)'
#  textColor: '#E3D4AF'
- name: 精品配件库存核算规范及调整
  desc: 🚀3️⃣确保精品配件库存核算准确无误，有误的及时调整
  link: ./pages/special-104000/
  bgColor: '#42586E' #'rgb(221, 237, 234)'
  textColor: '#E3D4AF'
#- name: 系统应用检查
#  desc: 🚀4️⃣日清日结、长期挂单、客户余额相符、基础数据准确
#  link: ./pages/special-101000/
#  bgColor: '#AE9AAB' # 'rgb(221, 237, 234)'
#  textColor: '#F2EBE7'
- name: 客户档案的基本维护要求
  desc: 🚀4️⃣确保客户档案及客户的规范，不重复，避免业务和财务使用混乱
  link: ./pages/basedata-200010/
  bgColor: '#AE9AAB' # 'rgb(221, 237, 234)'
  textColor: '#F2EBE7'
- name: 新车销售质量监控
  desc: 🚀5️⃣全方位链接新车销售各个环节，有效分析销售利润结构
  link: ./pages/special-103013/
  bgColor: '#417CA9' #'rgb(221, 237, 234)'
  textColor: '#EDEBE4'
- name: 预付账款管理
  desc: 🚀6️⃣规范预付账款的使用，确保记账规范、对账无差异
  link: ./pages/special-102023/
  bgColor: '#7379B0'
  textColor: '#C6EDEC'
#- name: 管理报表
#  desc: 🚀6️⃣让系统发挥价值，离不开您的积极使用
#  link: ./pages/report/
#  bgColor: '#7379B0'
#  textColor: '#C6EDEC'
- name: 车辆档案的基本维护要求
  desc: 🚀7️⃣底盘号、车牌号、车主是否准确关联匹配，深度影响业务财务
  link: ./pages/basedata-200012/
  bgColor: '#D47655'  #'rgb(221, 237, 234)'
  textColor: '#E1F8E1'
- name: 应收系统管理
  desc: 🚀8️⃣预收账款、合同负债、预存开票、结算处理，以及与业务衔接的规范
  link: ./pages/special-102022/
  bgColor: '#5B8982'  #'rgb(221, 237, 234)'
  textColor: '#ffffff'  # '#2A3344'
- name: 客户权益余额核对
  desc: 🚀9️⃣确保业务层面客户权益准确，避免产生损失
  link: ./pages/special-102021/
  bgColor: '#417CA9' #'rgb(221, 237, 234)'
  textColor: '#EDEBE4'
```
:::

<br/>

## 🎉最近更新

<ArticleListUpdate2 :length="30" />

::: right

[更多文章](/archives/)>

:::

<!--

## 财务核算规范

<ArticleListCategororTagUpdate2 :currentPage="currentPage" :perPage="6" :tag="'财务核算规范'" />

::: right

[更多文章](/categories/?category=财务核算规范)>

:::

-->

<!--

## 🎉指定分类或标签列表测试

<ArticleListMore :currentPage="currentPage" :perPage="20" :category="''" />

### 一行一列：

<ArticleListCategororTagUpdate1 :currentPage="currentPage" :perPage="5" :category="'系统应用检查体系'" />

### 一行两列：

<ArticleListCategororTagUpdate2 :currentPage="currentPage" :perPage="6" :category="'系统应用检查体系'" />

### 一行三列：

<ArticleListCategororTagUpdate3 :currentPage="currentPage" :perPage="9" :category="'系统应用检查体系'" />





## 🎉分类文章

::: demo

```
<el-row :gutter="12">
  <el-col :span="8" style="@media (max-width $MQMobile):100%;margin:-10px auto auto auto;">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>整车及二手车</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/categories/?category=整车管理">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :category="'整车及二手车管理'" />
  </div>
    </el-card>
  </el-col>
  <el-col :span="8" style="margin:-10px auto auto auto">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>增值代办</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/categories/?category=增值代办">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :category="'系统应用检查体系'" />
  </div>
    </el-card>
  </el-col>
  <el-col :span="8" style="margin:-10px auto auto auto">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>精品配件</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/categories/?category=精品配件">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :category="'整车及二手车管理'" />
  </div>
    </el-card>
  </el-col>
  <el-col :span="8" style="margin:5px auto auto auto">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>维修业务</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/categories/?category=维修">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :category="'整车及二手车管理'" />
  </div>
    </el-card>
  </el-col>
  <el-col :span="8" style="margin:5px auto auto auto">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>会员及客服权益</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/categories/?category=客户权益">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :category="'整车及二手车管理'" />
  </div>
    </el-card>
  </el-col>
  <el-col :span="8" style="margin:5px auto auto auto">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>业务报表</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/tags/?tag=业务报表">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :tag="'库存核算'" />
  </div>
    </el-card>
  </el-col>
</el-row>
```

:::

-->

<!--

::: danger 特别提醒

以下版块内容，在调整丰富中，敬请期待！

:::

-->

<!--

## 🎉业务版块分类文章

::: demo

```
<div class="el-row" id="cust-rowcol">
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="新车及二手车的采购、销售、库存及核算"><b>整车及二手车</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/categories/?category=整车管理" title="新车及二手车的采购、销售、库存及核算">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">            
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :category="'整车及二手车管理'" />
            </div>
        </div>
    </div>
  </div>
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="代办服务、上牌、保险、按揭、延保、商业产品"><b>增值代办业务</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/categories/?category=增值代办管理" title="代办服务、上牌、保险、按揭、延保、商业产品">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :category="'增值代办管理'" />
            </div>
        </div>
    </div>
  </div>
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="精品、配件、辅料等的采购、销售、库存及核算以及精品加装"><b>精品配件管理</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/categories/?category=精品配件管理" title="精品、配件、辅料等的采购、销售、库存及核算以及精品加装">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :category="'精品配件管理'" />
            </div>
        </div>
    </div>
  </div>
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="一般维修、客户保养、厂家保养、索赔、理赔、维修预约等"><b>维修管理</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/categories/?category=维修管理" title="一般维修、客户保养、厂家保养、索赔、理赔、维修预约等">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :category="'维修管理'" />
            </div>
        </div>
    </div>
  </div>
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="新车销售/售后维修回访，保险/保养/保修/生日提醒，回访登记，流失，满意度，预约等"><b>客服管理</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/categories/?category=客服管理" title="新车销售/售后维修回访，保险/保养/保修/生日提醒，回访登记，流失，满意度，预约等">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :category="'客服管理'" />
            </div>
        </div>
    </div>
  </div>
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="各业务版块管理报表"><b>业务管理报表</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/categories/?category=业务管理报表" title="各业务版块管理报表">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :category="'业务管理报表'" />
            </div>
        </div>
    </div>
  </div>

</div>
<style>
#cust-rowcol
    .el-col-8{
            width:33.33333%
        }
    @media only screen and (max-width:1100px){
    	#cust-rowcol
            .el-col-8{
                width:50%
            }
    }
    @media only screen and (min-width:720px) and (max-width:799px){
    	#cust-rowcol
        .el-col-8{
                width:100%
            }
    }
    @media only screen and (min-width:560px) and (max-width:719px){
    	#cust-rowcol
            .el-col-8{
                width:50%
            }
    }
    @media only screen and (max-width:559px){
    	#cust-rowcol
            .el-col-8{
                width:100%
            }
    }
</style>
```

:::





## 🎉前台收款及客户权益

> 本栏目包括：前台收款、预收款账户、优惠券、会员储值、会员套餐、会员折扣、会员积分等。

::: demo
```
<ArticleListCategororTagUpdate2 :currentPage="currentPage" :perPage="10" :category="'客户权益'" />
```
::: right

[更多文章](/categories/?category=客户权益)

:::

::: 

-->

<!--

## 🎉财务版块分类文章

::: demo

```
<div class="el-row" id="cust-rowcol">
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow" style="background:var(--customBlockBg)">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="凭证、财务报表、NCC" style="color:$accentColor"><b>总账及NCC管理</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/categories/?category=总账及NCC接口" title="凭证、财务报表、NCC">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">            
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :category="'总账及NCC接口'" />
            </div>
        </div>
    </div>
  </div>
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="现金日记账、银行日记账、银行存款对账、余额调节"><b>出纳管理</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/categories/?category=出纳管理" title="现金日记账、银行日记账、银行存款对账、余额调节">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :category="'出纳管理'" />
            </div>
        </div>
    </div>
  </div>
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="应收、收款、应付、付款、结算等往来管理"><b>应收应付管理</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/categories/?category=应收应付管理" title="应收、收款、应付、付款、结算等往来管理">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :category="'应收应付管理'" />
            </div>
        </div>
    </div>
  </div>
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="固定资产新增、变更、折旧、盘点等"><b>固定资产管理</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/categories/?category=固定资产管理" title="固定资产新增、变更、折旧、盘点等">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :category="'固定资产管理'" />
            </div>
        </div>
    </div>
  </div>
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="核算整车、精品配件、辅料等的成本及采购核销、销售核销"><b>存货核算</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/tags/?tag=存货核算" title="核算整车、精品配件、辅料等的成本及采购核销、销售核销">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :tag="'存货核算'" />
            </div>
        </div>
    </div>
  </div>
  <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin:5px auto 5px;">
    <div class="el-card is-hover-shadow">
  		<div class="el-card__header">
  			<div class="clearfix">
    		<span title="各财务领域管理报表"><b>财务管理报表</b></span>
    		<button type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;"><span><a href="/categories/?category=财务管理报表" title="各财务领域管理报表">更多...</a></span>
    		</button>
    		</div>
  		</div>

  		<div class="el-card__body" style="height:448px;margin:-30px auto -20px;">          	
            <div class="text item" style="margin-left:-20px;">
                <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="8" :category="'财务管理报表'" />
            </div>
        </div>
    </div>
  </div>

</div>
<style>
#cust-rowcol
    .el-col-8{
            width:33.33333%
        }
    @media only screen and (max-width:1100px){
    	#cust-rowcol
            .el-col-8{
                width:50%
            }
    }
    @media only screen and (min-width:720px) and (max-width:799px){
    	#cust-rowcol
        .el-col-8{
                width:100%
            }
    }
    @media only screen and (min-width:560px) and (max-width:719px){
    	#cust-rowcol
            .el-col-8{
                width:50%
            }
    }
    @media only screen and (max-width:559px){
    	#cust-rowcol
            .el-col-8{
                width:100%
            }
    }
</style>
```

:::



## 💎 近期计划

近期拟推进完成如下内容：

- 工作流第一批流程上线。
- 组织开展会员及客户权益培训。
- 开发或优化业务报表。

如果您未找到问题的答案或需要的文章，请反馈给我们，我们将尽快予以补充！

-->

<!--

<br/>

## 🤝 反馈与交流

如果您在使用系统过程中，遇到任何问题，欢迎通过专题群和门店群反馈交流，以便您能快速解决问题！

也欢迎您对此平台内容提出意见和建议！您的指正，将有助于我们完善！





## ⚡️提示

::: tip
由于本部人员配置有限，本平台建设将耗时较长，在未完成前，大家可以移步旧版手册查阅。

希望大家 :sparkling_heart:支持 ，有问题请QQ群反馈……
:::

<br/>

## 🎉功能更新
* 待补充内容。

更多更新请查阅：[**更新日志**](./pages/updatelog/)

<br/>-->

## 🎉特别事项说明

- #### 关于密码修改问题

  

  根据信息系统管理要求，系统密码必须60天内至少修改一次，且不得和近两次密码一样。

  密码过期前，用户可以自行进行修改。过期前7天，系统会进行提醒，请予以注意。

  密码过期后，用户无法自行修改，可联系本部管理员、门店管理员进行密码修改。

  本部将考虑增加简易报表，显示自己的密码还有多长时间将过期。

  

- #### 关于频繁掉线和授权已分配完毕的问题

  :::: details

  先说授权已分配完毕的问题，金蝶EAS系统是按模块+本模块最大同时在线人数（即授权许可证数目）进行授权的。所有模块并不是允许无限制用户使用的，因此当同一时点，使用同一模块的用户数已达到购买的最大同时在线数时，则会提示授权已分配完毕。

  特别是月底大家集中使用时，经常会遇到此问题。

  解决此问题的路径有：

  - 向金蝶厂商，购买增加授权许可证数目。
  - 在未购买前，您使用完后，请尽快退出该模块，而不是一直停留占用。等他人退出该模块后进而低于最大用户数时，则您可以继续使用该模块。

  再说频繁掉线问题，该问题主要出于几方面考虑：

  - 一定程度上，避免他人使用您的账号操作数据。
  - 避免一直占用模块，导致别人无法使用系统。
  - 避免一直占用单据，导致下游人员无法操作。

  目前系统闲置时间为30分钟。如果您要长时间（超过30分钟）不操作系统，请关闭或保存单据退出占用的模块。如果未退出单据，掉线后，点击`尝试重连`，输入用户密码，即可重新登录系统。

  ::::

- #### 关于零售系统卡顿问题

  :::: details

  总体来看，本部的服务器带宽、服务器性能，是能满足EAS系统应用要求的，出现卡顿，主要原因有：
  
  - 您所处网络较慢，请联系门店升级、优化网络。
  - 您的计算机性能较差，请联系门店升级、优化电脑（如增加内存、升级为固态硬盘、清理自启动进程等）。
  - 您计算机打开了较多的程序，建议您关闭不用的程序和进程。

  在导出数据时，如果数据量较大，一般超过3000行，列又比较多时，可能会出现卡顿，建议缩小查询范围分多次查询，隐藏不必要的字段，再进行导出。

  在查询数据时，特别是开发的扩展报表，如果查询范围较大，可能会出现卡顿，建议缩小时间范围。本部也将持续优化报表。也请联系本部，提供意见和建议。
  
  :::: 
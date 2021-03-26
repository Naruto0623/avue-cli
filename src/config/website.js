/**
 * 全局配置文件
 */
export default {
  title: "天津检察院",
  logo: "A",
  key: 'avue',//配置主键,目前用于存储
  indexTitle: '天津检察院',
  lockPage: '/lock',
  tokenTime: 60000000,//token过期时间
  Authorization: 'Authorization',
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [400],
  //配置首页不可关闭
  isFirstPage: false,
  setting: {
    sidebar: "horizontal",
    tag: false,
    debug: false,
    collapse: true,
    search: true,
    lock: true,
    screenshot: false,
    fullscren: true,
    theme: true,
    menu: true,
    color: true
  },
  fistPage: {
    label: "首页",
    value: "/wel/index",
    // value: "/smartCatalog",
    params: {},
    query: {},
    meta: {
      i18n: 'dashboard'
    },
    group: [],
    close: false
  },
  //配置菜单的属性
  menu: {
    iconDefault: 'icon-caidan',
    props: {
      label: 'label',
      path: 'path',
      icon: 'icon',
      children: 'children'
    }
  }
}

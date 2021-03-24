const Init = compoenntName => {
  return `
export default {
  name: '${ compoenntName }Page',
  title: '${ compoenntName }',
  components: {},
  data(){
    return {
      
    }
  },
  computed: {},
  methods:{
    
  },
  created(){

  }
}
`
};
const Table = compoenntName => {
  return `import pageConfig from '@/components/PageConfig/page-config.vue'
export default {
  name: '${ compoenntName }List',
  title: '${ compoenntName }',
  components: {
    pageConfig
  },
  data(){
    return {
      //当前页面的objectType
      objectType: '11',
      //列表数据接口
      listUrl: this.GLOBAL.API_TABLE_DATA_FN('11'),
      //表头数据接口
      fieldUrl: this.GLOBAL.API_TABLE_FIELD_FN('11'),
      //表头排序接口
      fieldSortUrl: this.GLOBAL.API_TABLE_SORT_FN('11'),
    }
  },
  methods:{
    
  },
  created(){

  }
}
`
};
const Modal = compoenntName => {
  return `export default {
  name: '${ compoenntName }',
  data(){
    return {
      //新增保存接口
      addUrl: this.GLOBAL.API_EXPRESS_COMPANY_SAVE,
      //编辑保存接口
      editUrl: this.GLOBAL.API_EXPRESS_COMPANY_UPDATE,
      //详情接口
      infoUrl: this.GLOBAL.API_EXPRESS_COMPANY_DETAIL,
      //保存接口
      saveUrl: '',
      //模态框对象
      addItem: {

      },
      //必填字段验证规则
      rules: {
        name: [ { required: true, message: '请填写名称', trigger: 'blur' } ],
        isActive: [ { required: true, message: ' ' } ],
      },
    }
  },
  computed: {},
  methods:{
    //打开模态框，判断编辑时候调用接口，动态设置保存接口
    openModal( id ){
      this.isOpen = true;
      if (id) {
        this.title = '编辑';
        this.getDetail(id);
        this.saveUrl = this.editUrl;
      } else {
        this.title = '新增';
        this.saveUrl = this.addUrl;
      }
    },
    //保存前验证必填项
    infoSave(){
      if (!this.addItem.name) {
        this.$Message.warning('请输入姓名');
        return false;
      }
      this.savePost();
    },
    //保存调用接口
    savePost(){
      
    },
    //编辑时获取详情
    getDetail( id ){
      
    }
  }
}
`
};

module.exports = {
  Init,
  Table,
  Modal
};

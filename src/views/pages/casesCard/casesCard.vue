<template>
  <div class="casesCard">
    <el-container style="height: 865px;position: relative;">
      <!-- 折叠阅卷 -->
      <transition name="custom-classes-transition"
                  enter-active-class="animated bounceInUp">
        <div class="left-text" v-show="!isShowBook">
          <span @click="hideBook(1)" class="text-tag">电 子 卷 宗</span>
        </div>
      </transition>
      <!-- 左侧预览 -->
      <!--<transition name="custom-classes-transition"
                  enter-active-class="animated bounceInLeft">-->
      <!-- 左侧卷宗目录 -->
      <div v-show="isShowBook" style="margin-right: 10px;">
        <transition name="custom-classes-transition"
                    enter-active-class="animated bounceInLeft"
                    leave-active-class="animated bounceOutLeft">
          <div class="logs" v-show="isShowDrawer">
            <cataLog @nodeClick="nodeClick" @typeHandleClick="typeHandleClick"/>
          </div>
        </transition>
      </div>

      <!--</transition>-->
      <!-- 右侧表单 -->
      <el-aside style="background-color: transparent;border-radius: 6px;flex: 1">
        <div class="left-text" v-if="!isShowBook">
          <span class="text-tag">电 子 卷 宗</span>
        </div>
        <div style="display: flex;flex-direction: column;height: 100%;width: 100%;">
          <el-header class="header-box" style="height: 42px;">
            <span>电子卷宗</span>
            <span style="flex: 1"></span>
            <!--<span @click="hideBook"><i style="font-size: 16px;" class="el-icon-d-arrow-left"></i></span>-->
          </el-header>
          <el-main style="flex: 1">
            <div class="read-box" id="box">
              <!-- 卷宗预览 -->
              <div class="read" @click="isShowDrawer = false">
                <img v-for="(item,index) in 6"
                     :key="index"
                     src="../../../../public/img/demo.png" alt="预览"
                     height="auto" width="900px"
                     :id="'img' + (index + 1)">
              </div>
              <!-- 阅卷工具条 -->
              <div class="toods-read">
                <el-tooltip effect="dark" content="目录" placement="left">
                  <i class="toods-icon el-icon-s-management" @click="openDrawer"></i>
                </el-tooltip>
                <el-tooltip effect="dark" content="放大" placement="left">
                  <i class="toods-icon el-icon-zoom-in"></i>
                </el-tooltip>
                <el-tooltip effect="dark" content="缩小" placement="left">
                  <i class="toods-icon el-icon-zoom-out"></i>
                </el-tooltip>
                <el-tooltip effect="dark" content="右旋转" placement="left">
                  <i class="toods-icon el-icon-refresh-right"></i>
                </el-tooltip>
                <el-tooltip effect="dark" content="左旋转" placement="left">
                  <i class="toods-icon el-icon-refresh-left"></i>
                </el-tooltip>
                <el-tooltip effect="dark" content="添加书签" placement="left">
                  <i class="toods-icon el-icon-collection-tag"></i>
                </el-tooltip>
                <!--<el-tooltip effect="dark" content="批注" placement="left">
                  <i class="toods-icon el-icon-edit-outline"></i>
                </el-tooltip>-->
                <el-tooltip effect="dark" content="回到顶部" placement="left">
                  <i class="toods-icon el-icon-upload2"></i>
                </el-tooltip>
              </div>
            </div>
          </el-main>
        </div>

        <!--<el-card v-if="!isNext" class="box-card">
          <div slot="header" class="clearfix">
            <span>提取受理信息</span>
            <span style="margin: 0 8px 0 auto;float: right">
              <i style="font-size: 16px;" class="el-icon-d-arrow-right"></i>
            </span>
          </div>
          <div>
            <el-collapse v-model="activeNames">
              <el-collapse-item name="1" title="受理标准">
                <el-tree
                  :data="configData.standardList"
                  show-checkbox
                  default-expand-all
                  node-key="id"
                  ref="standTree"
                  highlight-current
                  :props="defaultProps">
                  <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span style="color: red;padding-right: 5px;" v-if="node.data.isRequired">*</span>
                    <span>{{ node.label }}</span>
                  </span>
                </el-tree>
              </el-collapse-item>
              <el-collapse-item name="2" title="一审公诉（刑检）受理信息">
                <avue-form ref="form0" v-model="form0"
                           :option="configData.option1"
                           :status-icon="true"
                           @reset-change="emptytChange"
                           @submit="submit">
                </avue-form>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-card>
        &lt;!&ndash; 下一步案卡 &ndash;&gt;
        <el-card v-if="isNext" class="box-card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="案卡" name="1">
              <el-row>
                <el-col :span="leftSpan">
                  <el-tree :data="configData.cardLogData"
                           @node-click="chooseTree"
                           node-key="id"
                           :default-expanded-keys="[2, 3]"
                           :props="defaultProps">
                  </el-tree>
                </el-col>
                <el-col :span="rightSpan" style="border-left: 2px solid #B0C4DF;">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix" style="background-color: #f3f2f2">
                      <span>{{ title }}</span>
                    </div>
                    <el-row>
                      <el-radio v-model="radio" label="1">全选是</el-radio>
                      <el-radio v-model="radio" label="2">全选否</el-radio>
                    </el-row>
                    <el-tabs v-model="activeCard" @tab-click="handleClick">
                      <el-tab-pane label="基本信息" name="10">
                        <avue-form ref="form" v-model="form1" :option="configData.option2" @reset-change="emptytChange" @submit="submit"></avue-form>
                      </el-tab-pane>
                      <el-tab-pane label="侵犯知识产权情况" name="20">
                        <avue-form ref="form" v-model="form1" :option="configData.option1" @reset-change="emptytChange" @submit="submit"></avue-form>
                      </el-tab-pane>
                    </el-tabs>
                  </el-card>
                </el-col>
              </el-row>
            </el-tab-pane>
            &lt;!&ndash;<el-tab-pane label="在办文书" name="2">在办文书</el-tab-pane>&ndash;&gt;
          </el-tabs>
        </el-card>-->
      </el-aside>
      <!--<div style="position: absolute;top: 10px;height: 200px;width: 40px;background-color: #f00">
        测试
      </div>-->
    </el-container>
  </div>
</template>

<script>
  import cataLog from '@/components/cataLog/cataLog.vue'
  import configData from './casesCardConfig'

  export default {
    name: "casesCard",
    components: {
      cataLog,
    },
    data(){
      return {
        configData,
        radio: '1',
        form0: {
          name: this.$route.query.name,
          name1: '非法经营罪',
          name2: '武清分局',
          name3: '公安局',
          name4: '津武公10122号',
          name5: '',
          name6: '',
          name7: '',
          name8: '',
          name9: '',
          name10: '3',
        },
        title: '审查起诉案件信息',
        activeName: '1',
        activeCard: '10',
        // 右侧表单宽度
        rightWidth: '800px',
        // 下一步案卡左侧
        leftSpan: 3,
        // 下一步案卡右侧
        rightSpan: 21,
        isShowBook: true,
        // 当前是否显示下一步的内容
        isNext: false,
        isShowDrawer: true,
        form1: {},
        // 折叠面板展开项
        activeNames: ['1', '2'],
        // 受理标准
        standardList: configData.standardList,
        defaultProps: {
          children: 'children',
          label: 'label'
        },
      }
    },
    methods: {
      handleClick( e ){

      },
      // 隐藏显示预览页面
      hideBook( type ){
        this.isShowBook = !this.isShowBook;
        this.rightWidth = type == 1? '800px': '98%';
        if (type == 1) {
          this.configData.option2.column.forEach(ele => {
            ele.span = 24
          });
          this.leftSpan = 6;
          this.rightSpan = 18;
        } else {
          this.configData.option2.column.forEach(ele => {
            ele.span = 8
          });
          this.leftSpan = 3;
          this.rightSpan = 21;
        }
      },
      openDrawer(){
        this.isShowDrawer = !this.isShowDrawer;
      },
      emptytChange(){

      },
      submit(){
        this.isNext = true;
        this.hideBook();
      },
      // 加载标红的字段
      alertMessage( form, fieldList ){
        fieldList.forEach(ele => {
          this.$refs[ form ].getPropRef(ele).$parent.validateState = 'error';
          this.$refs[ form ].getPropRef(ele).$parent.validateMessage = '请您核对以上信息';
        });
        this.$refs.form0.getPropRef('name2').$parent.validateState = 'error';
        this.$refs.form0.getPropRef('name4').$parent.validateState = 'error';
        this.$refs.form0.getPropRef('name4').$parent.validateMessage = '请您核对以上信息';
        this.$refs.form0.getPropRef('name2').$parent.validateMessage = '请您核对以上信息';
      },
      // 案卡书点击
      chooseTree( e ){
        this.title = e.label;
      },
      // 点击树节点跳转
      nodeClick( e ){
        this.openDrawer();
        let toId = '#' + (configData.nodeId[ e.id ] || 'img6');
        let boxDom = document.getElementById('box');
        boxDom.querySelector(toId).scrollIntoView(true);
      },
      // 切换目录类型
      typeHandleClick( e ){
        let toId = '#' + configData.nodeId[ 9 ] || 'img6';
        let boxDom = document.getElementById('box');
        boxDom.querySelector(toId).scrollIntoView(true);
      },
    },
    mounted(){
      let errorField = ['name2', 'name4',];
      // setTimeout(() => this.alertMessage('form0', errorField), 2000)
    }
  }
</script>

<style>
  .casesCard {
    /*background-color: #1B5E9C;*/
    padding: 10px;
  }

  .header-box {
    display: flex;
    line-height: 42px;
    width: 99.5%;
    font-size: 16px;
    /*color: #1B5E9C;*/
    font-weight: 800;
    border-radius: 6px 6px 0 0;
    background-color: #f3f2f2;
  }

  .left-text {
    border-radius: 6px;
    writing-mode: vertical-lr;
    width: 40px;
    background-color: #fff;
    margin-right: 10px;
    line-height: 40px;
    padding: 20px 0;
    color: #1B5E9C;
    font-weight: 800;
  }

  .el-input__suffix-inner {
    color: #67c23a;
    font-size: 24px !important;
  }

  .icon {
    font-size: 40px !important;
  }

  .el-col {
    margin-bottom: 0 !important;
  }

  .text-tag {
    border-bottom: 1px solid #1B5E9C;
    padding: 10px 0;
    cursor: pointer;
  }

  .el-form--label-top .el-form-item__label {
    padding: 0 !important;
    font-size: 10px !important;
    line-height: 22px !important;
  }

  .el-collapse-item__header {
    font-weight: 800;
  }

  .el-card__header {
    /*padding: 10px !important;*/
    /*color: #1B5E9C;*/
    font-weight: 800;
  }

  .el-checkbox {
    display: block !important;
  }

  .el-card__body {
    padding: 12px 16px !important;
  }

  .el-collapse {
    border: none !important;
  }

  .el-collapse-item__arrow {
    margin: 0 auto 0 8px;
    color: #706E6B;
  }

  .el-collapse-item__header {
    height: 40px !important;
    padding: 0 8px;
    border-radius: 6px;
    border: none !important;
    margin-bottom: 10px;
    background-color: #f3f2f2;
  }

  .read-box {
    background-color: #fff;
    border-radius: 0 0 6px 6px;
    /*height: 100%;*/
    overflow-y: auto;
  }

  .read {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .logs {
    width: 350px;
    height: 845px;
    overflow-y: auto;
    background-color: #fff;
    padding: 10px;
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    border-radius: 6px;
    -webkit-box-shadow: 3px 3px 7px 1px rgba(0, 0, 0, 0.3);
    box-shadow: 3px 3px 7px 1px rgba(0, 0, 0, 0.3);
  }

  .toods-read {
    width: 35px;
    height: 240px;
    padding: 5px;
    background-color: #1b5e9c;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 13px;
    top: 35%;
  }

  .toods-icon {
    margin-top: 10px;
    color: #fff;
    font-size: 24px;
  }

  .image-box {
    height: 400px;
    width: 400px;
    margin-top: 10px;
    background-color: #f00;
  }

  .el-tree-node {
    /*padding: 5px 0 !important;*/
  }

  .tree-node {
    padding-left: 10px;
  }

  .custom-tree-node > p {
    /*display: inline-block;*/
  }

  .custom-tree-node {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
</style>

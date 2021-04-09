<template>
  <div class="casesCard">
    <el-container style="height: 800px;background-color: #eee;position: relative;">
      <!-- 折叠阅卷 -->
      <transition name="custom-classes-transition"
                  enter-active-class="animated bounceInUp">
        <div class="left-text" v-show="!isShowBook">
          <span @click="hideBook(1)" class="text-tag">电 子 卷 宗</span>
        </div>
      </transition>
      <!-- 左侧预览 -->
      <transition name="custom-classes-transition"
                  enter-active-class="animated bounceInLeft">
        <el-container v-show="isShowBook" style="position: relative;justify-content: center;">
          <div class="left-text" v-if="!isShowBook">
            <span class="text-tag">电 子 卷 宗</span>
          </div>
          <div style="display: flex;flex-direction: column;height: 100%;width: 100%;">
            <el-header class="header-box">
              <span>电子卷宗</span>
              <span style="flex: 1"></span>
              <span @click="hideBook"><i style="font-size: 16px;" class="el-icon-d-arrow-left"></i></span>
            </el-header>
            <el-main style="flex: 1">
              <div class="read-box" id="box">
                <!-- 卷宗预览 -->
                <div class="read" @click="isShowDrawer = false">
                  <img src="../../../../public/img/demo.png" id="img1"
                       height="auto" width="850px" style="margin-top: 10px;"/>
                  <img src="../../../../public/img/demo.png" id="img2"
                       height="auto" width="850px" style="margin-top: 10px;"/>
                  <img src="../../../../public/img/demo.png" id="img3"
                       height="auto" width="850px" style="margin-top: 10px;"/>
                  <img src="../../../../public/img/demo.png" id="img4"
                       height="auto" width="850px" style="margin-top: 10px;"/>
                  <img src="../../../../public/img/demo.png" id="img5"
                       height="auto" width="850px" style="margin-top: 10px;"/>
                  <img src="../../../../public/img/demo.png" id="img6"
                       height="auto" width="850px" style="margin-top: 10px;"/>
                </div>
                <!-- 阅卷工具条 -->
                <div class="toods-read" draggable>
                  <el-tooltip class="item" effect="dark" content="目录" placement="left">
                    <i class="toods-icon el-icon-s-management" @click="openDrawer"></i>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="放大" placement="left">
                    <i class="toods-icon el-icon-zoom-in"></i>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="缩小" placement="left">
                    <i class="toods-icon el-icon-zoom-out"></i>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="右旋转" placement="left">
                    <i class="toods-icon el-icon-refresh-right"></i>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="左旋转" placement="left">
                    <i class="toods-icon el-icon-refresh-left"></i>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="添加书签" placement="left">
                    <i class="toods-icon el-icon-collection-tag"></i>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="批注" placement="left">
                    <i class="toods-icon el-icon-edit-outline"></i>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="回到顶部" placement="left">
                    <i class="toods-icon el-icon-upload2"></i>
                  </el-tooltip>
                </div>
                <!-- 左侧卷宗目录 -->
                <transition name="custom-classes-transition"
                            enter-active-class="animated bounceInLeft"
                            leave-active-class="animated bounceOutLeft">
                  <div class="logs" v-show="isShowDrawer">
                    <cataLog @nodeClick="nodeClick" @typeHandleClick="typeHandleClick"/>
                  </div>
                </transition>
              </div>
            </el-main>
          </div>
        </el-container>
      </transition>
      <!-- 右侧表单 -->
      <transition name="custom-classes-transition"
                  enter-active-class="animated bounceInUp">
      </transition>
      <el-aside :width="rightWidth" style="margin-right: 5px;background-color: #fff;padding: 10px;">
        <el-card v-if="!isNext" class="box-card">
          <div slot="header" class="clearfix">
            <span>提取受理信息</span>
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
                <avue-form ref="form0" v-model="form1"
                           :option="configData.option1"
                           :status-icon="true"
                           @reset-change="emptytChange"
                           @submit="submit">
                </avue-form>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-card>
        <!-- 下一步案卡 -->
        <el-card v-if="isNext" class="box-card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="案卡" name="1">
              <el-row>
                <el-col :span="6">
                  <el-tree :data="configData.cardLogData"
                           @node-click="chooseTree"
                           node-key="id"
                           :default-expanded-keys="[2, 3]"
                           :props="defaultProps">
                  </el-tree>
                </el-col>
                <el-col :span="18">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>{{ title }}</span>
                    </div>
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
            <el-tab-pane label="在办文书" name="2">在办文书</el-tab-pane>
          </el-tabs>
        </el-card>
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
        title: '审查起诉案件信息',
        activeName: '1',
        activeCard: '10',
        // 右侧表单宽度
        rightWidth: '800px',
        isShowBook: true,
        // 当前是否显示下一步的内容
        isNext: false,
        isShowDrawer: false,
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
        this.rightWidth = type == 1? '800px': '100%';
        if (type == 1) {
          this.configData.option2.column.forEach(ele => {
            ele.span = 24
          })
        } else {
          this.configData.option2.column.forEach(ele => {
            ele.span = 12
          })
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
      alertMessage() {
        console.log(this.$refs.form0.getPropRef('name').$parent);
        this.$refs.form0.getPropRef('name').$parent.validateState = 'error';
        this.$refs.form0.getPropRef('name').$parent.validateMessage = '请您核对以上信息';
      },
      // 案卡书点击
      chooseTree( e ){
        this.title = e.label;
      },
      // 点击树节点跳转
      nodeClick( e ){
        if (e.label == "葛某某危险驾驶案-一审公诉案件（共14页）") {
          this.isHideBaseInfo = true;
        } else {
          this.isHideBaseInfo = false;
        }
        let toId = '#' + configData.nodeId[ e.id ] || 'img6';
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
      setTimeout(() => this.alertMessage(), 2000)
    }
  }
</script>

<style>
  .casesCard {
    background-color: #1B5E9C;
    padding: 10px;
  }

  .header-box {
    display: flex;
    line-height: 60px;
    font-size: 16px;
    color: #1B5E9C;
    font-weight: 800;
    background-color: #fff;
    border-right: 5px solid #1B5E9C;
  }

  .left-text {
    writing-mode: vertical-lr;
    width: 30px;
    background-color: #fff;
    margin-right: 5px;
    line-height: 30px;
    padding: 20px 0;
    color: #1B5E9C;
    font-weight: 800;
  }

  .el-col {
    margin-bottom: 0 !important;
  }

  .text-tag {
    border-bottom: 1px solid #1B5E9C;
    padding: 10px 0;
    cursor: pointer;
  }

  .el-collapse-item__header {
    font-weight: 800;
  }

  .el-card__header {
    padding: 5px !important;
    color: #1B5E9C;
    font-weight: 800;
  }

  .el-checkbox {
    display: block !important;
  }

  .el-collapse-item__header {
    height: 40px !important;
  }

  .read-box {
    background-color: #eee;
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
    height: 780px;
    overflow-y: auto;
    background-color: #fff;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    -webkit-box-shadow: 3px 3px 7px 1px rgba(0, 0, 0, 0.3);
    box-shadow: 3px 3px 7px 1px rgba(0, 0, 0, 0.3);
  }

  .toods-read {
    width: 35px;
    height: 270px;
    padding: 5px;
    background-color: #1b5e9c;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
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

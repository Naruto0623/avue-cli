<template>
  <div class="casesCard">
    <el-container style="height: 800px;background-color: #eee;position: relative;">
      <!-- 左侧预览 -->
      <el-container style="background-color: #fff;position: relative;">
        <!--<el-header style="text-align: center; font-size: 12px;background-color: #515A6E">
          <span>切换</span>
        </el-header>-->
        <el-main>
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
      </el-container>
      <!-- 右侧表单 -->
      <el-aside width="800px" style="margin-right: 5px;background-color: #fff;padding: 10px;">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>提取受理信息</span>
          </div>
          <div>
            <el-collapse v-model="activeNames">
              <el-collapse-item name="1" title="受理标准">
                <el-tree
                  :data="standardList"
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
                <avue-form ref="form" v-model="form1" :option="option1" @reset-change="emptytChange" @submit="submit"></avue-form>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-card>
      </el-aside>
      <!--<div style="position: absolute;top: 10px;height: 200px;width: 40px;background-color: #f00">
        测试
      </div>-->
    </el-container>
    <!-- 左侧目录折叠面板 -->
    <!--<el-drawer title="电子卷宗目录"
               direction="ltr"
               :modal="false"
               :append-to-body="true"
               :visible.sync="isShowDrawer">
      <span>智能编目</span>
    </el-drawer>-->
  </div>
</template>

<script>
  import cataLog from '@/components/cataLog/cataLog.vue'
  import configData from './casesCardConfig'

  export default {
    name: "casesCard",
    components: {
      cataLog
    },
    data(){
      return {
        isShowDrawer: false,
        form1: {},
        option1: configData.option1,
        option2: configData.option2,
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
      openDrawer(){
        this.isShowDrawer = !this.isShowDrawer;
      },
      emptytChange(){

      },
      submit(){

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
    }
  }
</script>

<style>
  .casesCard {
    background-color: #1B5E9C;
    padding: 10px;
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

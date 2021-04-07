<template>
  <div class="casesCard">
    <el-container style="height: 800px;background-color: #eee;">
      <!-- 左侧预览 -->
      <el-container style="background-color: #fff;position: relative;">
        <!--<el-header style="text-align: center; font-size: 12px;background-color: #515A6E">
          <span>切换</span>
        </el-header>-->
        <el-main>
          <div class="read-box" id="box">
            <img src="../../../../public/img/demo.jpg" id="img1"
                 height="auto" width="850px" style="margin-top: 10px;"/>
            <img src="../../../../public/img/demo.jpg" id="img2"
                 height="auto" width="850px" style="margin-top: 10px;"/>
            <img src="../../../../public/img/demo.jpg" id="img3"
                 height="auto" width="850px" style="margin-top: 10px;"/>
            <img src="../../../../public/img/demo.jpg" id="img4"
                 height="auto" width="850px" style="margin-top: 10px;"/>
            <img src="../../../../public/img/demo.jpg" id="img5"
                 height="auto" width="850px" style="margin-top: 10px;"/>
            <img src="../../../../public/img/demo.jpg" id="img6"
                 height="auto" width="850px" style="margin-top: 10px;"/>
            <div class="toods">
              <i class="toods-icon el-icon-zoom-in"></i>
              <i class="toods-icon el-icon-zoom-out"></i>
              <i class="toods-icon el-icon-refresh-right"></i>
              <i class="toods-icon el-icon-refresh-left"></i>
              <i class="toods-icon el-icon-collection-tag"></i>
              <i class="toods-icon el-icon-edit-outline"></i>
              <i class="toods-icon el-icon-upload2"></i>
            </div>
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
              <el-collapse-item name="2" title="待确认信息">
                <avue-form ref="form" v-model="form1" :option="option2" @reset-change="emptytChange" @submit="submit"></avue-form>
              </el-collapse-item>
              <el-collapse-item name="3" title="一审公诉（刑检）受理信息">
                <avue-form ref="form" v-model="form1" :option="option1" @reset-change="emptytChange" @submit="submit"></avue-form>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
  import configData from './casesCardConfig'

  export default {
    name: "casesCard",
    data(){
      return {
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
      emptytChange(){

      },
      submit(){

      },
    }
  }
</script>

<style>
  .casesCard {
    background-color: #fff;
    padding: 10px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .toods {
    width: 35px;
    height: 250px;
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

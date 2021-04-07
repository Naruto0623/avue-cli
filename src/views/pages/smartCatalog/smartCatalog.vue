<template>
  <div class="smartCatalog">
    <!--<el-button type="primary" size="small" @click="openUpload">
      <i class="el-icon-upload"></i>卷宗上传
    </el-button>
    <el-button type="primary" size="small" @click="openUpload">
      <i class="el-icon-upload"></i>案件卷宗接收
    </el-button>-->
    <el-container style="height: 800px;background-color: #eee;">
      <!-- 左侧目录 -->
      <el-aside width="400px" style="margin-right: 5px;background-color: #fff;padding: 10px;">
        <el-tabs @tab-click="handleClick" value="目录">
          <el-tab-pane label="目录" name="目录" key="目录">
            <el-input v-model="filterText"
                      style="margin-bottom: 10px;"
                      placeholder="输入关键字进行过滤">
            </el-input>
            <el-tabs v-model="activeName" @tab-click="typeHandleClick" v-if="isShowTree">
              <template v-for="item in configData.tabData">
                <el-tab-pane :label="item" :name="item" :key="item">
                  <el-tree :key="item"
                           draggable
                           @node-click="nodeClick"
                           class="filter-tree"
                           :data="treeData"
                           :props="defaultProps"
                           highlight-current
                           :filter-node-method="filterNode"
                           :render-content="renderContent"
                           :ref="item">
                  </el-tree>
                </el-tab-pane>
              </template>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane label="书签" name="书签" key="书签">

          </el-tab-pane>
        </el-tabs>
      </el-aside>
      <!-- 右侧内容 -->
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
    </el-container>
    <!-- 上传模态框 -->
    <el-dialog
      title="卷宗上传"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="() => dialogVisible = true">
      <div style="text-align: center">
        <el-switch v-model="isOpenError"
                   active-color="#13ce66"
                   inactive-color="#ff4949">
        </el-switch>
        <el-upload class="upload-demo" :auto-upload="false"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   drag multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">请选择图片、PDF或word进行上传</div>
        </el-upload>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit" v-loading.fullscreen.lock="fullscreenLoading">自动编目</el-button>
      </div>
    </el-dialog>
    <!-- 上传报告 -->
    <el-dialog
      title="错误报告"
      :visible.sync="errDialogVisible"
      width="55%"
      :before-close="() => errDialogVisible = true">
      <div style="text-align: center">
        <el-table
          :data="configData.errTableData"
          style="width: 100%">
          <template v-for="item in configData.columnData">
            <el-table-column :prop="item.prop"
                             :label="item.label">
            </el-table-column>
          </template>
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="errDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="errOk">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import configData from './smartCatalogConfig'

  export default {
    name: "smartCatalog",
    data(){
      return {
        configData,
        // 是否开启错误流程
        isOpenError: true,
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        filterText: '',
        activeName: '全部',
        dialogVisible: false,
        errDialogVisible: false,
        fullscreenLoading: false,
        // 是否展示树
        isShowTree: true,
        // 是否隐藏基本信息
        isHideBaseInfo: true,
      }
    },
    computed: {
      treeData(){
        return configData.treeData[ this.activeName ]
      }
    },
    watch: {
      filterText( val ){
        this.$refs[ this.activeName ][ 0 ].filter(val)
      }
    },
    methods: {
      filterNode( value, data ){
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleClick( e ){

      },
      typeHandleClick(e){
        let toId = '#' + configData.nodeId[ 9 ] || 'img6';
        let boxDom = document.getElementById('box');
        boxDom.querySelector(toId).scrollIntoView(true);
      },
      openUpload(){
        this.dialogVisible = true;
      },
      errOk(){
        this.isShowTree = true;
        this.errDialogVisible = false
      },
      // 模态框确认
      submit(){
        this.dialogVisible = false;
        this.openFullScreen();
      },
      // 自动编目loading
      openFullScreen(){
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
          this.uploadAfter();
        }, 3000);
      },
      // 调用OCR识别后
      uploadAfter(){
        if (this.isOpenError) {
          return this.isShowTree = true;
        } else {
          this.errDialogVisible = true;
          return this.isShowTree = false;
        }
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
      renderContent( h, { node, data, store } ){
        return (
          < div
      class
        = "custom-tree-node" >
          < p >
          < i
      class
        = { node.data.icon || 'el-icon-document' }
        style = { node.data.style } > < /i>
          < /p>
          < p
      class
        = "tree-node" >
          { node.data.label }
          < /p>
          < p
        style = "flex: 1" >

          < /p>
        {
          !node.data.isTitle && < p >
          { node.data.indexNum }
          页
          < /p>
        }
      <
        /div>

      )
      }
    },
  }
</script>

<style>
  .smartCatalog {
    background-color: #fff;
    padding: 10px;
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
    height: 350px;
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

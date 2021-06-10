<template>
  <div style="padding: 6px;display: flex;flex-direction: row">
    <!-- 原文 -->
    <div style="width: 45%;position: relative;overflow-y: auto;height: 860px;">
      <div class="pane" ref="scrollLeft">
        <div class="pane-title">
          <p>原文</p>
          <p>
            <i class="el-icon-full-screen" style="margin-right: 10px;"></i>
            <i class="el-icon-s-fold" @click="showFold(1)"></i>
          </p>
        </div>
        <div v-show="isShowBook" style="margin-right: 10px;position: absolute;top: 15%">
          <transition name="custom-classes-transition"
                      enter-active-class="animated bounceInLeft"
                      leave-active-class="animated bounceOutLeft">
            <div class="book-logs" v-show="isShowDrawer">
              <cataLog @nodeClick="nodeClick" @typeHandleClick="typeHandleClick"/>
            </div>
          </transition>
        </div>
        <div class="read-box">
          <!-- 卷宗预览 -->
          <div class="read" @click="isShowDrawer = false">
            <img src="../../../../public/img/起诉意见书/起诉意见书demo_1.jpg" height="auto" width="100%"/>
            <img src="../../../../public/img/起诉意见书/起诉意见书demo_2.jpg" height="auto" width="100%"/>
            <img src="../../../../public/img/起诉意见书/起诉意见书demo_3.jpg" height="auto" width="100%"/>
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
      </div>
    </div>
    <div style="width: 55%;position: relative;overflow-y: auto;height: 860px;margin-left: 8px;">
      <div class="pane">
        <div class="pane-title">
          <div>在办文书</div>
        </div>
        <div style="padding: 10px;position: relative;">
          <div style="position: absolute;top: 5px;right: 0;">
            <el-button type="primary" size="small">保存</el-button>
          </div>
          <el-tabs v-model="activeName" @tab-remove="tabRemove">
            <el-tab-pane label="文书列表" name="first">
              <el-row v-for="item in bookList" :key="item.title">
                <el-col :span="22" style="line-height: 2em;cursor: pointer;">
                  <span style="border-bottom:1px dashed #409EFF;color: #409EFF">{{ item.title }}</span>{{ item.no }}
                </el-col>
                <el-col :span="2">
                  <el-button size="mini" type="primary" @click="addBook(item)">
                    <i class="el-icon-edit"></i>
                  </el-button>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="已入卷" name="third">
              <el-row v-for="item in bookList2" :key="item.title">
                <el-col :span="22" style="line-height: 2em;cursor: pointer;">
                  <span style="border-bottom:1px dashed #409EFF;color: #409EFF">{{ item.title }}</span>{{ item.no }}
                </el-col>
                <!--<el-col :span="2" @click="addBook(item)">
                  <el-button size="mini" type="primary" @click.native="addBook(item)">
                    <i class="el-icon-edit" @click="tabsList.push(item.title)"></i>
                  </el-button>
                </el-col>-->
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="待入卷" name="tees">
              <el-row v-for="item in bookList1" :key="item.title">
                <el-col :span="22" style="line-height: 2em;cursor: pointer;">
                  <span style="border-bottom:1px dashed #409EFF;color: #409EFF">{{ item.title }}</span>{{ item.no }}
                </el-col>
                <el-col :span="2">
                  <el-button size="mini" type="primary" @click="addBook(item)">
                    <i class="el-icon-edit"></i>
                  </el-button>
                </el-col>
                <!--<el-col :span="2" @click="addBook(item)">
                  <el-button size="mini" type="primary" @click.native="addBook(item)">
                    <i class="el-icon-edit" @click="tabsList.push(item.title)"></i>
                  </el-button>
                </el-col>-->
              </el-row>
            </el-tab-pane>
            <el-tab-pane closable
                         :key="item"
                         v-for="item in tabsList"
                         :label="item"
                         :name="item">
              <img src="../../../../public/img/makebook.jpg" height="1017" width="1009"/>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cataLog from '@/components/cataLog/cataLog.vue'

  export default {
    name: "documentMaking",
    components: {
      cataLog
    },
    data(){
      return {
        tabsList: ['起诉书（自然人）'],
        activeName: '起诉书（自然人）',
        isShowBook: true,
        isShowDrawer: true,
        bookList: [
          // {
          //   title: '起诉书（自然人）',
          //   no: '10000000492643',
          // },
          // {
          //   title: '公诉案件审查报告（普通版）',
          //   no: '1000000030098',
          // },
          // {
          //   title: 'XXX案审查报告（适用捕诉一体案件）',
          //   no: '1000000040032',
          // },
          {
            title: 'XXX案件审查报告（适用速裁程序/认罪简易程序案件）',
            no: '1000000030073',
          },
          {
            title: 'XXX案件审查报告（适用非羁押直诉案件）',
            no: '1000000030643',
          },
          {
            title: '公诉案件审查报告（简化版）',
            no: '1000000030643',
          },
        ],
        // 待入卷
        bookList1: [
          {
            title: '起诉书（自然人）',
            no: '10000000492643',
          },
        ],
        // 已入卷
        bookList2: [
          // {
          //   title: '公诉案件审查报告（普通版）',
          //   no: '1000000030098',
          // },
          {
            title: '张三非法吸收公众存款案审查报告（适用捕诉一体案件）',
            no: '1000000040032',
          },
          // {
          //   title: '张三非法吸收公众存款案件审查报告（适用速裁程序/认罪简易程序案件）',
          //   no: '1000000030073',
          // },
          // {
          //   title: '张三非法吸收公众存款案件审查报告（适用非羁押直诉案件）',
          //   no: '1000000030643',
          // },
          // {
          //   title: '公诉案件审查报告（简化版）',
          //   no: '1000000030643',
          // },
        ],
      }
    },
    methods: {
      tabRemove( item ){
        this.tabsList = this.tabsList.filter(ele => ele != item);
        this.activeName = 'first';
      },
      addBook( item ){
        this.tabsList.push(item.title);
        this.activeName = item.title;
      },
      openDrawer(){
        this.isShowDrawer = !this.isShowDrawer;
      },
      nodeClick(){

      },
      typeHandleClick(){

      },
    }
  }
</script>

<style>
  .theme-primary {
    width: 800px !important;
    height: 800px !important;
  }

  #jsmind_container {
    width: 800px;
    height: 800px;
    border: solid 1px #ccc;
    /*background:#f4f4f4;*/
    background: #f4f4f4;
  }

  .light {
    border: 1px solid #E6A23C;
    border-radius: 6px;
    font-weight: 900;
    /*color: yellow !important;*/
    /*background-color: #909399;*/
  }

  .el-drawer__body {
    overflow-y: auto !important;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .box-card {
    margin-bottom: 6px;
  }

  li {
    list-style: none !important;
  }

  .green {
    color: #67C23A !important;
    margin-right: 10px;
  }

  .blue {
    color: #409EFF !important;
    margin-right: 10px;
  }

  .yellow {
    color: #E6A23C !important;
    margin-right: 10px;
  }

  .black {
    color: #909399 !important;
    margin-right: 10px;
  }

  #menu {
    display: none;
    width: 125px; /*设置为0 隐藏自定义菜单*/
    /*height: 125px;*/
    overflow: hidden; /*隐藏溢出的元素*/
    box-shadow: 0 1px 1px #888, 1px 0 1px #ccc;
    position: absolute; /*自定义菜单相对与body元素进行定位*/
    z-index: 500;
    background-color: #B0C4DF;
    border-radius: 6px;
    cursor: pointer;
    padding: 5px 5px 5px 10px;
    line-height: 2em;
    min-height: 30px;
    min-width: 50px;
  }

  .menu {
    line-height: 2em;
    padding: 0 10px;
    border-bottom: 1px solid #fff;
    cursor: pointer;
  }

  .bluetext {
    color: #409EFF;
  }

  .width100 {
    width: 100% !important;
  }

  .tagging {
    padding: 10px;
    display: flex;
    height: 100%;
  }

  .box-tagging {
    flex: 1;
    height: 100%;
    border-radius: 6px;
    display: flex;
    /*flex-direction: column;*/
  }

  .toods {
    width: 30px;
    height: 100%;
    margin: 0 1px 0 6px;
    background-color: #fff;
    border-radius: 6px;
    text-align: center;
    padding: 0 5px;
  }

  .fold {
    width: 30px;
    height: 100%;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 6px;
    text-align: center;
    padding: 0 10px;
  }

  .left-toods {
    padding: 20px 0;
    border-bottom: 1px solid #8a979e;
    cursor: pointer;
  }

  .content {
    flex: 1;
  }

  .pane {
    background-color: #fff;
    /*margin-right: 10px;*/
    border-radius: 6px;
    height: 100%;
    overflow-y: auto;
  }

  .pane3 {
    margin-right: 0;
    /*width: 40%;*/
  }

  .book-logs {
    width: 250px;
    height: 650px;
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

  .pane-title {
    background-color: #F3F2F2;
    line-height: 2em;
    font-weight: 600;
    padding: 0 10px;
    overflow: hidden;
    text-align: left;
  }

  .pane-title p:first-child {
    float: left;
  }

  .pane-title p:last-child {
    float: right;
  }

  .c-my-node {
    background-position: 50%;
    background-size: 100%;
    border: 2px solid #ff8c00;
    height: 80px;
    width: 80px;
    border-radius: 40px;
  }

  .c-node-name {
    width: 160px;
    margin-left: -40px;
    text-align: center;
    line-height: 80px;
    /*margin-top: 85px;*/
  }

  .search-icon {
    position: absolute;
    z-index: 3;
    top: 6px;
    right: 10px;
    font-size: 22px;
  }

  .el-button--primary {
    background-color: #1b5297 !important;
    border-color: #1b5297 !important;
  }
</style>

<template>
  <div class="tagging">
    <div class="box-tagging">
      <div style="display: flex;flex-direction: row;">
        <!-- 原文 -->
        <div v-if="!isShow1" style="width: 35%;position: relative;">
          <div class="pane" ref="scrollLeft" @scroll="sysHandleScroll">
            <div class="pane-title">
              <p>原文</p>
              <p>
                <i class="el-icon-full-screen" style="margin-right: 10px;"></i>
                <i class="el-icon-s-fold" @click="showFold(1)"></i>
              </p>
            </div>
            <div v-show="isShowBook" style="margin-right: 10px;position: absolute;top: 10%">
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
        <!-- 工具栏 -->
        <div class="toods">
          <!-- 业务类型 -->
          <div style="border-bottom: 1px solid #666;">
            <div style="padding-top: 15px;" v-for="(item,index) in configData.iconList1" :key="item.name">
            <span :class="{'bluetext':item.active}" @click="iconClick(item)">
              <el-tooltip class="item" effect="dark" :content="item.title" placement="right">
                <span>
                  <i :class="item.name" @click="opendialogVisible1(item, index,1)"></i>
                </span>
              </el-tooltip>
            </span>
            </div>
          </div>
          <!-- 关系类 -->
          <div style="border-bottom: 1px solid #666;">
            <div style="padding-top: 15px" v-for="(item,index) in configData.iconList2" :key="item.name">
            <span :class="{'bluetext':item.active}" @click="iconClick(item)">
              <el-tooltip class="item" effect="dark" :content="item.title" placement="right">
                <span>
                  <i :class="item.name" @click="opendialogVisible1(item, index,2)"></i>
                </span>
              </el-tooltip>
            </span>
            </div>
          </div>
          <!-- 工具类 -->
          <div>
            <div style="padding-top: 15px" v-for="(item,index) in configData.iconList3" :key="item.name">
            <span :class="{'bluetext':item.active}" @click="iconClick(item)">
              <el-tooltip class="item" effect="dark" :content="item.title" placement="right">
                <span>
                  <i :class="item.name" @click="opendialogVisible1(item, index,3)"></i>
                </span>
              </el-tooltip>
            </span>
            </div>
          </div>
          <p v-if="isShow1" @click="showFold(1)" class="left-toods">原卷宗</p>
          <p v-if="isShow2" @click="showFold(2)" class="left-toods">识别卷宗</p>
        </div>
        <!-- 识别后 -->
        <div class="pane" style="width: 35%;position: relative;overflow-y: auto;background-color: #fff;" ref="scrollCenter">
          <div style="border-radius: 6px 6px 0 0;" class="pane-title">
            <p>识别</p>
            <p>
              <i class="el-icon-full-screen" @click="fullScreen" style="margin-right: 10px;"></i>
              <i class="el-icon-s-fold" @click="showFold(2)"></i>
            </p>
          </div>
          <div style="overflow-y: auto;">
            <div style="margin-top: -8px;">
              <!--标注信息-->
              <div v-if="showanka == 1">
                <img src="../../../../public/img/起诉意见书/起诉意见书编辑.jpg" height="auto" width="100%"/>
              </div>
              <!--案卡-->
              <div v-if="showanka == 2">
                <img src="../../../../public/img/起诉意见书/案卡.jpg" height="auto" width="100%"/>
              </div>
              <!--案卡1-->
              <div v-if="showanka == 3">
                <img src="../../../../public/img/起诉意见书/案卡2.jpg" height="auto" width="100%"/>
              </div>
              <!-- 无标注 -->
              <div v-if="showanka == 4">
                <img src="../../../../public/img/起诉意见书/起诉意见书无.jpg" height="auto" width="100%"/>
              </div>
              <!-- 删除关系 -->
              <div v-if="showanka == 5">
                <img src="../../../../public/img/起诉意见书/起诉意见书删除线.jpg" height="auto" width="100%"/>
              </div>
              <!-- 删除单个标注 -->
              <div v-if="showanka == 6">
                <img src="../../../../public/img/起诉意见书/删除单个标注.jpg" height="auto" width="100%"/>
              </div>
              <!-- 修改关系 -->
              <div v-if="showanka == 7">
                <img src="../../../../public/img/起诉意见书/修改关系.jpg" height="auto" width="100%"/>
              </div>
              <img src="../../../../public/img/起诉意见书/起诉意见书编辑2.jpg" height="auto" width="100%"/>
              <img src="../../../../public/img/起诉意见书/起诉意见书编辑3.jpg" height="auto" width="100%"/>
            </div>
            <!--<OCRContent v-if="isChange" :isShowMan="isShowMan" :isShowDate="isShowDate" @showModal="showModal"/>
            <OCRContentM v-else :isShowMan="isShowMan" :isShowDate="isShowDate" @showModal="showModal"/>-->
          </div>
        </div>
        <!-- 工作区 -->
        <div class="pane3 pane" style="position: relative;width: 27%;margin-left: 6px;">
          <i class="el-icon-full-screen search-icon"></i>
          <div style="position: relative;">
            <!-- 查询 -->
            <span @click="showdialogVisible1" style="position: absolute;right: 0;bottom: 80px;padding: 10px;background-color: #F3F2F2;border-radius: 6px;">
              <i class="el-icon-search log" style="font-size: 26px;"></i>
            </span>
            <el-tabs v-model="tabs3" type="border-card" style="height: 860px;">
              <!--<el-tab-pane label="基本信息" style="height: 100%;overflow: hidden">
                <avue-form ref="form" :option="configData.option0"></avue-form>
              </el-tab-pane>-->
              <el-tab-pane name="A" label="案情标注" style="height: 100%">
                <el-tabs v-model="tabs1">
                  <el-tab-pane value="1" label="标注属性" name="10">
                    <avue-form v-if="isShowCard && markConfigData.column" ref="form" :option="markConfigData">
                      <template slot-scope="scope" slot="color">
                        <div>
                          <el-input placeholder="请选择颜色" @focus="showColorCard" style="position: relative;"></el-input>
                          <span style="position: absolute;top: 30px;left: 0;z-index: 40;" v-if="isShowColorCard">
                          <img src="../../../../public/img/colors.png" @click="isShowColorCard = false" height="100%" width="auto"/>
                        </span>
                          <!--<el-select v-model="colorValue" placeholder="请选择颜色">
                            <el-option
                              v-for="item in configData.colors"
                              :key="item.color"
                              :value="item.title">
                              <span>
                                <img src="../../../../public/img/colors.png" height="100%" width="auto"
                              </span>
                              &lt;!&ndash;<span :style="{'background-color': item.color,width: '30px',height: '30px',float: 'left'}"></span>&ndash;&gt;
                              &lt;!&ndash;<span style="float: right; color: #8492a6; font-size: 13px">{{ item.title }}</span>&ndash;&gt;
                              &lt;!&ndash;<div :style="{'background-color': item.color,width: '100%'}">{{ item.title }}</div>&ndash;&gt;
                            </el-option>
                          </el-select>-->
                        </div>
                      </template>
                      <!--<template slot="menuForm">
                        <el-button type="primary" @click="drawer = false">取消</el-button>
                        <el-button type="primary" @click="saveMark">提 交</el-button>
                      </template>-->
                    </avue-form>
                    <!-- 关系标注 -->
                    <div>
                      <!--<RelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-click="onNodeClick" :on-line-click="onLineClick"/>-->
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="标注列表" name="51">
                    <el-collapse>
                      <el-collapse-item title="人物" name="1">
                        <template v-for="(item,index) in configData.evidenceData['书证']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <!--<el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>-->
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                      <el-collapse-item title="时间" name="2">
                        <template v-for="(item,index) in configData.evidenceData['物证']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                      <el-collapse-item title="地点" name="3">
                        <el-row>
                          <el-divider content-position="left">天津市和平区南山路18号3楼</el-divider>
                          <el-button style="margin-bottom: 10px;"><i class="yellow">犯罪地点</i></el-button>
                          <el-button style="margin-bottom: 10px;"><i class="yellow">设立分部</i></el-button>
                        </el-row>
                        <el-row>
                          <el-divider content-position="left">北京市朝阳区*路**小区**号楼**门**号</el-divider>
                          <el-button style="margin-bottom: 10px;"><i class="yellow">现住址</i></el-button>
                        </el-row>
                        <el-row>
                          <el-divider content-position="left">陕西省西安市碑 林区**巷**楼**单元**层**号</el-divider>
                          <el-button style="margin-bottom: 10px;"><i class="yellow">户籍地</i></el-button>
                        </el-row>
                        <el-row>
                          <el-divider content-position="left">天津市第一看守所</el-divider>
                          <el-button style="margin-bottom: 10px;"><i class="yellow">羁押地址</i></el-button>
                        </el-row>
                      </el-collapse-item>
                      <el-collapse-item title="金额" name="4">
                        <template v-for="(item,index) in configData.evidenceData['被害人陈述']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                      <el-collapse-item title="疑问" name="4">
                        <template v-for="(item,index) in configData.evidenceData['被害人陈述']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                    </el-collapse>
                  </el-tab-pane>
                  <el-tab-pane label="案情分析图" name="12">
                    <!--<div id="jsmind_container"></div>-->
                    <!--<img src="../../../../public/img/mind.png" height="435" width="430"/>-->
                    <!--<charts></charts>-->
                    <img src="../../../../public/img/关系图.jpg" height="auto" width="100%"/>
                  </el-tab-pane>
                  <!--<el-tab-pane label="人物关联分析图" name="2">
                    <div id="topo" style="width: 600px;height: 700px;">
                      <RelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-click="onNodeClick" :on-line-click="onLineClick"/>
                    </div>
                  </el-tab-pane>-->
                  <!--<el-tab-pane label="犯罪嫌疑人" name="1">
                    <el-tabs type="border-card">
                      <el-tab-pane label="张三">
                        <el-divider content-position="left">涉案金额</el-divider>
                        <avue-crud :option="configData.table3"
                                   simplePage
                                   :data="configData.table3data">
                        </avue-crud>
                        <el-divider><b>吸收：6500000元<br/>退赔：3510000元</b></el-divider>
                        &lt;!&ndash;<avue-form ref="form" :option="optionMan1"></avue-form>&ndash;&gt;
                        <el-divider content-position="left">事件轨迹</el-divider>
                        <div style="padding: 10px;">
                          <el-timeline-item
                            v-for="(activity, index) in configData.activitiesMan"
                            :key="index"
                            :icon="activity.icon"
                            :type="activity.type"
                            :color="activity.color"
                            :size="activity.size"
                            :timestamp="activity.timestamp">
                            {{activity.content}}
                          </el-timeline-item>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="张三丰">
                        <el-divider content-position="left">基本信息</el-divider>
                        <avue-form ref="form" :option="configData.optionMan2"></avue-form>
                        <el-divider content-position="left">大事记</el-divider>
                        <div style="padding: 10px;">
                          <el-timeline-item
                            v-for="(activity, index) in configData.activitiesMan"
                            :key="index"
                            :icon="activity.icon"
                            :type="activity.type"
                            :color="activity.color"
                            :size="activity.size"
                            :timestamp="activity.timestamp">
                            {{activity.content}}
                          </el-timeline-item>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
                  </el-tab-pane>-->
                  <el-tab-pane label="涉案金额" name="50">
                    <el-collapse>
                      <el-collapse-item title="张三（吸收：6500000元-退赔：3510000元）" name="1">
                        <avue-crud :option="configData.table3"
                                   simplePage
                                   :data="configData.table3data">
                        </avue-crud>
                      </el-collapse-item>
                      <el-collapse-item title="张三丰（吸收：3420000元-退赔：1310000元）" name="2">
                        <avue-crud :option="configData.table3"
                                   simplePage
                                   :data="configData.table3data">
                        </avue-crud>
                      </el-collapse-item>
                      <el-collapse-item title="李四（暂无相关标注）" name="3">
                        <!--<avue-crud :option="configData.table3"
                                   simplePage
                                   :data="configData.table3data">
                        </avue-crud>-->
                      </el-collapse-item>
                    </el-collapse>
                    <el-divider><b>合计：9920000元</b></el-divider>
                    <div style="text-align: center;color: #999;font-size: 10px;">
                      以上信息统计来源于截止2021-6-9 17:24:31的标注信息
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="案情时间线" name="3">
                    <el-timeline>
                      <el-timeline-item
                        v-for="(activity, index) in configData.activities1"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :timestamp="activity.content">
                        {{activity.timestamp}}
                      </el-timeline-item>
                      <img src="../../../../public/img/时间线.png" height="427" width="470"/>
                    </el-timeline>
                  </el-tab-pane>
                  <el-tab-pane label="案件时间线" name="4">
                    <el-timeline>
                      <el-timeline-item
                        v-for="(activity, index) in configData.activities1"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :timestamp="activity.content">
                        {{activity.timestamp}}
                      </el-timeline-item>
                    </el-timeline>
                  </el-tab-pane>
                  <el-tab-pane label="证据" name="52">
                    <el-collapse>
                      <el-collapse-item title="书证" name="1">
                        <template v-for="(item,index) in configData.evidenceData['书证']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                      <el-collapse-item title="物证" name="2">
                        <template v-for="(item,index) in configData.evidenceData['物证']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                      <el-collapse-item title="被告人供述和辩解" name="3">
                        <template v-for="(item,index) in configData.evidenceData['被告人供述和辩解']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                      <el-collapse-item title="被害人陈述" name="4">
                        <template v-for="(item,index) in configData.evidenceData['被害人陈述']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                      <el-collapse-item title="证人证言" name="5">
                        <template v-for="(item,index) in configData.evidenceData['证人证言']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                      <el-collapse-item title="鉴定意见" name="6">
                        <template v-for="(item,index) in configData.evidenceData['鉴定意见']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                      <el-collapse-item title="侦查实验等笔录" name="7">
                        <template v-for="(item,index) in configData.evidenceData['侦查实验等笔录']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                      <el-collapse-item title="其他" name="8">
                        <template v-for="(item,index) in configData.evidenceData['其他']">
                          <el-card class="box-card">
                            <div slot="header">
                              <span>{{ item.createDate }}</span>
                              <span>{{ item.userName }}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                              </el-button>
                              <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                <i class="el-icon-edit-outline"></i>
                              </el-button>
                            </div>
                            <div>
                              <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                              {{ item.book }}
                            </div>
                          </el-card>
                        </template>
                      </el-collapse-item>
                    </el-collapse>
                  </el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <!--<el-tab-pane label="关系图谱" style="height: 100%">

              </el-tab-pane>-->
              <!--<el-tab-pane name="E" label="案情分析" style="height: 100%">
                <img src="../../../../public/img/标注.png" height="auto" width="100%"/>
                <div style="padding: 10px;border: 1px solid #6b6b6b;border-radius: 6px" v-if="isShowWord">
                  <p style="border-bottom: 1px solid #6b6b6b;padding-bottom: 10px" contenteditable="true">
                    2019年至2020年，被告人蒋某某在天津市河东区合美国际C座1016房间等地，以牟利为目的，在未取得危险化学品经营
                    许可证的情况下，通过网络联系、发送“闪送”、快递等方式，向夭津市河东区金宝街92号励骏酒店1510房间等地销售一
                    氧化二氮（俗称“笑气”），累计经营数额人民币50余万元。天津市公安局和平分局建国门派出所民警于2020年1月16日将
                    蒋某某查获，并于天津市河东区合美国际C座1016房间内起获其用于销售的一氧化二氮22750支。
                  </p>
                  <div style="font-size: 10px;line-height: 2em">
                    <span style="margin-right: 30px">描述：这是作案经过</span>
                    <span style="margin-right: 30px">标签：案情-作案经过</span>
                    <span style="margin-right: 30px">类型：案情</span>
                    <span style="float: right">
                            <el-button size="mini" type="primary" @click="showModal()" icon="el-icon-edit" circle></el-button>
                            <el-button size="mini" type="danger" @click="isShowWord = false" icon="el-icon-delete" circle></el-button>
                          </span>
                  </div>
                </div>
              </el-tab-pane>-->
              <el-tab-pane name="B" label="案卡" style="height: 100%">
                <el-tabs v-model="activeCard">
                  <el-tab-pane label="基本信息" name="100">
                    <avue-form ref="form" v-model="form1" :option="option2"></avue-form>
                  </el-tab-pane>
                  <el-tab-pane label="涉案情况" name="20">
                    <avue-form ref="form" v-model="form1" :option="configData.option1"></avue-form>
                  </el-tab-pane>
                  <el-tab-pane label="强制措施情况" name="30">
                    <avue-form ref="form" v-model="form1" :option="configData.option1"></avue-form>
                  </el-tab-pane>
                  <el-tab-pane label="留置措施情况" name="40">
                    <avue-form ref="form" v-model="form1" :option="configData.option1"></avue-form>
                  </el-tab-pane>
                  <el-tab-pane label="犯罪嫌疑人/单位" name="50">
                    <avue-form ref="form" v-model="form1" :option="configData.option1"></avue-form>
                  </el-tab-pane>
                  <el-tab-pane label="被害人/单位" name="60">
                    <avue-form ref="form" v-model="form1" :option="configData.option1"></avue-form>
                  </el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane name="C" label="文书制作" style="height: 100%">
                <el-tabs v-model="tabs2" @tab-click="handleClick">
                  <el-tab-pane label="文书列表" name="first">
                    <div v-for="item in firstBookList" :key="item.text" style="display: flex;line-height: 2em">
                      <p>[{{ item.number }}]{{ item.text }}</p>
                      <p style="margin: 0 0 0 auto">
                        <el-button size="mini" type="warning" icon="el-icon-star-off" circle></el-button>
                        <el-button size="mini" @click="toMake" type="primary" icon="el-icon-edit-outline" circle></el-button>
                      </p>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="已入卷" name="second">
                    <div v-for="item in firstBookList" :key="item.text" style="display: flex;line-height: 2em">
                      <p>[{{ item.number }}]{{ item.text }}</p>
                      <p style="margin: 0 0 0 auto">
                        <el-button size="mini" type="primary" icon="el-icon-edit-outline" circle></el-button>
                      </p>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="待入卷" name="4">
                    <div v-for="item in firstBookList" :key="item.text" style="display: flex;line-height: 2em">
                      <p>[{{ item.number }}]{{ item.text }}</p>
                      <p style="margin: 0 0 0 auto">
                        <el-button size="mini" type="warning" icon="el-icon-star-off" circle></el-button>
                        <el-button size="mini" type="primary" icon="el-icon-edit-outline" circle></el-button>
                      </p>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="我的收藏" name="3">
                    <div v-for="item in firstBookList" :key="item.text" style="display: flex;line-height: 2em">
                      <p>[{{ item.number }}]{{ item.text }}</p>
                      <p style="margin: 0 0 0 auto">
                        <el-button size="mini" type="primary" icon="el-icon-edit-outline" circle></el-button>
                      </p>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane name="D" label="历史版本" style="height: 100%">
                <!--<el-timeline>
                  <el-timeline-item
                    v-for="(activity, index) in configData.activities2"
                    :key="index"
                    :icon="activity.icon"
                    :type="activity.type"
                    :color="activity.color"
                    :size="activity.size"
                    :timestamp="activity.timestamp">
                    {{activity.content}}
                  </el-timeline-item>
                </el-timeline>-->
                <el-tabs v-model="tabs5" @tab-click="handleClick">
                  <el-tab-pane label="修改记录" name="first">
                    <el-timeline>
                      <el-timeline-item
                        v-for="(activity, index) in configData.activities3"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :timestamp="activity.timestamp">
                        {{activity.content}}
                      </el-timeline-item>
                    </el-timeline>
                  </el-tab-pane>
                  <el-tab-pane label="标注记录" name="second">
                    <el-timeline>
                      <el-timeline-item
                        v-for="(activity, index) in configData.activities2"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :timestamp="activity.timestamp">
                        {{activity.content}}
                      </el-timeline-item>
                    </el-timeline>
                  </el-tab-pane>
                </el-tabs>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>

      <!--<split-pane class="content" @resize="resize" :min-percent='10' :default-percent='30' split="vertical">
        &lt;!&ndash; 原文 &ndash;&gt;
        <template slot="paneL" v-if="!isShow1">
          <div class="pane1 pane" ref="scroll1" @scroll="sysHandleScroll">
            <div class="pane-title">
              <p>原文</p>
              <p>
                <i class="el-icon-full-screen" style="margin-right: 10px;"></i>
                <i class="el-icon-s-fold" @click="showFold(1)"></i>
              </p>
            </div>
            <div v-show="isShowBook" style="margin-right: 10px;position: absolute;top: 10%">
              <transition name="custom-classes-transition"
                          enter-active-class="animated bounceInLeft"
                          leave-active-class="animated bounceOutLeft">
                <div class="book-logs" v-show="isShowDrawer">
                  <cataLog @nodeClick="nodeClick" @typeHandleClick="typeHandleClick"/>
                </div>
              </transition>
            </div>
            <div class="read-box" id="box">
              &lt;!&ndash; 卷宗预览 &ndash;&gt;
              <div class="read" @click="isShowDrawer = false">
                <img src="../../../../public/img/起诉意见书/起诉意见书demo_1.jpg" height="auto" width="100%"/>
                <img src="../../../../public/img/起诉意见书/起诉意见书demo_2.jpg" height="auto" width="100%"/>
                <img src="../../../../public/img/起诉意见书/起诉意见书demo_3.jpg" height="auto" width="100%"/>
              </div>
              &lt;!&ndash; 阅卷工具条 &ndash;&gt;
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
                &lt;!&ndash;<el-tooltip effect="dark" content="批注" placement="left">
                  <i class="toods-icon el-icon-edit-outline"></i>
                </el-tooltip>&ndash;&gt;
                <el-tooltip effect="dark" content="回到顶部" placement="left">
                  <i class="toods-icon el-icon-upload2"></i>
                </el-tooltip>
              </div>
            </div>
          </div>
        </template>
        &lt;!&ndash; 识别后 &ndash;&gt;
        <template slot="paneR">
          <split-pane @resize="resize" :min-percent='10' split="vertical" id="centerDOm">
            <template slot="paneL" v-if="!isShow2">
              <div class="pane2 pane" ref="scroll2" @mouseup="mouseupText" id="contentText">
                <div style="display: flex;flex-direction: row;">
                  &lt;!&ndash; 工具栏 &ndash;&gt;
                  <div class="toods">
                    <div style="padding-top: 15px" v-for="(item,index) in configData.iconList" :key="item.name">
          <span @click="changeActive(item)" :class="{'bluetext':item.active}">
            <el-tooltip class="item" effect="dark" :content="item.title" placement="right">
              <span>
                <i :class="item.name" @click="opendialogVisible1(item, index)"></i>
              </span>
            </el-tooltip>
          </span>
                    </div>
                    <p v-if="isShow1" @click="showFold(1)" class="left-toods">原卷宗</p>
                    <p v-if="isShow2" @click="showFold(2)" class="left-toods">识别卷宗</p>
                  </div>
                  <div style="width: 100%;">
                    <div class="pane-title">
                      <p>识别</p>
                      <p>
                        <i class="el-icon-full-screen" @click="fullScreen" style="margin-right: 10px;"></i>
                        <i class="el-icon-s-fold" @click="showFold(2)"></i>
                      </p>
                    </div>
                    <div style="padding: 10px">
                      <OCRContent v-if="isChange" :isShowMan="isShowMan" :isShowDate="isShowDate" @showModal="showModal"/>
                      <OCRContentM v-else :isShowMan="isShowMan" :isShowDate="isShowDate" @showModal="showModal"/>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            &lt;!&ndash; 工作区 &ndash;&gt;
            <template slot="paneR">
              <div class="pane3 pane" style="position: relative">
                <i class="el-icon-full-screen search-icon"></i>
                <el-tabs v-model="tabs3" type="border-card" style="height: 100%;">
                  &lt;!&ndash;<el-tab-pane label="基本信息" style="height: 100%;overflow: hidden">
                    <avue-form ref="form" :option="configData.option0"></avue-form>
                  </el-tab-pane>&ndash;&gt;
                  <el-tab-pane name="A" label="案情标注" style="height: 100%">
                    <el-tabs v-model="tabs1">
                      <el-tab-pane label="标注列表" name="10">
                        <div style="margin-bottom: 10px;">
                          <el-input size="mini" @input="searchMark" placeholder="请输标注内容、类型等进行查询" v-model="input3" class="input-with-select">
                            <el-button slot="append" icon="el-icon-search" @input="searchMark()"></el-button>
                          </el-input>
                        </div>
                        <div style="background-color: #eee;padding: 6px;overflow-y: auto;border-radius: 6px;height: 670px;">
                          <draggable>
                            <template v-for="(item,index) in configData.markListData">
                              <el-card class="box-card">
                                <div slot="header">
                                  <span>{{ item.createDate }}</span>
                                  <span>{{ item.userName }}</span>
                                  <el-button style="float: right; padding: 3px 0" type="text">
                                    <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                                  </el-button>
                                  <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                    <i class="el-icon-edit-outline"></i>
                                  </el-button>
                                </div>
                                <div @click="jump(item)">
                                  <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                                  {{ item.book }}
                                </div>
                              </el-card>
                            </template>
                          </draggable>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="人物关联分析图" name="2">
                        <div id="topo" style="width: 600px;height: 700px;">
                          <RelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-click="onNodeClick" :on-line-click="onLineClick"/>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="犯罪嫌疑人" name="1">
                        <el-tabs type="border-card">
                          <el-tab-pane label="张三">
                            <el-divider content-position="left">基本信息</el-divider>
                            <avue-form ref="form" :option="configData.optionMan1"></avue-form>
                            <el-divider content-position="left">事件轨迹</el-divider>
                            <div style="padding: 10px;">
                              <el-timeline-item
                                v-for="(activity, index) in configData.activitiesMan"
                                :key="index"
                                :icon="activity.icon"
                                :type="activity.type"
                                :color="activity.color"
                                :size="activity.size"
                                :timestamp="activity.timestamp">
                                {{activity.content}}
                              </el-timeline-item>
                            </div>
                          </el-tab-pane>
                          <el-tab-pane label="张亚平">
                            <el-divider content-position="left">基本信息</el-divider>
                            <avue-form ref="form" :option="configData.optionMan2"></avue-form>
                            <el-divider content-position="left">大事记</el-divider>
                            <div style="padding: 10px;">
                              <el-timeline-item
                                v-for="(activity, index) in configData.activitiesMan"
                                :key="index"
                                :icon="activity.icon"
                                :type="activity.type"
                                :color="activity.color"
                                :size="activity.size"
                                :timestamp="activity.timestamp">
                                {{activity.content}}
                              </el-timeline-item>
                            </div>
                          </el-tab-pane>
                        </el-tabs>
                      </el-tab-pane>
                      <el-tab-pane label="涉案金额" name="50">
                        <el-collapse>
                          <el-collapse-item title="张三（吸收：6500000元-退赔：3510000元）" name="1">
                            <avue-crud :option="configData.table3"
                                       simplePage
                                       :data="configData.table3data">
                            </avue-crud>
                          </el-collapse-item>
                          <el-collapse-item title="张亚平（吸收：3420000元-退赔：1310000元）" name="2">
                            <avue-crud :option="configData.table3"
                                       simplePage
                                       :data="configData.table3data">
                            </avue-crud>
                          </el-collapse-item>
                        </el-collapse>
                        <el-divider><b>合计：9920000元</b></el-divider>
                      </el-tab-pane>
                      <el-tab-pane label="案件轨迹" name="3">
                        <el-timeline>
                          <el-timeline-item
                            v-for="(activity, index) in configData.activities1"
                            :key="index"
                            :icon="activity.icon"
                            :type="activity.type"
                            :color="activity.color"
                            :size="activity.size"
                            :timestamp="activity.timestamp">
                            {{activity.content}}
                          </el-timeline-item>
                        </el-timeline>
                      </el-tab-pane>
                      &lt;!&ndash;<el-tab-pane label="案件时间线" name="4">
                        <el-timeline>
                          <el-timeline-item
                            v-for="(activity, index) in activities1"
                            :key="index"
                            :icon="activity.icon"
                            :type="activity.type"
                            :color="activity.color"
                            :size="activity.size"
                            :timestamp="activity.timestamp">
                            {{activity.content}}
                          </el-timeline-item>
                        </el-timeline>
                      </el-tab-pane>&ndash;&gt;
                      <el-tab-pane label="地点" name="51">
                        <el-row>
                          <el-divider content-position="left">天津市和平区南山路18号3楼</el-divider>
                          <el-button style="margin-bottom: 10px;"><i class="yellow">犯罪地点</i></el-button>
                          <el-button style="margin-bottom: 10px;"><i class="yellow">设立分部</i></el-button>
                        </el-row>
                        <el-row>
                          <el-divider content-position="left">北京市朝阳区*路**小区**号楼**门**号</el-divider>
                          <el-button style="margin-bottom: 10px;"><i class="yellow">现住址</i></el-button>
                        </el-row>
                        <el-row>
                          <el-divider content-position="left">陕西省西安市碑 林区**巷**楼**单元**层**号</el-divider>
                          <el-button style="margin-bottom: 10px;"><i class="yellow">户籍地</i></el-button>
                        </el-row>
                        <el-row>
                          <el-divider content-position="left">天津市第一看守所</el-divider>
                          <el-button style="margin-bottom: 10px;"><i class="yellow">羁押地址</i></el-button>
                        </el-row>
                      </el-tab-pane>
                      <el-tab-pane label="证据" name="52">
                        <el-collapse>
                          <el-collapse-item title="书证" name="1">
                            <template v-for="(item,index) in configData.evidenceData['书证']">
                              <el-card class="box-card">
                                <div slot="header">
                                  <span>{{ item.createDate }}</span>
                                  <span>{{ item.userName }}</span>
                                  <el-button style="float: right; padding: 3px 0" type="text">
                                    <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                                  </el-button>
                                  <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                    <i class="el-icon-edit-outline"></i>
                                  </el-button>
                                </div>
                                <div>
                                  <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                                  {{ item.book }}
                                </div>
                              </el-card>
                            </template>
                          </el-collapse-item>
                          <el-collapse-item title="物证" name="2">
                            <template v-for="(item,index) in configData.evidenceData['物证']">
                              <el-card class="box-card">
                                <div slot="header">
                                  <span>{{ item.createDate }}</span>
                                  <span>{{ item.userName }}</span>
                                  <el-button style="float: right; padding: 3px 0" type="text">
                                    <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                                  </el-button>
                                  <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                    <i class="el-icon-edit-outline"></i>
                                  </el-button>
                                </div>
                                <div>
                                  <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                                  {{ item.book }}
                                </div>
                              </el-card>
                            </template>
                          </el-collapse-item>
                          <el-collapse-item title="被告人供述和辩解" name="3">
                            <template v-for="(item,index) in configData.evidenceData['被告人供述和辩解']">
                              <el-card class="box-card">
                                <div slot="header">
                                  <span>{{ item.createDate }}</span>
                                  <span>{{ item.userName }}</span>
                                  <el-button style="float: right; padding: 3px 0" type="text">
                                    <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                                  </el-button>
                                  <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                    <i class="el-icon-edit-outline"></i>
                                  </el-button>
                                </div>
                                <div>
                                  <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                                  {{ item.book }}
                                </div>
                              </el-card>
                            </template>
                          </el-collapse-item>
                          <el-collapse-item title="被害人陈述" name="4">
                            <template v-for="(item,index) in configData.evidenceData['被害人陈述']">
                              <el-card class="box-card">
                                <div slot="header">
                                  <span>{{ item.createDate }}</span>
                                  <span>{{ item.userName }}</span>
                                  <el-button style="float: right; padding: 3px 0" type="text">
                                    <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                                  </el-button>
                                  <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                    <i class="el-icon-edit-outline"></i>
                                  </el-button>
                                </div>
                                <div>
                                  <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                                  {{ item.book }}
                                </div>
                              </el-card>
                            </template>
                          </el-collapse-item>
                          <el-collapse-item title="证人证言" name="5">
                            <template v-for="(item,index) in configData.evidenceData['证人证言']">
                              <el-card class="box-card">
                                <div slot="header">
                                  <span>{{ item.createDate }}</span>
                                  <span>{{ item.userName }}</span>
                                  <el-button style="float: right; padding: 3px 0" type="text">
                                    <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                                  </el-button>
                                  <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                    <i class="el-icon-edit-outline"></i>
                                  </el-button>
                                </div>
                                <div>
                                  <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                                  {{ item.book }}
                                </div>
                              </el-card>
                            </template>
                          </el-collapse-item>
                          <el-collapse-item title="鉴定意见" name="6">
                            <template v-for="(item,index) in configData.evidenceData['鉴定意见']">
                              <el-card class="box-card">
                                <div slot="header">
                                  <span>{{ item.createDate }}</span>
                                  <span>{{ item.userName }}</span>
                                  <el-button style="float: right; padding: 3px 0" type="text">
                                    <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                                  </el-button>
                                  <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                    <i class="el-icon-edit-outline"></i>
                                  </el-button>
                                </div>
                                <div>
                                  <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                                  {{ item.book }}
                                </div>
                              </el-card>
                            </template>
                          </el-collapse-item>
                          <el-collapse-item title="侦查实验等笔录" name="7">
                            <template v-for="(item,index) in configData.evidenceData['侦查实验等笔录']">
                              <el-card class="box-card">
                                <div slot="header">
                                  <span>{{ item.createDate }}</span>
                                  <span>{{ item.userName }}</span>
                                  <el-button style="float: right; padding: 3px 0" type="text">
                                    <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                                  </el-button>
                                  <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                    <i class="el-icon-edit-outline"></i>
                                  </el-button>
                                </div>
                                <div>
                                  <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                                  {{ item.book }}
                                </div>
                              </el-card>
                            </template>
                          </el-collapse-item>
                          <el-collapse-item title="其他" name="8">
                            <template v-for="(item,index) in configData.evidenceData['其他']">
                              <el-card class="box-card">
                                <div slot="header">
                                  <span>{{ item.createDate }}</span>
                                  <span>{{ item.userName }}</span>
                                  <el-button style="float: right; padding: 3px 0" type="text">
                                    <i class="el-icon-delete" style="color: #F56C6C" @click="deleteMark(index)"></i>
                                  </el-button>
                                  <el-button style="float: right; padding: 3px 0" type="text" @click="showModal(item)">
                                    <i class="el-icon-edit-outline"></i>
                                  </el-button>
                                </div>
                                <div>
                                  <i class="el-icon-s-opportunity" :style="{color: item.color}"></i>
                                  {{ item.book }}
                                </div>
                              </el-card>
                            </template>
                          </el-collapse-item>
                        </el-collapse>
                      </el-tab-pane>
                    </el-tabs>
                  </el-tab-pane>
                  &lt;!&ndash;<el-tab-pane label="关系图谱" style="height: 100%">

                  </el-tab-pane>&ndash;&gt;
                  <el-tab-pane name="E" label="案情分析" style="height: 100%">
                    <img src="../../../../public/img/标注.png" height="auto" width="100%"/>
                    <div style="padding: 10px;border: 1px solid #6b6b6b;border-radius: 6px" v-if="isShowWord">
                      <p style="border-bottom: 1px solid #6b6b6b;padding-bottom: 10px" contenteditable="true">
                        2019年至2020年，被告人蒋某某在天津市河东区合美国际C座1016房间等地，以牟利为目的，在未取得危险化学品经营
                        许可证的情况下，通过网络联系、发送“闪送”、快递等方式，向夭津市河东区金宝街92号励骏酒店1510房间等地销售一
                        氧化二氮（俗称“笑气”），累计经营数额人民币50余万元。天津市公安局和平分局建国门派出所民警于2020年1月16日将
                        蒋某某查获，并于天津市河东区合美国际C座1016房间内起获其用于销售的一氧化二氮22750支。
                      </p>
                      <div style="font-size: 10px;line-height: 2em">
                        <span style="margin-right: 30px">描述：这是作案经过</span>
                        <span style="margin-right: 30px">标签：案情-作案经过</span>
                        <span style="margin-right: 30px">类型：案情</span>
                        <span style="float: right">
                          <el-button size="mini" type="primary" @click="showModal()" icon="el-icon-edit" circle></el-button>
                          <el-button size="mini" type="danger" @click="isShowWord = false" icon="el-icon-delete" circle></el-button>
                        </span>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane name="B" label="案卡" style="height: 100%">
                    <el-tabs v-model="activeCard">
                      <el-tab-pane label="基本信息" name="100">
                        <avue-form ref="form" v-model="form1" :option="configData.option2"></avue-form>
                      </el-tab-pane>
                      <el-tab-pane label="涉案情况" name="20">
                        <avue-form ref="form" v-model="form1" :option="configData.option1"></avue-form>
                      </el-tab-pane>
                      <el-tab-pane label="强制措施情况" name="30">
                        <avue-form ref="form" v-model="form1" :option="configData.option1"></avue-form>
                      </el-tab-pane>
                      <el-tab-pane label="留置措施情况" name="40">
                        <avue-form ref="form" v-model="form1" :option="configData.option1"></avue-form>
                      </el-tab-pane>
                      <el-tab-pane label="犯罪嫌疑人/单位" name="50">
                        <avue-form ref="form" v-model="form1" :option="configData.option1"></avue-form>
                      </el-tab-pane>
                      <el-tab-pane label="被害人/单位" name="60">
                        <avue-form ref="form" v-model="form1" :option="configData.option1"></avue-form>
                      </el-tab-pane>
                    </el-tabs>
                  </el-tab-pane>
                  <el-tab-pane name="C" label="文书制作" style="height: 100%">
                    <el-tabs v-model="tabs2" @tab-click="handleClick">
                      <el-tab-pane label="未完成" name="first">
                        <div v-for="item in firstBookList" :key="item.text" style="display: flex;line-height: 2em">
                          <p>[{{ item.number }}]{{ item.text }}</p>
                          <p style="margin: 0 0 0 auto">
                            <el-button size="mini" type="warning" icon="el-icon-star-off" circle></el-button>
                            <el-button size="mini" @click="toMake" type="primary" icon="el-icon-edit-outline" circle></el-button>
                          </p>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="已完成" name="second">
                        <div v-for="item in firstBookList" :key="item.text" style="display: flex;line-height: 2em">
                          <p>[{{ item.number }}]{{ item.text }}</p>
                          <p style="margin: 0 0 0 auto">
                            <el-button size="mini" type="primary" icon="el-icon-edit-outline" circle></el-button>
                          </p>
                        </div>
                      </el-tab-pane>
                      &lt;!&ndash;<el-tab-pane label="我的模板" name="4">
                        <div v-for="item in firstBookList" :key="item.text" style="display: flex;line-height: 2em">
                          <p>[{{ item.number }}]{{ item.text }}</p>
                          <p style="margin: 0 0 0 auto">
                            <el-button size="mini" type="warning" icon="el-icon-star-off" circle></el-button>
                            <el-button size="mini" type="primary" icon="el-icon-edit-outline" circle></el-button>
                          </p>
                        </div>
                      </el-tab-pane>&ndash;&gt;
                      <el-tab-pane label="我的收藏" name="3">
                        <div v-for="item in firstBookList" :key="item.text" style="display: flex;line-height: 2em">
                          <p>[{{ item.number }}]{{ item.text }}</p>
                          <p style="margin: 0 0 0 auto">
                            <el-button size="mini" type="primary" icon="el-icon-edit-outline" circle></el-button>
                          </p>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
                  </el-tab-pane>
                  <el-tab-pane name="D" label="历史版本" style="height: 100%">
                    <el-timeline>
                      <el-timeline-item
                        v-for="(activity, index) in configData.activities2"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :timestamp="activity.timestamp">
                        {{activity.content}}
                      </el-timeline-item>
                    </el-timeline>
                    &lt;!&ndash;<el-tabs @tab-click="handleClick">
                      <el-tab-pane label="修改记录" name="first">
                        <el-timeline>
                          <el-timeline-item
                            v-for="(activity, index) in activities2"
                            :key="index"
                            :icon="activity.icon"
                            :type="activity.type"
                            :color="activity.color"
                            :size="activity.size"
                            :timestamp="activity.timestamp">
                            {{activity.content}}
                          </el-timeline-item>
                        </el-timeline>
                      </el-tab-pane>
                      <el-tab-pane label="标注记录" name="second">
                        <el-timeline>
                          <el-timeline-item
                            v-for="(activity, index) in activities2"
                            :key="index"
                            :icon="activity.icon"
                            :type="activity.type"
                            :color="activity.color"
                            :size="activity.size"
                            :timestamp="activity.timestamp">
                            {{activity.content}}
                          </el-timeline-item>
                        </el-timeline>
                      </el-tab-pane>
                    </el-tabs>&ndash;&gt;
                  </el-tab-pane>
                </el-tabs>
              </div>
            </template>
          </split-pane>
        </template>
      </split-pane>-->

    </div>
    <!-- 知识检索 -->
    <!--<el-dialog
      title="知识检索"
      :visible.sync="dialogVisible1"
      width="50%"
      :before-close="handleClose">
      <el-input placeholder="请输入想查询的信息" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" style="width: 120px;" placeholder="请选择">
          <el-option label="知网" value="1"></el-option>
          <el-option label="法信" value="2"></el-option>
          <el-option label="指导案例" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible1 = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="dialogVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>-->
    <el-drawer
      :modal="false"
      title="知识检索"
      :visible.sync="dialogVisible1"
      direction="rtl"
      :before-close="handleClose">
      <div style="padding: 20px;">
        <el-input placeholder="请输入想查询的信息" v-model="input3" class="input-with-select">
          <el-select v-model="select" slot="prepend" style="width: 120px;" placeholder="请选择">
            <el-option label="知网" value="1"></el-option>
            <el-option label="法信" value="2"></el-option>
            <el-option label="指导案例" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <span slot="footer" class="dialog-footer">
        <!--<el-button size="mini" @click="dialogVisible1 = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="dialogVisible1 = false">确 定</el-button>-->
      </span>
      </div>
    </el-drawer>
    <!-- 标注信息填写 -->
    <el-drawer
      :title="toodsType"
      :modal="false"
      :visible.sync="drawer"
      :before-close="handleClose">
      <div>
        <el-divider content-position="left">标注信息</el-divider>
        <avue-form ref="form" v-model="formData" :option="markConfigData">
          <!--<template slot="menuForm">
            <el-button type="primary" @click="drawer = false">取消</el-button>
            <el-button type="primary" @click="saveMark">提 交</el-button>
          </template>-->
        </avue-form>
        <!--<div v-if="extendMarkConfigData.column.length">
          <el-divider content-position="left">扩展信息</el-divider>
          <avue-form ref="form" v-model="formData" :option="extendMarkConfigData">
            &lt;!&ndash;<template slot="menuForm">
              <el-button type="primary" @click="drawer = false">取消</el-button>
              <el-button type="primary" @click="saveMark">提 交</el-button>
            </template>&ndash;&gt;
          </avue-form>
        </div>-->
        <el-row type="flex" justify="end" style="padding: 0 10px 10px 0">
          <el-button type="primary" size="mini" @click="drawer = false">取消</el-button>
          <el-button type="primary" size="mini" @click="saveMark">提 交</el-button>
        </el-row>
      </div>
    </el-drawer>
    <!-- 标注记录 -->
    <el-dialog
      title="标注记录"
      :visible.sync="dialogVisible2"
      width="50%"
      :before-close="handleClose">
      <avue-crud :option="configData.table1"
                 simplePage
                 :data="configData.table1data">
        <!--<template slot="header">
          <el-row style="padding: 5px 0;margin-top: -50px;margin-right: 130px;text-align: right">

          </el-row>
        </template>-->
        <template slot-scope="scope" slot="action">
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link" style="padding: 0 2px;border: 1px solid #dddbda;border-radius: 3px;font-size: 13px;">
              <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>还原</el-dropdown-item>
              <!--<el-dropdown-item @click.native="cancel">退回</el-dropdown-item>-->
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </avue-crud>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 标注列表 -->
    <el-dialog
      title="标注列表"
      :visible.sync="dialogVisible4"
      width="70%"
      :before-close="handleClose">
      <avue-crud :option="configData.table2"
                 simplePage
                 :data="configData.table2data">
      </avue-crud>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible4 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible4 = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 全屏 -->
    <el-dialog
      title="识别卷宗"
      :visible.sync="dialogVisible3"
      width="100%"
      :fullscreen="true"
      :modal="false"
      :append-to-body="true"
      :before-close="handleClose">
      <div style="overflow-y: auto">
        天津市公安局和平分局
        起诉意 见书
        津武公（济）诉字[2021]10122号
        被告人蒋某某，男，1996年**月**日出生，公民身份号码6226251996*******，汉族，初中文化程度，无职业，户籍
        所在地甘肃省康县**镇**村**社。因涉嫌非法吸收公众存款罪，于2020年1月17日被天津市公安局和平分局刑事拘留;经该局决定，
        于2020年2月20日被取保候审;经本院决定，于2020年11月2日被取保候审;经本院决定，于2021年2月7日被天津市公安局
        和平分局逮捕。
        本案由天津市公安局和平分局侦查终结，以被告人蒋某某涉嫌非法吸收公众存款罪，于2020年11月2日向本院移送审查起诉。本
        院受理后，于2020年11月2日已告知被告人有权委托辩护人和认罪认罚可能导致的法律后果，依法讯问了被告人，听取了被
        告人及值班律师的意见，审查了全部案件材料。其间，因案件重大、复杂延长审查起诉期限一次（自2021年2月1日至2021
        年2月15日），因事实不清、证据不足退回补充侦查一次（自2020年12月2日至2020年12月31日）。
        经依法审查查明:
        2019年至2020年，被告人蒋某某在天津市河东区合美国际C座1016房间等地，以牟利为目的，在未取得危险化学品经营
        许可证的情况下，通过网络联系、发送“闪送”、快递等方式，向夭津市河东区金宝街92号励骏酒店1510房间等地销售一
        氧化二氮（俗称“笑气”），累计经营数额人民币50余万元。天津市公安局和平分局建国门派出所民警于2020年1月16日将
        蒋某某查获，并于天津市河东区合美国际C座1016房间内起获其用于销售的一氧化二氮22750支。
        被告人蒋某某于2020年1月16日被天津市公安局和平分局建国门派出所民警在天津市河东区石门新居*号楼*单元***抓
        获。部分涉案一氧化二氮已起获并扣押在案。
        认定上述事实的证据如下:
        1.物证:一氧化二氮、手机等;2.书证:微信及支付宝交易记录截图;3.证人证言:证人杨某某、陈某某、田某某等
        人的证言;4.被告人的供述和辩解:被告人蒋某某的供述和辩解;5.鉴定意见:天津中海义信信息技术有限公司司法鉴定
        所出具的司法鉴定意见书等;6.搜查笔录:对天津市河东区合美国际C座1016房间的搜查笔录;7.辨认笔录:证人杨某某等
        人对被告人蒋某某的辨认笔录;8.其他材料:到案经过等。
        上述证据收集程序合法，内容客观真实，足以认定指控事实。被告人蒋某某对指控的犯罪事实和证据没有异议，并自
        愿认罪认罚。
        本院认为，被告人蒋某某违反国家规定，未经许可非法吸收公众存款危险化学品，情节严重，其行为触犯了《中华人民共和国
        刑法》第二百二十五条，犯罪事实清楚，证据确实、充分，应当以非法吸收公众存款罪追究其刑事责任。根据《中华人民共和国刑
        事诉讼法》第一百七十六条，提起公诉，请依法判处。
        此致
        天津市人民检察院
        2021年2月9日
        附:
        1．被告人蒋某某现羁押于天津市武清区看守所。
        2．案卷材料和证据十册随案移送。
        3．认罪认罚具结书、认罪认罚相关权利告知书随案移送。
        4．量刑建议书、适用简易程序建议书随案移送。
        5．换押证随案移送。
        天津市公安局和平分局
        起诉意 见书
        津武公（济）诉字[2021]10122号
        被告人蒋某某，男，1996年**月**日出生，公民身份号码6226251996*******，汉族，初中文化程度，无职业，户籍
        所在地甘肃省康县**镇**村**社。因涉嫌非法吸收公众存款罪，于2020年1月17日被天津市公安局和平分局刑事拘留;经该局决定，
        于2020年2月20日被取保候审;经本院决定，于2020年11月2日被取保候审;经本院决定，于2021年2月7日被天津市公安局
        和平分局逮捕。
        本案由天津市公安局和平分局侦查终结，以被告人蒋某某涉嫌非法吸收公众存款罪，于2020年11月2日向本院移送审查起诉。本
        院受理后，于2020年11月2日已告知被告人有权委托辩护人和认罪认罚可能导致的法律后果，依法讯问了被告人，听取了被
        告人及值班律师的意见，审查了全部案件材料。其间，因案件重大、复杂延长审查起诉期限一次（自2021年2月1日至2021
        年2月15日），因事实不清、证据不足退回补充侦查一次（自2020年12月2日至2020年12月31日）。
        经依法审查查明:
        2019年至2020年，被告人蒋某某在天津市河东区合美国际C座1016房间等地，以牟利为目的，在未取得危险化学品经营
        许可证的情况下，通过网络联系、发送“闪送”、快递等方式，向夭津市河东区金宝街92号励骏酒店1510房间等地销售一
        氧化二氮（俗称“笑气”），累计经营数额人民币50余万元。天津市公安局和平分局建国门派出所民警于2020年1月16日将
        蒋某某查获，并于天津市河东区合美国际C座1016房间内起获其用于销售的一氧化二氮22750支。
        被告人蒋某某于2020年1月16日被天津市公安局和平分局建国门派出所民警在天津市河东区石门新居*号楼*单元***抓
        获。部分涉案一氧化二氮已起获并扣押在案。
        认定上述事实的证据如下:
        1.物证:一氧化二氮、手机等;2.书证:微信及支付宝交易记录截图;3.证人证言:证人杨某某、陈某某、田某某等
        人的证言;4.被告人的供述和辩解:被告人蒋某某的供述和辩解;5.鉴定意见:天津中海义信信息技术有限公司司法鉴定
        所出具的司法鉴定意见书等;6.搜查笔录:对天津市河东区合美国际C座1016房间的搜查笔录;7.辨认笔录:证人杨某某等
        人对被告人蒋某某的辨认笔录;8.其他材料:到案经过等。
        上述证据收集程序合法，内容客观真实，足以认定指控事实。被告人蒋某某对指控的犯罪事实和证据没有异议，并自
        愿认罪认罚。
        本院认为，被告人蒋某某违反国家规定，未经许可非法吸收公众存款危险化学品，情节严重，其行为触犯了《中华人民共和国
        刑法》第二百二十五条，犯罪事实清楚，证据确实、充分，应当以非法吸收公众存款罪追究其刑事责任。根据《中华人民共和国刑
        事诉讼法》第一百七十六条，提起公诉，请依法判处。
        此致
        天津市人民检察院
        2021年2月9日
        附:
        1．被告人蒋某某现羁押于天津市武清区看守所。
        2．案卷材料和证据十册随案移送。
        3．认罪认罚具结书、认罪认罚相关权利告知书随案移送。
        4．量刑建议书、适用简易程序建议书随案移送。
        5．换押证随案移送。
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible3 = false">关闭</el-button>
      </span>
    </el-dialog>
    <!-- 自定义右键菜单html代码 -->
    <div id="menu">
      <!--<div class="menu" @click="showModal()">添加标注</div>-->
      <div v-if="toodsType == '人物'">
        <div @click="showCard">犯罪嫌疑人</div>
        <div>报案人</div>
        <div>被害人</div>
        <div>证人</div>
      </div>
      <div v-if="toodsType == '关系'">
        <el-input v-model="guanxi" @blur="hideMenu('修改关系')" placeholder="请输入关系"></el-input>
      </div>
      <div v-if="toodsType == '时间'">
        <div>拘留时间</div>
        <div>投案时间</div>
        <div>取保候审时间</div>
        <div>报案时间</div>
      </div>
      <div v-if="toodsType == '地点'">
        <div>户籍地</div>
        <div>现住所地</div>
        <div>羁押地</div>
      </div>
      <div v-if="toodsType == '证据'">
        <div>书证</div>
        <div>物证</div>
        <div>犯罪嫌疑人供述</div>
        <div>证人证言</div>
      </div>
      <div v-if="toodsType == '涉案金额'">
        <div>吸收</div>
        <div>退赔</div>
      </div>
      <div v-if="toodsType == '疑问'">
        <el-select v-model="state2"
                   @change="hideMenu"
                   filterable clearable multiple
                   placeholder="请选择">
          <el-option
            v-for="item in configData.manList"
            :key="item.value"
            :label="item.value"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div @click="showanka = 6">删除标注</div>
    </div>
  </div>
</template>

<script>
  import charts from "./charts";
  import { dateFormat } from '@/util/date'
  import configData from './taggingConfig'
  import draggable from 'vuedraggable'
  import splitPane from 'vue-splitpane'
  import cataLog from '@/components/cataLog/cataLog.vue'
  import OCRContent from './OCRContent'
  import OCRContentM from './OCRContentM'
  import RelationGraph from 'relation-graph'
  import SeeksRelationGraph from 'relation-graph'

  export default {
    name: "tagging",
    components: {
      charts,
      OCRContentM,
      draggable,
      splitPane,
      RelationGraph,
      SeeksRelationGraph,
      cataLog,
      OCRContent
    },
    data(){
      return {
        isShowColorCard: false,
        colorValue: '黄色',
        isShowCard: false,
        option2: {
          column: [
            {
              type: 'input',
              label: '部门受案号',
              span: 24,
              display: true,
              prop: '1617790970598_31535',
              readonly: true,
              required: false,
              rules: [
                {
                  required: false,
                  message: '部门受案号必须填写'
                }
              ]
            },
            {
              type: 'datetime',
              label: '日期时间',
              span: 12,
              display: true,
              format: 'yyyy-MM-dd HH:mm:ss',
              valueFormat: 'yyyy-MM-dd HH:mm:ss',
              prop: '1617791000482_44269',
              disabled: false,
              required: false,
              rules: [
                {
                  required: false,
                  message: '日期时间必须填写'
                }
              ]
            },
            {
              type: 'input',
              label: '案件名称',
              span: 12,
              display: true,
              prop: '1617791120227_27550',
              readonly: true,
              required: false,
              rules: [
                {
                  required: false,
                  message: '案件名称必须填写'
                }
              ]
            },
            {
              type: 'input',
              label: '（不）起诉意见书文号',
              click: ( { value, column } ) => {
                this.showanka = 3;
              },
              span: 12,
              value: '津和公（济）诉字〔2021〕23902 号',
              // className: 'light',
              suffixIcon: 'iconfont icon-OCR6',
              display: true,
              prop: '1617791143584_90239',
              rules: [
                {
                  required: false,
                  message: '（不）起诉意见书文号必须填写'
                }
              ],
              required: false,
              showWordLimit: true
            },
            {
              type: 'input',
              label: '移送单位',
              span: 12,
              // className: 'light',
              suffixIcon: 'iconfont icon-OCR6',
              value: '天津市公安局和平分局',
              display: true,
              prop: '1617791287761_49315',
              rules: [
                {
                  required: false,
                  message: '移送单位必须填写'
                }
              ],
              required: true
            },
            {
              type: 'radio',
              label: '监所案件',
              dicData: [
                {
                  label: '是',
                  value: '0'
                },
                {
                  label: '否',
                  value: '1'
                }
              ],
              span: 12,
              display: true,
              props: {
                label: 'label',
                value: 'value'
              },
              prop: '1617791353830_70454',
              required: false,
              rules: [
                {
                  required: false,
                  message: '请选择监所案件'
                }
              ]
            },
            {
              type: 'input',
              label: '侦（调查）察机关',
              span: 12,
              // value: '公安机关',
              // className:'light',
              display: true,
              prop: '1617791384380_95754',
              required: false,
              rules: [
                {
                  required: false,
                  message: '侦（调查）察机关必须填写'
                }
              ]
            },
            {
              type: 'input',
              label: '侦（调查）察机关类别',
              span: 12,
              display: true,
              prop: '1617791419225_56453',
              rules: [
                {
                  required: false,
                  message: '侦（调查）察机关类别必须填写'
                }
              ],
              required: true
            },
            {
              type: 'input',
              label: '移送意见',
              span: 12,
              display: true,
              prop: '1617791444635_21270',
              rules: [
                {
                  required: false,
                  message: '移送意见必须填写'
                }
              ],
              required: true
            },
            {
              type: 'input',
              label: '移送罪名',
              value: '非法吸收公众存款罪',
              // className: 'light',
              suffixIcon: 'iconfont icon-OCR6',
              span: 12,
              display: true,
              prop: '1617791461707_15715',
              rules: []
            },
            {
              type: 'input',
              label: '移送其他罪名',
              span: 12,
              display: true,
              prop: '1617791479724_43996'
            },
            {
              type: 'radio',
              label: '他院受理审查起诉后改',
              dicData: [
                {
                  label: '是',
                  value: '0'
                },
                {
                  label: '否',
                  value: '1'
                }
              ],
              span: 12,
              display: true,
              props: {
                label: 'label',
                value: 'value'
              },
              prop: '1617791507016_24498',
              required: false,
              rules: [
                {
                  required: false,
                  message: '请选择单选框组'
                }
              ]
            },
            {
              type: 'radio',
              label: '侦（调查）察机关建议适用认罪认罚',
              dicData: [
                {
                  label: '是',
                  value: '0'
                },
                {
                  label: '否',
                  value: '1'
                }
              ],
              span: 12,
              display: true,
              props: {
                label: 'label',
                value: 'value'
              },
              prop: '1617791563084_72517',
              rules: [
                {
                  required: false,
                  message: '请选择侦（调查）察机关建议适用认罪认罚'
                }
              ],
              required: true
            },
            {
              type: 'radio',
              label: '属于适用缺席审判程序案件',
              dicData: [
                {
                  label: '是',
                  value: '0'
                },
                {
                  label: '否',
                  value: '1'
                }
              ],
              span: 12,
              display: true,
              props: {
                label: 'label',
                value: 'value'
              },
              prop: '1617791605316_51436',
              required: false,
              rules: [
                {
                  required: false,
                  message: '请选择属于适用缺席审判程序案件'
                }
              ]
            },
            {
              type: 'radio',
              label: '单位犯罪',
              dicData: [
                {
                  label: '是',
                  value: '0'
                },
                {
                  label: '否',
                  value: '1'
                }
              ],
              span: 12,
              display: true,
              props: {
                label: 'label',
                value: 'value'
              },
              prop: '1617791670901_65410',
              rules: []
            },
            {
              type: 'radio',
              label: '涉台案件',
              dicData: [
                {
                  label: '是',
                  value: '0'
                },
                {
                  label: '否',
                  value: '1'
                }
              ],
              span: 12,
              display: true,
              props: {
                label: 'label',
                value: 'value'
              },
              prop: '1617791701885_61873',
              rules: []
            },
            {
              type: 'radio',
              label: '涉外案件',
              dicData: [
                {
                  label: '是',
                  value: '0'
                },
                {
                  label: '否',
                  value: '1'
                }
              ],
              span: 12,
              display: true,
              props: {
                label: 'label',
                value: 'value'
              },
              prop: '1617791767707_57293'
            },
            {
              type: 'radio',
              label: '督办案件',
              dicData: [
                {
                  label: '是',
                  value: '0'
                },
                {
                  label: '否',
                  value: '1'
                }
              ],
              span: 12,
              display: true,
              props: {
                label: 'label',
                value: 'value'
              },
              prop: '1617791790584_37764'
            },
            {
              type: 'radio',
              label: '关注案件',
              dicData: [
                {
                  label: '是',
                  value: '0'
                },
                {
                  label: '否',
                  value: '1'
                }
              ],
              span: 24,
              display: true,
              props: {
                label: 'label',
                value: 'value'
              },
              prop: '1617791886682_78065'
            }
          ],
          labelPosition: 'top',
          labelSuffix: '：',
          labelWidth: 180,
          gutter: 0,
          menuBtn: true,
          submitBtn: true,
          submitText: '保存',
          emptyBtn: false,
          emptyText: '清空',
          menuPosition: 'right'
        },
        // 展示哪个图
        showanka: 1,
        restaurants: [],
        state2: '',
        guanxi: '',
        // 是否展示全部人物
        isShowMan: false,
        // 是否展示全部日期
        isShowDate: true,
        graphOptions2: {
          defaultNodeBorderWidth: 0,
          defaultNodeColor: 'rgba(238, 178, 94, 1)',
          allowSwitchLineShape: true,
          allowSwitchJunctionPoint: true,
          defaultLineShape: 1,
          'layouts': [
            {
              'label': '中心',
              'layoutName': 'center',
              'layoutClassName': 'seeks-layout-center'
            }
          ],
          defaultJunctionPoint: 'border'
          // 这里可以参考"Graph 图谱"中的参数进行设置
        },
        tabs1: '10',
        tabs2: 'first',
        tabs3: 'A',
        tabs4: 'a3',
        tabs5: 'first',
        configData,
        toodsType: '',
        drawer: false,
        input3: '',
        select: '法信',
        isShowWord: true,
        radio: '',
        activeCard: '100',
        leftSpan: 3,
        // 下一步案卡右侧
        rightSpan: 21,
        // activeName: 'first',
        firstBookList: [
          {
            text: '起诉书（自然人）',
            number: '100000032020',
          },
          {
            text: '认罪认罚具结书（自然人）',
            number: '100000032020',
          },
          {
            text: '量刑建议调整数（认罪认罚案件适用）',
            number: '100000022009',
          },
          // {
          //   text: '批准律师以外的辩护人与犯罪嫌疑人会见决定书',
          //   number: '100000030007',
          // },
          {
            text: '延长羁押期限通知书',
            number: '100000030286',
          },
          {
            text: '阅卷笔录',
            number: '100000030119',
          },
          {
            text: '鉴定聘请书',
            number: '100000030125',
          },
        ],
        secondBookList: [],
        // 案卡表单
        form1: {},
        // 添加标注表单字段
        formData: {
          name: '',
          type: '其他',
          relevantMan: []
        },
        dialogVisible: false,
        dialogVisible1: false,
        dialogVisible2: false,
        dialogVisible3: false,
        dialogVisible4: false,
        isShow1: false,
        isShow2: false,
        isShowDrawer: true,
        isShowBook: true,
        fullscreen: false,
        // graphOptions: {
        //   allowSwitchLineShape: true,
        //   allowSwitchJunctionPoint: true,
        //   defaultJunctionPoint: 'border'
        //   // 这里可以参考"Graph 图谱"中的参数进行设置
        // },
        graphOptions: {
          defaultNodeBorderWidth: 0,
          defaultNodeColor: 'rgba(238, 178, 94, 1)',
          allowSwitchLineShape: true,
          allowSwitchJunctionPoint: true,
          defaultLineShape: 1,
          layouts: [
            {
              label: '自动布局',
              layoutName: 'force',
              layoutClassName: 'seeks-layout-force'
            }
          ],
          defaultJunctionPoint: 'border'
          // 这里可以参考"Graph 图谱"中的参数进行设置
        },
        // 划词获取
        text: '',
        // 是否切换马团结
        isChange: true,
        optionMan1: {
          column: [
            {
              type: 'input',
              label: '姓名',
              span: 12,
              display: true,
              prop: '1622080004569_90420',
              value: '张三'
            },
            {
              type: 'input',
              label: '性别',
              span: 12,
              display: true,
              prop: '1622080397978_22545',
              value: '男'
            },
            {
              type: 'input',
              label: '民族',
              span: 12,
              display: true,
              prop: '1622080435721_63267',
              value: '汉族'
            },
            {
              type: 'input',
              label: '出生日期',
              span: 12,
              display: true,
              prop: '1622080460987_6285',
              value: '1981-9-12',
              click: ( { value, column } ) => {
                this.showanka = 2;
              },
            },
            {
              type: 'input',
              label: '证件号',
              span: 12,
              display: true,
              prop: '1622080351195_67951',
              value: '23321123324543'
            },
            {
              type: 'input',
              label: '绰号',
              span: 12,
              display: true,
              prop: '1622080291691_47903',
              value: '大胖'
            },
            {
              type: 'input',
              label: '住所地',
              span: 12,
              display: true,
              prop: '1622080513350_16265',
              value: '北京市朝阳区*路**小区**号楼**门**号'
            },
            {
              type: 'input',
              label: '户籍所在地',
              span: 12,
              display: true,
              prop: '1622080562845_39139',
              value: '陕西省西安市碑林区**巷**楼**单元**层**号'
            },
            {
              type: 'input',
              label: '工作单位',
              span: 12,
              display: true,
              prop: '1622080704159_54031',
              value: '天津市和平区第一街道'
            },
            {
              type: 'input',
              label: '受教育情况',
              span: 12,
              display: true,
              prop: '1622080753912_85552'
            },
            {
              type: 'input',
              label: '政治面貌',
              span: 12,
              display: true,
              prop: '16220830806302_96576',
              value: '中国共产党员'
            },
            // {
            //   type: 'input',
            //   label: '吸收金额',
            //   span: 12,
            //   display: true,
            //   prop: '1622080806302_965736',
            //   value: '6500000元'
            // },
            // {
            //   type: 'input',
            //   label: '退赔金额',
            //   span: 12,
            //   display: true,
            //   prop: '1622080806302_965736',
            //   value: '3510000元'
            // }
          ],
          labelPosition: 'top',
          labelSuffix: '：',
          labelWidth: 100,
          gutter: 0,
          menuBtn: true,
          submitBtn: true,
          submitText: '保存',
          emptyBtn: false,
          emptyText: '清空',
          menuPosition: 'right',
          detail: false
        },
        optionMan2: {
          column: [
            {
              type: 'input',
              label: '姓名',
              span: 12,
              display: true,
              prop: '1622080004569_90420',
              value: '张亚平'
            },
            {
              type: 'input',
              label: '性别',
              span: 12,
              display: true,
              prop: '1622080397978_22545',
              value: '男'
            },
            {
              type: 'input',
              label: '民族',
              span: 12,
              display: true,
              prop: '1622080435721_63267',
              value: '汉族'
            },
            {
              type: 'input',
              label: '出生日期',
              span: 12,
              display: true,
              prop: '1622080460987_6285',
              value: '1980-10-3'
            },
            {
              type: 'input',
              label: '证件号',
              span: 12,
              display: true,
              prop: '1622080351195_67951',
              value: '23321123324543'
            },
            {
              type: 'input',
              label: '绰号',
              span: 12,
              display: true,
              prop: '1622080291691_47903',
              value: '大胖'
            },
            {
              type: 'input',
              label: '住所地',
              span: 12,
              display: true,
              prop: '1622080513350_16265',
              value: '北京市朝阳区*路**小区**号楼**门**号'
            },
            {
              type: 'input',
              label: '户籍所在地',
              span: 12,
              display: true,
              prop: '1622080562845_39139',
              value: '陕西省西安市碑林区**巷**楼**单元**层**号'
            },
            {
              type: 'input',
              label: '工作单位',
              span: 12,
              display: true,
              prop: '1622080704159_54031',
              value: '天津市和平区第一街道'
            },
            {
              type: 'input',
              label: '受教育情况',
              span: 12,
              display: true,
              prop: '1622080753912_85552'
            },
            {
              type: 'input',
              label: '政治面貌',
              span: 12,
              display: true,
              prop: '1622080806302_96576',
              value: '中国共产党员'
            }
          ],
          labelPosition: 'right',
          labelSuffix: '：',
          labelWidth: 100,
          gutter: 0,
          menuBtn: true,
          submitBtn: true,
          submitText: '保存',
          emptyBtn: true,
          emptyText: '清空',
          menuPosition: 'center',
          detail: false
        },
        markOptionData: {
          "人物": {
            column: [
              // {
              //   type: 'input',
              //   label: '标题',
              //   span: 24,
              //   display: true,
              //   prop: 'title',
              //   required: true,
              //   rules: [
              //     {
              //       required: true,
              //       message: '标题必须填写'
              //     }
              //   ]
              // },
              {
                type: 'input',
                label: '原文',
                span: 24,
                display: true,
                value: '张三',
                // disabled: true,
                prop: 'book'
              },
              {
                type: 'select',
                label: '类型',
                disabled: true,
                dicData: [
                  {
                    label: '时间',
                    value: '时间'
                  },
                  {
                    label: '地点',
                    value: '地点'
                  },
                  {
                    label: '人物',
                    value: '人物'
                  },
                  {
                    label: '案情',
                    value: '案情'
                  },
                  {
                    label: '证据',
                    value: '证据'
                  },
                  {
                    label: '涉案金额',
                    value: '涉案金额'
                  },
                  {
                    label: '问题',
                    value: '问题'
                  },
                  {
                    label: '其他',
                    value: '其他'
                  },
                ],
                value: '人物',
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'type',
                multiple: false,
                clearable: true,
                filterable: true,
                required: false,
                rules: [
                  {
                    required: false,
                    message: '请选择标签'
                  }
                ],
              },
              // {
              //   type: 'select',
              //   label: '标签',
              //   dicData: [
              //     {
              //       label: '犯罪嫌疑人',
              //       value: ' 犯罪嫌疑人'
              //     },
              //     {
              //       label: '证人',
              //       value: '证人'
              //     },
              //     {
              //       label: '被害人',
              //       value: '被害人'
              //     },
              //     {
              //       label: '报案人',
              //       value: '报案人'
              //     },
              //   ],
              //   value: "犯罪嫌疑人",
              //   cascaderItem: [],
              //   span: 12,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'tag',
              //   multiple: true,
              //   filterable: true,
              //   clearable: true
              // },
              {
                type: 'select',
                label: '标签',
                dicData: [
                  {
                    label: '犯罪嫌疑人',
                    value: ' 犯罪嫌疑人'
                  },
                  {
                    label: '证人',
                    value: '证人'
                  },
                  {
                    label: '被害人',
                    value: '被害人'
                  },
                  {
                    label: '报案人',
                    value: '报案人'
                  },
                ],
                value: ['犯罪嫌疑人'],
                cascaderItem: [],
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'tag',
                multiple: true,
                filterable: true,
                clearable: true
              },
              {
                type: 'color',
                label: '颜色选择器',
                value: 'rgba(255, 215, 0, 1)',
                span: 12,
                display: true,
                prop: 'color'
              },
              {
                type: 'textarea',
                label: '备注',
                span: 24,
                display: true,
                value: '',
                prop: 'remark'
              },
              // {
              //   type: 'input',
              //   label: '姓名',
              //   span: 12,
              //   display: true,
              //   prop: 'name',
              //   change: ({value,column}) => {
              //     console.log('值改变',value,column)
              //   },
              // },
              // {
              //   type: 'input',
              //   label: '性别',
              //   span: 12,
              //   display: true,
              //   prop: 'sex',
              //   value: '男'
              // },
              // {
              //   type: 'input',
              //   label: '民族',
              //   span: 12,
              //   display: true,
              //   prop: 'minzu',
              //   value: '汉族'
              // },
              // {
              //   type: 'input',
              //   label: '出生日期',
              //   span: 12,
              //   display: true,
              //   prop: 'borthDate',
              //   value: '1980-10-3'
              // },
              // {
              //   type: 'input',
              //   label: '证件号',
              //   span: 12,
              //   display: true,
              //   prop: 'idCard',
              //   value: '23321123324543'
              // },
              // {
              //   type: 'input',
              //   label: '住所地',
              //   span: 12,
              //   display: true,
              //   prop: 'homeAddress',
              //   value: '北京市朝阳区*路**小区**号楼**门**号'
              // },
              // {
              //   type: 'input',
              //   label: '户籍所在地',
              //   span: 12,
              //   display: true,
              //   prop: 'laohomeAddress',
              //   value: '陕西省西安市碑林区**巷**楼**单元**层**号'
              // },
              // {
              //   type: 'input',
              //   label: '受教育情况',
              //   value: '大专',
              //   span: 12,
              //   display: true,
              //   prop: 'jiaoyu'
              // },
              // {
              //   type: 'array',
              //   label: '关联人',
              //   span: 24,
              //   display: true,
              //   prop: 'relevantMan',
              //   placeholder: '如：张某某-父亲'
              //   // value: '张某某-大哥'
              // },
              // {
              //   type: 'select',
              //   label: '相关人员',
              //   dicData: [
              //     {
              //       label: '蒋某某',
              //       value: '0'
              //     },
              //     {
              //       label: '李四',
              //       value: '1'
              //     },
              //     {
              //       label: '王五',
              //       value: '2'
              //     },
              //     {
              //       label: '张三',
              //       value: '3'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '关联关系',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'select',
              //   label: '智慧受案',
              //   dicData: [
              //     {
              //       label: '选项一',
              //       value: '0'
              //     },
              //     {
              //       label: '选项二',
              //       value: '1'
              //     },
              //     {
              //       label: '选项三',
              //       value: '2'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '引用',
              //   readonly: true,
              //   span: 24,
              //   display: true,
              //   prop: 'quote'
              // },
              // {
              //   type: 'color',
              //   label: '颜色',
              //   span: 24,
              //   display: true,
              //   prop: 'color'
              // },
              // {
              //   type: 'datetime',
              //   label: '任务提醒',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'textarea',
              //   label: '备注',
              //   span: 24,
              //   display: true,
              //   prop: 'desc'
              // }
            ],
            labelPosition: 'top',
            labelSuffix: '：',
            labelWidth: 120,
            gutter: 0,
            menuBtn: true,
            submitBtn: false,
            submitText: '保存',
            emptyBtn: false,
            emptyText: '清空',
            menuPosition: 'right'
          },
          "时间": {
            column: [
              // {
              //   type: 'input',
              //   label: '标题',
              //   span: 24,
              //   display: true,
              //   prop: 'title',
              //   required: true,
              //   rules: [
              //     {
              //       required: true,
              //       message: '标题必须填写'
              //     }
              //   ]
              // },
              {
                type: 'input',
                label: '原文',
                span: 24,
                display: true,
                value: '2017年5月23日',
                // disabled: true,
                prop: 'book'
              },
              {
                type: 'select',
                label: '类型',
                disabled: true,
                value: '时间',
                dicData: [
                  {
                    label: '时间',
                    value: '时间'
                  },
                  {
                    label: '地点',
                    value: '地点'
                  },
                  {
                    label: '人物',
                    value: '人物'
                  },
                  {
                    label: '案情',
                    value: '案情'
                  },
                  {
                    label: '证据',
                    value: '证据'
                  },
                  {
                    label: '涉案金额',
                    value: '涉案金额'
                  },
                  {
                    label: '问题',
                    value: '问题'
                  },
                  {
                    label: '其他',
                    value: '其他'
                  },
                ],
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'type',
                multiple: false,
                clearable: true,
                filterable: true,
                required: false,
                rules: [
                  {
                    required: false,
                    message: '请选择标签'
                  }
                ],
              },
              {
                type: 'select',
                label: '标签',
                value: ["拘留日期"],
                dicData: [
                  {
                    label: '案发时间',
                    value: '案发时间'
                  },
                  {
                    label: '报案时间',
                    value: '报案时间'
                  },
                  {
                    label: '立案时间',
                    value: '立案时间'
                  },
                  {
                    label: '拘留日期',
                    value: '拘留日期'
                  },
                ],
                cascaderItem: [],
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'tag',
                multiple: true,
                filterable: true,
                clearable: true
              },
              {
                type: 'color',
                label: '颜色选择器',
                value: 'rgba(255, 215, 0, 1)',
                span: 12,
                display: true,
                prop: 'color'
              },
              {
                type: 'textarea',
                label: '备注',
                span: 24,
                display: true,
                value: '',
                prop: 'remark'
              },
              // {
              //   type: 'input',
              //   label: '姓名',
              //   span: 12,
              //   display: true,
              //   prop: 'name',
              //   change: ({value,column}) => {
              //     console.log('值改变',value,column)
              //   },
              // },
              // {
              //   type: 'input',
              //   label: '性别',
              //   span: 12,
              //   display: true,
              //   prop: 'sex',
              //   value: '男'
              // },
              // {
              //   type: 'input',
              //   label: '民族',
              //   span: 12,
              //   display: true,
              //   prop: 'minzu',
              //   value: '汉族'
              // },
              // {
              //   type: 'input',
              //   label: '出生日期',
              //   span: 12,
              //   display: true,
              //   prop: 'borthDate',
              //   value: '1980-10-3'
              // },
              // {
              //   type: 'input',
              //   label: '证件号',
              //   span: 12,
              //   display: true,
              //   prop: 'idCard',
              //   value: '23321123324543'
              // },
              // {
              //   type: 'input',
              //   label: '住所地',
              //   span: 12,
              //   display: true,
              //   prop: 'homeAddress',
              //   value: '北京市朝阳区*路**小区**号楼**门**号'
              // },
              // {
              //   type: 'input',
              //   label: '户籍所在地',
              //   span: 12,
              //   display: true,
              //   prop: 'laohomeAddress',
              //   value: '陕西省西安市碑林区**巷**楼**单元**层**号'
              // },
              // {
              //   type: 'input',
              //   label: '受教育情况',
              //   value: '大专',
              //   span: 12,
              //   display: true,
              //   prop: 'jiaoyu'
              // },
              // {
              //   type: 'array',
              //   label: '关联人',
              //   span: 24,
              //   display: true,
              //   prop: 'relevantMan',
              //   placeholder: '如：张某某-父亲'
              //   // value: '张某某-大哥'
              // },
              // {
              //   type: 'select',
              //   label: '相关人员',
              //   dicData: [
              //     {
              //       label: '蒋某某',
              //       value: '0'
              //     },
              //     {
              //       label: '李四',
              //       value: '1'
              //     },
              //     {
              //       label: '王五',
              //       value: '2'
              //     },
              //     {
              //       label: '张三',
              //       value: '3'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '关联关系',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'select',
              //   label: '智慧受案',
              //   dicData: [
              //     {
              //       label: '选项一',
              //       value: '0'
              //     },
              //     {
              //       label: '选项二',
              //       value: '1'
              //     },
              //     {
              //       label: '选项三',
              //       value: '2'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '引用',
              //   readonly: true,
              //   span: 24,
              //   display: true,
              //   prop: 'quote'
              // },
              // {
              //   type: 'color',
              //   label: '颜色',
              //   span: 24,
              //   display: true,
              //   prop: 'color'
              // },
              // {
              //   type: 'datetime',
              //   label: '任务提醒',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'textarea',
              //   label: '备注',
              //   span: 24,
              //   display: true,
              //   prop: 'desc'
              // }
            ],
            labelPosition: 'top',
            labelSuffix: '：',
            labelWidth: 120,
            gutter: 0,
            menuBtn: true,
            submitBtn: false,
            submitText: '保存',
            emptyBtn: false,
            emptyText: '清空',
            menuPosition: 'right'
          },
          "地点": {
            column: [
              // {
              //   type: 'input',
              //   label: '标题',
              //   span: 24,
              //   display: true,
              //   prop: 'title',
              //   required: true,
              //   rules: [
              //     {
              //       required: true,
              //       message: '标题必须填写'
              //     }
              //   ]
              // },
              {
                type: 'input',
                label: '原文',
                span: 24,
                display: true,
                value: '和平区看守所',
                // disabled: true,
                prop: 'book'
              },
              {
                type: 'select',
                label: '类型',
                disabled: true,
                value: '地点',
                dicData: [
                  {
                    label: '时间',
                    value: '时间'
                  },
                  {
                    label: '地点',
                    value: '地点'
                  },
                  {
                    label: '人物',
                    value: '人物'
                  },
                  {
                    label: '案情',
                    value: '案情'
                  },
                  {
                    label: '证据',
                    value: '证据'
                  },
                  {
                    label: '涉案金额',
                    value: '涉案金额'
                  },
                  {
                    label: '问题',
                    value: '问题'
                  },
                  {
                    label: '其他',
                    value: '其他'
                  },
                ],
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'type',
                multiple: false,
                clearable: true,
                filterable: true,
                required: false,
                rules: [
                  {
                    required: false,
                    message: '请选择标签'
                  }
                ],
              },
              {
                type: 'select',
                label: '标签',
                dicData: [
                  {
                    label: '现居住地',
                    value: '现居住地'
                  },
                  {
                    label: '单位地址',
                    value: '单位地址'
                  },
                  {
                    label: '户籍地',
                    value: '户籍地'
                  },
                  {
                    label: '犯罪地点',
                    value: '犯罪地点'
                  },
                  {
                    label: '羁押地',
                    value: '羁押地'
                  },
                ],
                value: ["羁押地"],
                cascaderItem: [],
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'tag',
                multiple: true,
                filterable: true,
                clearable: true
              },
              {
                type: 'color',
                label: '颜色选择器',
                value: 'rgba(255, 215, 0, 1)',
                span: 12,
                display: true,
                prop: 'color'
              },
              {
                type: 'textarea',
                label: '备注',
                span: 24,
                display: true,
                value: '',
                prop: 'remark'
              },
              // {
              //   type: 'input',
              //   label: '姓名',
              //   span: 12,
              //   display: true,
              //   prop: 'name',
              //   change: ({value,column}) => {
              //     console.log('值改变',value,column)
              //   },
              // },
              // {
              //   type: 'input',
              //   label: '性别',
              //   span: 12,
              //   display: true,
              //   prop: 'sex',
              //   value: '男'
              // },
              // {
              //   type: 'input',
              //   label: '民族',
              //   span: 12,
              //   display: true,
              //   prop: 'minzu',
              //   value: '汉族'
              // },
              // {
              //   type: 'input',
              //   label: '出生日期',
              //   span: 12,
              //   display: true,
              //   prop: 'borthDate',
              //   value: '1980-10-3'
              // },
              // {
              //   type: 'input',
              //   label: '证件号',
              //   span: 12,
              //   display: true,
              //   prop: 'idCard',
              //   value: '23321123324543'
              // },
              // {
              //   type: 'input',
              //   label: '住所地',
              //   span: 12,
              //   display: true,
              //   prop: 'homeAddress',
              //   value: '北京市朝阳区*路**小区**号楼**门**号'
              // },
              // {
              //   type: 'input',
              //   label: '户籍所在地',
              //   span: 12,
              //   display: true,
              //   prop: 'laohomeAddress',
              //   value: '陕西省西安市碑林区**巷**楼**单元**层**号'
              // },
              // {
              //   type: 'input',
              //   label: '受教育情况',
              //   value: '大专',
              //   span: 12,
              //   display: true,
              //   prop: 'jiaoyu'
              // },
              // {
              //   type: 'array',
              //   label: '关联人',
              //   span: 24,
              //   display: true,
              //   prop: 'relevantMan',
              //   placeholder: '如：张某某-父亲'
              //   // value: '张某某-大哥'
              // },
              // {
              //   type: 'select',
              //   label: '相关人员',
              //   dicData: [
              //     {
              //       label: '蒋某某',
              //       value: '0'
              //     },
              //     {
              //       label: '李四',
              //       value: '1'
              //     },
              //     {
              //       label: '王五',
              //       value: '2'
              //     },
              //     {
              //       label: '张三',
              //       value: '3'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '关联关系',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'select',
              //   label: '智慧受案',
              //   dicData: [
              //     {
              //       label: '选项一',
              //       value: '0'
              //     },
              //     {
              //       label: '选项二',
              //       value: '1'
              //     },
              //     {
              //       label: '选项三',
              //       value: '2'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '引用',
              //   readonly: true,
              //   span: 24,
              //   display: true,
              //   prop: 'quote'
              // },
              // {
              //   type: 'color',
              //   label: '颜色',
              //   span: 24,
              //   display: true,
              //   prop: 'color'
              // },
              // {
              //   type: 'datetime',
              //   label: '任务提醒',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'textarea',
              //   label: '备注',
              //   span: 24,
              //   display: true,
              //   prop: 'desc'
              // }
            ],
            labelPosition: 'top',
            labelSuffix: '：',
            labelWidth: 120,
            gutter: 0,
            menuBtn: true,
            submitBtn: false,
            submitText: '保存',
            emptyBtn: false,
            emptyText: '清空',
            menuPosition: 'right'
          },
          /*"案情": {
            column: [
              {
                type: 'textarea',
                label: '原文',
                span: 24,
                display: true,
                prop: 'book'
              },
              {
                type: 'select',
                label: '类型',
                dicData: [
                  {
                    label: '时间',
                    value: '0'
                  },
                  {
                    label: '地点',
                    value: '1'
                  },
                  {
                    label: '人物',
                    value: '2'
                  },
                  {
                    label: '案情',
                    value: '3'
                  },
                  {
                    label: '证据',
                    value: '4'
                  },
                  {
                    label: '涉案金额',
                    value: '4'
                  },
                  {
                    label: '问题',
                    value: '5'
                  },
                  {
                    label: '其他',
                    value: '5'
                  },
                ],
                cascaderItem: [],
                span: 24,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'type',
                multiple: false,
                clearable: true,
                filterable: true,
                required: false,
                rules: [
                  {
                    required: false,
                    message: '请选择标签'
                  }
                ],
              },
              {
                type: 'select',
                label: '标签',
                dicData: [
                  {
                    label: '犯罪嫌疑人',
                    value: ' 犯罪嫌疑人'
                  },
                  {
                    label: '证人',
                    value: '证人'
                  },
                  {
                    label: '被害人',
                    value: '被害人'
                  },
                  {
                    label: '案发时间',
                    value: '案发时间'
                  },
                  {
                    label: '报案时间',
                    value: '报案时间'
                  },
                  {
                    label: '立案时间',
                    value: '立案时间'
                  },
                  {
                    label: '现居住地',
                    value: '现居住地'
                  },
                  {
                    label: '单位地址',
                    value: '单位地址'
                  },
                  {
                    label: '户籍地',
                    value: '户籍地'
                  },
                  {
                    label: '犯罪地点',
                    value: '犯罪地点'
                  },
                  {
                    label: '损失金额',
                    value: '损失金额'
                  },
                  {
                    label: '投资金额',
                    value: '投资金额'
                  }
                ],
                cascaderItem: [],
                span: 24,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'tag',
                multiple: true,
                filterable: true,
                clearable: true
              },
              {
                type: 'select',
                label: '归属',
                multiple: true,
                dicData: [
                  {
                    label: '蒋某某',
                    value: '0'
                  },
                  {
                    label: '李四',
                    value: '1'
                  },
                  {
                    label: '王五',
                    value: '2'
                  },
                  {
                    label: '张三',
                    value: '3'
                  }
                ],
                cascaderItem: [],
                span: 24,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'group',
                rules: []
              },
              // {
              //   type: 'select',
              //   label: '智慧受案',
              //   dicData: [
              //     {
              //       label: '选项一',
              //       value: '0'
              //     },
              //     {
              //       label: '选项二',
              //       value: '1'
              //     },
              //     {
              //       label: '选项三',
              //       value: '2'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   // appendClick: () => {
              //   //   console.log(e, this);
              //   //   console.log(this.test, this.showModal());
              //   //   debugger
              //   //   this.test[ 'a' ]();
              //   //   this.showModal()
              //   // },
              //   label: '引用',
              //   readonly: true,
              //   span: 24,
              //   display: true,
              //   prop: 'quote'
              // },
              // {
              //   type: 'color',
              //   label: '颜色',
              //   span: 24,
              //   display: true,
              //   prop: 'color'
              // },
              // {
              //   type: 'datetime',
              //   label: '任务提醒',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              {
                type: 'textarea',
                label: '备注',
                span: 24,
                display: true,
                prop: 'desc'
              }
            ],
            labelPosition: 'top',
            labelSuffix: '：',
            labelWidth: 120,
            gutter: 0,
            menuBtn: true,
            submitBtn: false,
            submitText: '保存',
            emptyBtn: false,
            emptyText: '清空',
            menuPosition: 'right'
          },*/
          "证据": {
            column: [
              // {
              //   type: 'input',
              //   label: '标题',
              //   span: 24,
              //   display: true,
              //   prop: 'title',
              //   required: true,
              //   rules: [
              //     {
              //       required: true,
              //       message: '标题必须填写'
              //     }
              //   ]
              // },
              {
                type: 'input',
                label: '原文',
                span: 24,
                display: true,
                value: 'XXX银行转账记录',
                // disabled: true,
                prop: 'book'
              },
              {
                type: 'select',
                label: '类型',
                disabled: true,
                value: '证据',
                dicData: [
                  {
                    label: '时间',
                    value: '时间'
                  },
                  {
                    label: '地点',
                    value: '地点'
                  },
                  {
                    label: '人物',
                    value: '人物'
                  },
                  {
                    label: '案情',
                    value: '案情'
                  },
                  {
                    label: '证据',
                    value: '证据'
                  },
                  {
                    label: '涉案金额',
                    value: '涉案金额'
                  },
                  {
                    label: '问题',
                    value: '问题'
                  },
                  {
                    label: '其他',
                    value: '其他'
                  },
                ],
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'type',
                multiple: false,
                clearable: true,
                filterable: true,
                required: false,
                rules: [
                  {
                    required: false,
                    message: '请选择标签'
                  }
                ],
              },
              {
                type: 'select',
                label: '标签',
                value: ['书证'],
                dicData: [
                  {
                    label: '书证',
                    value: '0'
                  },
                  {
                    label: '物证',
                    value: '1'
                  },
                  {
                    label: '证人证言',
                    value: '2'
                  },
                  {
                    label: '被害人陈述',
                    value: '3'
                  },
                  {
                    label: '被告人供述和辩解',
                    value: '4'
                  },
                  {
                    label: '鉴定意见',
                    value: '5'
                  },
                  {
                    label: '侦查实验等笔录',
                    value: '6'
                  },
                  {
                    label: '其他',
                    value: '7'
                  },
                ],
                cascaderItem: [],
                span: 12,
                display: true,
                multiple: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'tag',
                rules: []
              },
              {
                type: 'color',
                label: '颜色选择器',
                value: 'rgba(255, 215, 0, 1)',
                span: 12,
                display: true,
                prop: 'color'
              },
              {
                type: 'textarea',
                label: '备注',
                span: 24,
                display: true,
                value: '',
                prop: 'remark'
              },
              // {
              //   type: 'input',
              //   label: '姓名',
              //   span: 12,
              //   display: true,
              //   prop: 'name',
              //   change: ({value,column}) => {
              //     console.log('值改变',value,column)
              //   },
              // },
              // {
              //   type: 'input',
              //   label: '性别',
              //   span: 12,
              //   display: true,
              //   prop: 'sex',
              //   value: '男'
              // },
              // {
              //   type: 'input',
              //   label: '民族',
              //   span: 12,
              //   display: true,
              //   prop: 'minzu',
              //   value: '汉族'
              // },
              // {
              //   type: 'input',
              //   label: '出生日期',
              //   span: 12,
              //   display: true,
              //   prop: 'borthDate',
              //   value: '1980-10-3'
              // },
              // {
              //   type: 'input',
              //   label: '证件号',
              //   span: 12,
              //   display: true,
              //   prop: 'idCard',
              //   value: '23321123324543'
              // },
              // {
              //   type: 'input',
              //   label: '住所地',
              //   span: 12,
              //   display: true,
              //   prop: 'homeAddress',
              //   value: '北京市朝阳区*路**小区**号楼**门**号'
              // },
              // {
              //   type: 'input',
              //   label: '户籍所在地',
              //   span: 12,
              //   display: true,
              //   prop: 'laohomeAddress',
              //   value: '陕西省西安市碑林区**巷**楼**单元**层**号'
              // },
              // {
              //   type: 'input',
              //   label: '受教育情况',
              //   value: '大专',
              //   span: 12,
              //   display: true,
              //   prop: 'jiaoyu'
              // },
              // {
              //   type: 'array',
              //   label: '关联人',
              //   span: 24,
              //   display: true,
              //   prop: 'relevantMan',
              //   placeholder: '如：张某某-父亲'
              //   // value: '张某某-大哥'
              // },
              // {
              //   type: 'select',
              //   label: '相关人员',
              //   dicData: [
              //     {
              //       label: '蒋某某',
              //       value: '0'
              //     },
              //     {
              //       label: '李四',
              //       value: '1'
              //     },
              //     {
              //       label: '王五',
              //       value: '2'
              //     },
              //     {
              //       label: '张三',
              //       value: '3'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '关联关系',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'select',
              //   label: '智慧受案',
              //   dicData: [
              //     {
              //       label: '选项一',
              //       value: '0'
              //     },
              //     {
              //       label: '选项二',
              //       value: '1'
              //     },
              //     {
              //       label: '选项三',
              //       value: '2'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '引用',
              //   readonly: true,
              //   span: 24,
              //   display: true,
              //   prop: 'quote'
              // },
              // {
              //   type: 'color',
              //   label: '颜色',
              //   span: 24,
              //   display: true,
              //   prop: 'color'
              // },
              // {
              //   type: 'datetime',
              //   label: '任务提醒',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'textarea',
              //   label: '备注',
              //   span: 24,
              //   display: true,
              //   prop: 'desc'
              // }
            ],
            labelPosition: 'top',
            labelSuffix: '：',
            labelWidth: 120,
            gutter: 0,
            menuBtn: true,
            submitBtn: false,
            submitText: '保存',
            emptyBtn: false,
            emptyText: '清空',
            menuPosition: 'right'
          },
          "涉案金额": {
            column: [
              // {
              //   type: 'input',
              //   label: '标题',
              //   span: 24,
              //   display: true,
              //   prop: 'title',
              //   required: true,
              //   rules: [
              //     {
              //       required: true,
              //       message: '标题必须填写'
              //     }
              //   ]
              // },
              {
                type: 'input',
                label: '原文',
                span: 24,
                display: true,
                value: '17920.189万元',
                // disabled: true,
                prop: 'book'
              },
              {
                type: 'select',
                label: '类型',
                disabled: true,
                value: '涉案金额',
                dicData: [
                  {
                    label: '时间',
                    value: '时间'
                  },
                  {
                    label: '地点',
                    value: '地点'
                  },
                  {
                    label: '人物',
                    value: '人物'
                  },
                  {
                    label: '案情',
                    value: '案情'
                  },
                  {
                    label: '证据',
                    value: '证据'
                  },
                  {
                    label: '涉案金额',
                    value: '涉案金额'
                  },
                  {
                    label: '问题',
                    value: '问题'
                  },
                  {
                    label: '其他',
                    value: '其他'
                  },
                ],
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'type',
                multiple: false,
                clearable: true,
                filterable: true,
                required: false,
                rules: [
                  {
                    required: false,
                    message: '请选择标签'
                  }
                ],
              },
              {
                type: 'select',
                label: '标签',
                value: ["吸收"],
                dicData: [
                  {
                    label: '损失金额',
                    value: '损失金额'
                  },
                  {
                    label: '投资金额',
                    value: '投资金额'
                  },
                  {
                    label: '退赔',
                    value: '退赔'
                  },
                  {
                    label: '吸收',
                    value: '吸收'
                  },
                  {
                    label: '退赔金额',
                    value: '退赔金额'
                  },
                ],
                cascaderItem: [],
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'tag',
                multiple: true,
                filterable: true,
                clearable: true
              },
              {
                type: 'color',
                label: '颜色选择器',
                value: 'rgba(255, 215, 0, 1)',
                span: 12,
                display: true,
                prop: 'color'
              },
              {
                type: 'select',
                label: '归属',
                multiple: true,
                dicData: [
                  {
                    label: '张三',
                    value: '0'
                  },
                  {
                    label: '张三丰',
                    value: '1'
                  },
                ],
                cascaderItem: [],
                span: 12,
                display: true,
                filterable: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'group',
                rules: []
              },
              {
                type: 'textarea',
                label: '备注',
                span: 24,
                display: true,
                value: '',
                prop: 'remark'
              },
              // {
              //   type: 'input',
              //   label: '姓名',
              //   span: 12,
              //   display: true,
              //   prop: 'name',
              //   change: ({value,column}) => {
              //     console.log('值改变',value,column)
              //   },
              // },
              // {
              //   type: 'input',
              //   label: '性别',
              //   span: 12,
              //   display: true,
              //   prop: 'sex',
              //   value: '男'
              // },
              // {
              //   type: 'input',
              //   label: '民族',
              //   span: 12,
              //   display: true,
              //   prop: 'minzu',
              //   value: '汉族'
              // },
              // {
              //   type: 'input',
              //   label: '出生日期',
              //   span: 12,
              //   display: true,
              //   prop: 'borthDate',
              //   value: '1980-10-3'
              // },
              // {
              //   type: 'input',
              //   label: '证件号',
              //   span: 12,
              //   display: true,
              //   prop: 'idCard',
              //   value: '23321123324543'
              // },
              // {
              //   type: 'input',
              //   label: '住所地',
              //   span: 12,
              //   display: true,
              //   prop: 'homeAddress',
              //   value: '北京市朝阳区*路**小区**号楼**门**号'
              // },
              // {
              //   type: 'input',
              //   label: '户籍所在地',
              //   span: 12,
              //   display: true,
              //   prop: 'laohomeAddress',
              //   value: '陕西省西安市碑林区**巷**楼**单元**层**号'
              // },
              // {
              //   type: 'input',
              //   label: '受教育情况',
              //   value: '大专',
              //   span: 12,
              //   display: true,
              //   prop: 'jiaoyu'
              // },
              // {
              //   type: 'array',
              //   label: '关联人',
              //   span: 24,
              //   display: true,
              //   prop: 'relevantMan',
              //   placeholder: '如：张某某-父亲'
              //   // value: '张某某-大哥'
              // },
              // {
              //   type: 'select',
              //   label: '相关人员',
              //   dicData: [
              //     {
              //       label: '蒋某某',
              //       value: '0'
              //     },
              //     {
              //       label: '李四',
              //       value: '1'
              //     },
              //     {
              //       label: '王五',
              //       value: '2'
              //     },
              //     {
              //       label: '张三',
              //       value: '3'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '关联关系',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'select',
              //   label: '智慧受案',
              //   dicData: [
              //     {
              //       label: '选项一',
              //       value: '0'
              //     },
              //     {
              //       label: '选项二',
              //       value: '1'
              //     },
              //     {
              //       label: '选项三',
              //       value: '2'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '引用',
              //   readonly: true,
              //   span: 24,
              //   display: true,
              //   prop: 'quote'
              // },
              // {
              //   type: 'color',
              //   label: '颜色',
              //   span: 24,
              //   display: true,
              //   prop: 'color'
              // },
              // {
              //   type: 'datetime',
              //   label: '任务提醒',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'textarea',
              //   label: '备注',
              //   span: 24,
              //   display: true,
              //   prop: 'desc'
              // }
            ],
            labelPosition: 'top',
            labelSuffix: '：',
            labelWidth: 120,
            gutter: 0,
            menuBtn: true,
            submitBtn: false,
            submitText: '保存',
            emptyBtn: false,
            emptyText: '清空',
            menuPosition: 'right'
          },
          "疑问": {
            column: [
              // {
              //   type: 'input',
              //   label: '标题',
              //   span: 24,
              //   display: true,
              //   prop: 'title',
              //   required: true,
              //   rules: [
              //     {
              //       required: true,
              //       message: '标题必须填写'
              //     }
              //   ]
              // },
              {
                type: 'input',
                label: '原文',
                span: 24,
                display: true,
                value: '实际损失17920.189元',
                // disabled: true,
                prop: 'book'
              },
              {
                type: 'select',
                label: '类型',
                value: '疑问',
                disabled: true,
                dicData: [
                  {
                    label: '时间',
                    value: '时间'
                  },
                  {
                    label: '地点',
                    value: '地点'
                  },
                  {
                    label: '人物',
                    value: '人物'
                  },
                  {
                    label: '案情',
                    value: '案情'
                  },
                  {
                    label: '证据',
                    value: '证据'
                  },
                  {
                    label: '涉案金额',
                    value: '涉案金额'
                  },
                  {
                    label: '问题',
                    value: '问题'
                  },
                  {
                    label: '其他',
                    value: '其他'
                  },
                ],
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'type',
                multiple: false,
                clearable: true,
                filterable: true,
                required: false,
                rules: [
                  {
                    required: false,
                    message: '请选择标签'
                  }
                ],
              },
              // {
              //   type: 'select',
              //   label: '标签',
              //   dicData: [
              //     {
              //       label: '犯罪嫌疑人',
              //       value: ' 犯罪嫌疑人'
              //     },
              //     {
              //       label: '证人',
              //       value: '证人'
              //     },
              //     {
              //       label: '被害人',
              //       value: '被害人'
              //     },
              //     {
              //       label: '报案人',
              //       value: '报案人'
              //     },
              //   ],
              //   value: "犯罪嫌疑人",
              //   cascaderItem: [],
              //   span: 12,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'tag',
              //   multiple: true,
              //   filterable: true,
              //   clearable: true
              // },
              {
                type: 'color',
                label: '颜色选择器',
                value: 'rgba(255, 215, 0, 1)',
                span: 12,
                display: true,
                prop: 'color'
              },
              {
                type: 'select',
                label: '询问人',
                value: ["张检察官"],
                dicData: [
                  {
                    label: '张检察官',
                    value: '0'
                  },
                  {
                    label: '李检察官',
                    value: '1'
                  },
                  {
                    label: '王检察官',
                    value: '2'
                  },
                ],
                cascaderItem: [],
                span: 12,
                display: true,
                filterable: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'group',
                multiple: true,
                rules: []
              },
              {
                type: 'textarea',
                label: '备注',
                span: 24,
                display: true,
                value: '',
                prop: 'remark'
              },
              // {
              //   type: 'input',
              //   label: '姓名',
              //   span: 12,
              //   display: true,
              //   prop: 'name',
              //   change: ({value,column}) => {
              //     console.log('值改变',value,column)
              //   },
              // },
              // {
              //   type: 'input',
              //   label: '性别',
              //   span: 12,
              //   display: true,
              //   prop: 'sex',
              //   value: '男'
              // },
              // {
              //   type: 'input',
              //   label: '民族',
              //   span: 12,
              //   display: true,
              //   prop: 'minzu',
              //   value: '汉族'
              // },
              // {
              //   type: 'input',
              //   label: '出生日期',
              //   span: 12,
              //   display: true,
              //   prop: 'borthDate',
              //   value: '1980-10-3'
              // },
              // {
              //   type: 'input',
              //   label: '证件号',
              //   span: 12,
              //   display: true,
              //   prop: 'idCard',
              //   value: '23321123324543'
              // },
              // {
              //   type: 'input',
              //   label: '住所地',
              //   span: 12,
              //   display: true,
              //   prop: 'homeAddress',
              //   value: '北京市朝阳区*路**小区**号楼**门**号'
              // },
              // {
              //   type: 'input',
              //   label: '户籍所在地',
              //   span: 12,
              //   display: true,
              //   prop: 'laohomeAddress',
              //   value: '陕西省西安市碑林区**巷**楼**单元**层**号'
              // },
              // {
              //   type: 'input',
              //   label: '受教育情况',
              //   value: '大专',
              //   span: 12,
              //   display: true,
              //   prop: 'jiaoyu'
              // },
              // {
              //   type: 'array',
              //   label: '关联人',
              //   span: 24,
              //   display: true,
              //   prop: 'relevantMan',
              //   placeholder: '如：张某某-父亲'
              //   // value: '张某某-大哥'
              // },
              // {
              //   type: 'select',
              //   label: '相关人员',
              //   dicData: [
              //     {
              //       label: '蒋某某',
              //       value: '0'
              //     },
              //     {
              //       label: '李四',
              //       value: '1'
              //     },
              //     {
              //       label: '王五',
              //       value: '2'
              //     },
              //     {
              //       label: '张三',
              //       value: '3'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '关联关系',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'select',
              //   label: '智慧受案',
              //   dicData: [
              //     {
              //       label: '选项一',
              //       value: '0'
              //     },
              //     {
              //       label: '选项二',
              //       value: '1'
              //     },
              //     {
              //       label: '选项三',
              //       value: '2'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '引用',
              //   readonly: true,
              //   span: 24,
              //   display: true,
              //   prop: 'quote'
              // },
              // {
              //   type: 'color',
              //   label: '颜色',
              //   span: 24,
              //   display: true,
              //   prop: 'color'
              // },
              // {
              //   type: 'datetime',
              //   label: '任务提醒',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'textarea',
              //   label: '备注',
              //   span: 24,
              //   display: true,
              //   prop: 'desc'
              // }
            ],
            labelPosition: 'top',
            labelSuffix: '：',
            labelWidth: 120,
            gutter: 0,
            menuBtn: true,
            submitBtn: false,
            submitText: '保存',
            emptyBtn: false,
            emptyText: '清空',
            menuPosition: 'right'
          },
          "其他": {
            column: [
              // {
              //   type: 'input',
              //   label: '标题',
              //   span: 24,
              //   display: true,
              //   prop: 'title',
              //   required: true,
              //   rules: [
              //     {
              //       required: true,
              //       message: '标题必须填写'
              //     }
              //   ]
              // },
              {
                type: 'input',
                label: '原文',
                span: 24,
                display: true,
                value: '张三',
                // disabled: true,
                prop: 'book'
              },
              {
                type: 'select',
                label: '类型',
                disabled: true,
                value: '其他',
                dicData: [
                  {
                    label: '时间',
                    value: '时间'
                  },
                  {
                    label: '地点',
                    value: '地点'
                  },
                  {
                    label: '人物',
                    value: '人物'
                  },
                  {
                    label: '案情',
                    value: '案情'
                  },
                  {
                    label: '证据',
                    value: '证据'
                  },
                  {
                    label: '涉案金额',
                    value: '涉案金额'
                  },
                  {
                    label: '问题',
                    value: '问题'
                  },
                  {
                    label: '其他',
                    value: '其他'
                  },
                ],
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'type',
                multiple: false,
                clearable: true,
                filterable: true,
                required: false,
                rules: [
                  {
                    required: false,
                    message: '请选择标签'
                  }
                ],
              },
              {
                type: 'select',
                label: '标签',
                dicData: [
                  {
                    label: '犯罪嫌疑人',
                    value: ' 犯罪嫌疑人'
                  },
                  {
                    label: '证人',
                    value: '证人'
                  },
                  {
                    label: '被害人',
                    value: '被害人'
                  },
                  {
                    label: '报案人',
                    value: '报案人'
                  },
                ],
                value: "犯罪嫌疑人",
                cascaderItem: [],
                span: 12,
                display: true,
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'tag',
                multiple: true,
                filterable: true,
                clearable: true
              },
              {
                type: 'color',
                label: '颜色选择器',
                value: 'rgba(255, 215, 0, 1)',
                span: 12,
                display: true,
                prop: 'color'
              },
              {
                type: 'textarea',
                label: '备注',
                span: 24,
                display: true,
                value: '',
                prop: 'remark'
              },
              // {
              //   type: 'input',
              //   label: '姓名',
              //   span: 12,
              //   display: true,
              //   prop: 'name',
              //   change: ({value,column}) => {
              //     console.log('值改变',value,column)
              //   },
              // },
              // {
              //   type: 'input',
              //   label: '性别',
              //   span: 12,
              //   display: true,
              //   prop: 'sex',
              //   value: '男'
              // },
              // {
              //   type: 'input',
              //   label: '民族',
              //   span: 12,
              //   display: true,
              //   prop: 'minzu',
              //   value: '汉族'
              // },
              // {
              //   type: 'input',
              //   label: '出生日期',
              //   span: 12,
              //   display: true,
              //   prop: 'borthDate',
              //   value: '1980-10-3'
              // },
              // {
              //   type: 'input',
              //   label: '证件号',
              //   span: 12,
              //   display: true,
              //   prop: 'idCard',
              //   value: '23321123324543'
              // },
              // {
              //   type: 'input',
              //   label: '住所地',
              //   span: 12,
              //   display: true,
              //   prop: 'homeAddress',
              //   value: '北京市朝阳区*路**小区**号楼**门**号'
              // },
              // {
              //   type: 'input',
              //   label: '户籍所在地',
              //   span: 12,
              //   display: true,
              //   prop: 'laohomeAddress',
              //   value: '陕西省西安市碑林区**巷**楼**单元**层**号'
              // },
              // {
              //   type: 'input',
              //   label: '受教育情况',
              //   value: '大专',
              //   span: 12,
              //   display: true,
              //   prop: 'jiaoyu'
              // },
              // {
              //   type: 'array',
              //   label: '关联人',
              //   span: 24,
              //   display: true,
              //   prop: 'relevantMan',
              //   placeholder: '如：张某某-父亲'
              //   // value: '张某某-大哥'
              // },
              // {
              //   type: 'select',
              //   label: '相关人员',
              //   dicData: [
              //     {
              //       label: '蒋某某',
              //       value: '0'
              //     },
              //     {
              //       label: '李四',
              //       value: '1'
              //     },
              //     {
              //       label: '王五',
              //       value: '2'
              //     },
              //     {
              //       label: '张三',
              //       value: '3'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '关联关系',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'select',
              //   label: '智慧受案',
              //   dicData: [
              //     {
              //       label: '选项一',
              //       value: '0'
              //     },
              //     {
              //       label: '选项二',
              //       value: '1'
              //     },
              //     {
              //       label: '选项三',
              //       value: '2'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '引用',
              //   readonly: true,
              //   span: 24,
              //   display: true,
              //   prop: 'quote'
              // },
              // {
              //   type: 'color',
              //   label: '颜色',
              //   span: 24,
              //   display: true,
              //   prop: 'color'
              // },
              // {
              //   type: 'datetime',
              //   label: '任务提醒',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'textarea',
              //   label: '备注',
              //   span: 24,
              //   display: true,
              //   prop: 'desc'
              // }
            ],
            labelPosition: 'top',
            labelSuffix: '：',
            labelWidth: 120,
            gutter: 0,
            menuBtn: true,
            submitBtn: false,
            submitText: '保存',
            emptyBtn: false,
            emptyText: '清空',
            menuPosition: 'right'
          },
          "关系": {
            column: [
              {
                type: 'input',
                label: '关系名称',
                span: 12,
                display: true,
                value: '羁押地',
                prop: 'title',
                required: true,
                rules: [
                  {
                    required: true,
                    message: '标题必须填写'
                  }
                ]
              },
              // {
              //   type: 'select',
              //   label: '标签',
              //   dicData: [
              //     {
              //       label: '犯罪嫌疑人',
              //       value: ' 犯罪嫌疑人'
              //     },
              //     {
              //       label: '证人',
              //       value: '证人'
              //     },
              //     {
              //       label: '被害人',
              //       value: '被害人'
              //     },
              //   ],
              //   cascaderItem: [],
              //   span: 12,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'tag',
              //   multiple: true,
              //   filterable: true,
              //   clearable: true
              // },
              {
                type: 'input',
                label: '关联项',
                span: 12,
                disabled: true,
                value: '张三——和平区看守所',
                display: true,
                prop: 'tag3'
              },
              {
                type: 'select',
                label: '样式',
                // disabled: true,
                dicData: [
                  {
                    label: '实线',
                    value: '实线'
                  },
                  {
                    label: '虚线',
                    value: '虚线'
                  },
                  {
                    label: '加粗',
                    value: '加粗'
                  },
                  {
                    label: '变细',
                    value: '变细'
                  },
                  // {
                  //   label: '证据',
                  //   value: '证据'
                  // },
                  // {
                  //   label: '涉案金额',
                  //   value: '涉案金额'
                  // },
                  // {
                  //   label: '问题',
                  //   value: '问题'
                  // },
                  // {
                  //   label: '其他',
                  //   value: '其他'
                  // },
                ],
                span: 12,
                display: true,
                value: '实线',
                props: {
                  label: 'label',
                  value: 'value'
                },
                prop: 'style',
                multiple: false,
                clearable: true,
                filterable: true,
                required: false,
                rules: [
                  {
                    required: false,
                    message: '请选择标签'
                  }
                ],
              },
              {
                type: 'color',
                label: '颜色选择器',
                span: 12,
                display: true,
                value: 'rgba(249, 209, 176, 1)',
                prop: 'color'
              },
              // {
              //   type: 'select',
              //   label: '标签',
              //   dicData: [
              //     {
              //       label: '犯罪嫌疑人',
              //       value: ' 犯罪嫌疑人'
              //     },
              //     {
              //       label: '证人',
              //       value: '证人'
              //     },
              //     {
              //       label: '被害人',
              //       value: '被害人'
              //     },
              //   ],
              //   cascaderItem: [],
              //   span: 12,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'tag',
              //   multiple: true,
              //   filterable: true,
              //   clearable: true
              // },
              // {
              //   type: 'select',
              //   label: '归属',
              //   multiple: true,
              //   dicData: [
              //     {
              //       label: '张三',
              //       value: '0'
              //     },
              //     {
              //       label: '张亚平',
              //       value: '1'
              //     },
              //     {
              //       label: '张三',
              //       value: '2'
              //     },
              //   ],
              //   cascaderItem: [],
              //   span: 12,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'test2',
              //   rules: []
              // },
              // {
              //   type: 'select',
              //   label: '相关人员',
              //   dicData: [
              //     {
              //       label: '蒋某某',
              //       value: '0'
              //     },
              //     {
              //       label: '李四',
              //       value: '1'
              //     },
              //     {
              //       label: '王五',
              //       value: '2'
              //     },
              //     {
              //       label: '张三',
              //       value: '3'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   label: '关联关系',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              // {
              //   type: 'select',
              //   label: '智慧受案',
              //   dicData: [
              //     {
              //       label: '选项一',
              //       value: '0'
              //     },
              //     {
              //       label: '选项二',
              //       value: '1'
              //     },
              //     {
              //       label: '选项三',
              //       value: '2'
              //     }
              //   ],
              //   cascaderItem: [],
              //   span: 24,
              //   display: true,
              //   props: {
              //     label: 'label',
              //     value: 'value'
              //   },
              //   prop: 'group',
              //   rules: []
              // },
              // {
              //   type: 'input',
              //   // appendClick: () => {
              //   //   console.log(e, this);
              //   //   console.log(this.test, this.showModal());
              //   //   debugger
              //   //   this.test[ 'a' ]();
              //   //   this.showModal()
              //   // },
              //   label: '引用',
              //   readonly: true,
              //   span: 24,
              //   display: true,
              //   prop: 'quote'
              // },
              // {
              //   type: 'color',
              //   label: '颜色',
              //   span: 24,
              //   display: true,
              //   prop: 'color'
              // },
              // {
              //   type: 'datetime',
              //   label: '任务提醒',
              //   span: 24,
              //   display: true,
              //   prop: 'task'
              // },
              {
                type: 'textarea',
                label: '备注',
                span: 24,
                display: true,
                prop: 'desc'
              }
            ],
            labelPosition: 'top',
            labelSuffix: '：',
            labelWidth: 120,
            gutter: 0,
            menuBtn: true,
            submitBtn: false,
            submitText: '保存',
            emptyBtn: false,
            emptyText: '清空',
            menuPosition: 'right'
          },
        },
      }
    },
    computed: {
      // 是否展示收缩侧边栏
      isShowFold(){
        return this.isShow1 || this.isShow2
      },
      markConfigData(){
        return this.markOptionData[ this.toodsType || '其他' ] || [];
        // return []
      },
      extendMarkConfigData(){
        // return this.configData.extendMarkOptionData[ this.toodsType || '其他' ] || [];
        return []
      },
    },
    watch: {
      tabs3( val ){
        // this.isChange = val != 'B';
      },
    },
    methods: {
      showdialogVisible1(){
        this.dialogVisible1 = true;
      },
      isShowBorder( item ){
        if (item.name == '疑问') {
          return true
        }
      },
      showColorCard(){
        this.isShowColorCard = true;
      },
      showCard(){
        this.isShowCard = true;
      },
      // 工具栏icon点击事件
      iconClick( { title } ){
        if (title == '隐藏标注' || title == '清除所有标注') {
          this.showanka = this.showanka == 4? 1: 4;
        }
        if (title == '解除关系') {
          this.showanka = this.showanka == 5? 1: 5;
        }
        if (title == '撤销') {
          this.showanka = 1;
        }
        // this.isShowCard = false;
        this.toodsType && (this.isShowCard = false);
      },
      querySearch( queryString, cb ){
        var restaurants = this.restaurants;
        var results = queryString? restaurants.filter(this.createFilter(queryString)): restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter( queryString ){
        return ( restaurant ) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll(){
        return [
          { "value": "张检察官", "address": "张检察官" },
          { "value": "李检察官", "address": "李检察官" },
        ];
      },
      handleSelect( item ){
        console.log(item);
      },
      initMind(){
        var mind = {
          "meta": {
            "name": "demo",
            "author": "hizzgdev@163.com",
            "version": "0.2",
          },
          "format": "node_array",
          "data": [
            { "id": "root", "isroot": true, "topic": "jsMind" },

            { "id": "sub1", "parentid": "root", "topic": "sub1", "background-color": "#0000ff" },
            { "id": "sub11", "parentid": "sub1", "topic": "sub11" },
            { "id": "sub12", "parentid": "sub1", "topic": "sub12" },
            { "id": "sub13", "parentid": "sub1", "topic": "sub13" },

            { "id": "sub2", "parentid": "root", "topic": "sub2" },
            { "id": "sub21", "parentid": "sub2", "topic": "sub21" },
            { "id": "sub22", "parentid": "sub2", "topic": "sub22", "foreground-color": "#33ff33" },

            { "id": "sub3", "parentid": "root", "topic": "sub3" },
          ]
        };
        var options = {
          container: 'jsmind_container',
          editable: true,
          theme: 'primary'
        }
        var jm = jsMind.show(options, mind);
        // jm.set_readonly(true);
        // var mind_data = jm.get_data();
        // alert(mind_data);
        jm.add_node("sub2", "sub23", "new node", { "background-color": "red" });
        jm.set_node_color('sub21', 'green', '#ccc');
      },
      // 修改标注表单
      changeMark( e ){
        this.formData = {
          sex: '',
          minzu: '',
          borthDate: '',
          idCard: '',
          homeAddress: '',
          laohomeAddress: '',
          jiaoyu: '',
          tag: [],
          book: '张三'
        }
      },
      jump( item ){
        // debugger
        // document.getElementById("centerDOm").scroll1 = 0;
        this.$refs.scroll2.scrollTop = 0;
        this.$refs.scroll1.scrollTop = 0;
        // console.log(this.$refs.scroll1);
      },
      showSeeksGraph1( query ){
        var __graph_json_data = {
          rootId: '2',
          nodes: [
            { id: '1', name: '节点-1', text: '案情组', },
            { id: '2', name: '节点-2', },
            { id: '4', name: '节点-4', },
            { id: '6', name: '节点-6', },
            { id: '7', name: '节点-7', },
            { id: '8', name: '节点-8', },
            { id: '9', name: '节点-9', }
          ],
          links: [
            { from: '1', to: '2', text: '' },
            { from: '4', to: '2', text: '' },
            { from: '6', to: '2', text: '' },
            { from: '7', to: '2', text: '' },
            { from: '8', to: '2', text: '' },
            { from: '9', to: '2', text: '' },
          ]
        };
        this.$refs.seeksRelationGraph1.setJsonData(__graph_json_data, ( seeksRGGraph ) => {
          // 这些写上当图谱初始化完成后需要执行的代码
        })
      },
      toMake(){
        this.$router.push({
          path: '/documentMaking/index',
        })
      },
      mouseupText( e ){
        let txt = window.getSelection(); //获取鼠标划过的对象
        if (txt.toString().length > 0) {
          let start = txt.anchorOffset; //获取划过的文字在文本中的起始位置
          let end = txt.focusOffset;       //获取划过的文字在文本的结束位置
          this.text = txt.toString();
          // debugger
          this.formData.book = txt.toString();
          // alert(start + "," + end);
          // alert(txt.toString()); //获取鼠标划过的文本
        }
      },
      // 初始化右键菜单
      initMenu(){
        let menuDom = document.getElementById('menu');
        window.oncontextmenu = e => {
          //取消默认的浏览器自带右键 很重要！！
          e.preventDefault();
          // 根据事件对象中鼠标点击的位置，进行定位
          let mx = e.clientX;
          let my = e.clientY;
          // 菜单宽度
          let rmWidth = parseInt(menuDom.style.width);
          // 网页的宽度(高度用同样的方法解决)
          let pageWidth = document.documentElement.clientWidth;
          // console.log(pageWidth);
          menuDom.style.left = mx + "px";
          menuDom.style.top = my - 100 + "px";
          // if ((mx + rmWidth) < pageWidth) {
          //   menuDom.style.left = mx + "px";
          //   menuDom.style.top = my + "px";
          // } else {
          //   menuDom.style.right = mx + "px";
          //   menuDom.style.top = my + "px";
          // }
          // 不划词不能调起鼠标右键菜单;
          // this.text && (menuDom.style.display = "block");
          (menuDom.style.display = "block");
        };
        //关闭右键菜单，很简单
        menuDom.onclick = e => {
          if (this.toodsType != '关系' && this.toodsType != '疑问') {
            // 用户触发click事件就可以关闭了，因为绑定在window上，按事件冒泡处理，不会影响菜单的功能
            this.hideMenu();
          }
          if (e.target.innerText) {
            this.isShowCard = true;
          }
        };
      },
      // 隐藏菜单
      hideMenu( e ){
        let menuDom = document.getElementById('menu');
        menuDom.style.display = "none";
        if (e == '修改关系' && this.guanxi == '关押地') this.showanka = 7;
        if (this.toodsType == '关系' || this.toodsType == '疑问') {
          this.isShowCard = true;
        }
        this.guanxi = '';
        this.state2 = [];
      },
      sysHandleScroll(){
        this.$refs.scrollCenter.scrollTop = this.$refs.scrollLeft.scrollTop
      },
      handleClose(){
        this.dialogVisible = false;
        this.dialogVisible1 = false;
        this.dialogVisible2 = false;
        this.dialogVisible3 = false;
        this.dialogVisible4 = false;
        this.drawer = false;
      },
      changeActive( item ){
        this.configData.iconList.map(ele => ele.active = false);
        item.active = true;
      },
      // 工具栏点击
      opendialogVisible1( { name, title, active }, index = '', type ){
        this.toodsType = title;
        this.formData.type = title;
        if (name == 'icon-search6') {
          this.dialogVisible1 = true;
          return
        }
        if (name == 'icon-lishijilu') {
          this.dialogVisible2 = true;
          return
        }
        if (name == 'icon-biaodanliebiao-14') {
          this.dialogVisible4 = true;
          return
        }
        this.configData.iconList1.map(ele => ele.active = false);
        this.configData.iconList2.map(ele => ele.active = false);
        this.configData.iconList3.map(ele => ele.active = false);
        this.configData[ `iconList${ type }` ][ index ].active = true;
      },
      handleClick(){

      },
      deleteMark( index ){
        this.configData.markListData.splice(index, 1)
      },
      showModal( item = null ){
        let text = this.text || item.book;
        this.toodsType = this.toodsType || (item && item.type) || '其他';
        item && (this.formData = item);
        if (this.toodsType == '人物') {
          this.formData.name = '张三';
          if (text.indexOf("*") == '-1') {
            this.formData.date = '2015年2月2日';
            this.formData.address = '天津市公安局和平分局';
            this.formData.event = '报案';
          }
        }
        if (this.toodsType == '时间') {
          this.formData.time = text.substring(0, text.indexOf('日') + 1);
          this.formData.event = text.substring(text.indexOf('日') + 1, text.length);
        }
        if (this.toodsType == '涉案金额') {
          this.formData.money = text.substring(0, text.indexOf('元'));
          this.formData.unit = "元";
        }
        // this.iconList.map(ele => ele.active = false);
        // this.text = '';
        // this.form1.book = '';
        // this.drawer = true;
      },
      showFold( num ){
        this[ `isShow${ num }` ] = !this[ `isShow${ num }` ];
      },
      resize(){

      },
      openDrawer(){
        this.isShowDrawer = !this.isShowDrawer;
      },
      nodeClick(){

      },
      typeHandleClick(){

      },
      fullScreen( e ){
        this.dialogVisible3 = true;
      },
      showList(){
        this.dialogVisible4 = true;
      },
      setGraphData(){
        var __graph_json_data = this.configData.__graph_json_data;
        this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, ( seeksRGGraph ) => {
          // 这些写上当图谱初始化完成后需要执行的代码
        })
      },
      showSeeksGraph(){
        var __graph_json_data = {
          rootId: 'a',
          nodes: [
            { id: 'a', text: 'A', borderColor: 'yellow' },
            { id: 'b', text: 'B', color: '#43a2f1', fontColor: 'yellow' },
            { id: 'c', text: 'C', nodeShape: 1, width: 80, height: 60 },
            { id: 'e', text: 'E', nodeShape: 0, width: 150, height: 150 }
          ],
          links: [
            { from: 'a', to: 'b', text: '关系1', color: '#43a2f1' },
            { from: 'a', to: 'c', text: '关系2' },
            { from: 'a', to: 'e', text: '关系3' },
            { from: 'b', to: 'e', color: '#67C23A' }
          ]
        };
        // 以上数据中的node和link可以参考"Node节点"和"Link关系"中的参数进行配置
        this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, ( seeksRGGraph ) => {
          // Called when the relation-graph is completed
        })
      },
      onNodeClick( nodeObject, $event ){
        console.log('onNodeClick:', nodeObject)
      },
      onLineClick( lineObject, $event ){
        console.log('onLineClick:', lineObject)
      },
      // 保存标注
      saveMark(){
        this.drawer = false;
        if (this.toodsType == '人物') {
          this.isShowMan = true;
          if (this.formData.name == '张三') {
            this.isChange = false;
          } else {
            this.createArr();
          }
        }
        if (this.toodsType == '疑问') {
          setTimeout(() => {
            this.$notify.info({
              title: '消息',
              message: '收到一条张检察官发来的消息'
            });
          }, 2000)
        }
        // if (this.toodsType == '时间') {
        //   this.isShowDate = true;
        // }
        this.configData.markListData.unshift({
          ...this.formData,
          createDate: dateFormat(new Date()),
          userName: '张检察官',
          color: '#E6A23C',
        });
      },
      // 插入马团结
      createArr(){
        let arr = [
          {
            book: '张三',
            name: '张三',
            type: '时间',
            createDate: dateFormat(new Date()),
            userName: '张检察官',
            color: '#E6A23C',
          },
          {
            book: '张三',
            name: '张三',
            type: '时间',
            createDate: dateFormat(new Date()),
            userName: '张检察官',
            color: '#E6A23C',
          },
          {
            book: '张三',
            name: '张三',
            type: '时间',
            createDate: dateFormat(new Date()),
            userName: '张检察官',
            color: '#E6A23C',
          }
        ];
        this.configData.markListData.unshift({
          book: '北京市朝阳区*路**小区**号楼**门**号',
          name: '张三',
          type: '地点',
          createDate: dateFormat(new Date()),
          userName: '张检察官',
          color: '#409EFF',
        });
        this.configData.markListData.unshift({
          book: '1980年**月**日',
          name: '张三',
          type: '时间',
          createDate: dateFormat(new Date()),
          userName: '张检察官',
          color: '#67c23a',
        });
        this.configData.markListData = [...this.configData.markListData, ...arr];
      },
      // 搜索标注列表
      searchMark( text = '' ){
        if (text) {
          this.configData.markListData = this.configData.markListData.filter(ele => ele.book.indexOf(text) != -1);
        } else {
          this.configData.markListData = configData.markListData;
        }
      }
    },
    mounted(){
      this.initMenu();
      // this.setGraphData();
      // this.initMind();
      this.restaurants = this.loadAll();
      // this.showSeeksGraph1();
    }
  }
</script>

<style>
  .border-line {
    border-bottom: 1px solid #000;
  }

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
    color: #fff;
    background-color: #4175A6;
    padding: 6px;
    border-radius: 6px;
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

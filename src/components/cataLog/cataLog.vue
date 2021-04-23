<template>
  <div>
    <el-tabs @tab-click="handleClick" type="border-card" value="目录" style="min-height: 800px;">
      <el-tab-pane label="目录" name="目录" key="目录">
        <el-input v-model="filterText"
                  style="margin-bottom: 10px;"
                  placeholder="输入关键字进行过滤">
        </el-input>
        <el-tabs v-model="activeName" @tab-click="typeHandleClick">
          <template v-for="item in configData.tabData">
            <el-tab-pane :label="item" :name="item" :key="item">
              <el-tree :key="item"
                       draggable
                       default-expand-all
                       @node-click="nodeClick"
                       class="filter-tree"
                       :data="treeData"
                       :props="defaultProps"
                       highlight-current
                       :filter-node-method="filterNode"
                       :ref="item">

                <div class="custom-tree-node" slot-scope="{ node, data }">
                  <p>
                    <i :class="node.data.icon || 'el-icon-document'" :style="node.data.style"></i>
                  </p>
                  <p class="tree-node">
                    {{ node.data.label }}
                  </p>
                  <p style="flex: 1"></p>
                  <p v-if="!node.data.isTitle">{{ node.data.indexNum }} 页</p>
                  <!--<p>
                    <i class="el-icon-edit"></i>
                  </p>-->
                </div>

                <!--<span class="custom-tree-node" slot-scope="{ node, data }">
                  <span>{{ node.label }}</span>
                  <span>
                    <el-button
                      type="text"
                      size="mini"
                      @click="() => append(data)">
                      Append
                    </el-button>
                    <el-button
                      type="text"
                      size="mini"
                      @click="() => remove(node, data)">
                      Delete
                    </el-button>
                  </span>
                </span>-->

              </el-tree>
            </el-tab-pane>
          </template>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="书签" name="书签" key="书签">
        <div>
          <div v-for="item in configData.bookTagList" :key="item" class="tag-box" @click="nodeClick({})">
            <p>{{ item.type }}：</p>
            <p style="flex: 1;overflow: hidden;text-overflow: ellipsis;white-space:nowrap">{{ item.title }}</p>
            <p>{{ item.page }}</p>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import configData from './catalogConfig'

  export default {
    name: "cataLog",
    data(){
      return {
        configData,
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        // 目录过滤关键字
        filterText: '',
        activeName: '全部',
      }
    },
    computed: {
      treeData(){
        return configData.treeData[ this.activeName ]
      }
    },
    methods: {
      filterNode( value, data ){
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleClick( e ){

      },
      // 切换目录类型
      typeHandleClick( e ){
        this.$emit('typeHandleClick', e)
      },
      // 树节点点击
      nodeClick( e ){
        this.$emit('nodeClick', e);
      },
    }
  }
</script>

<style>
  p {
    margin: 0;
    padding: 0;
  }

  .tag-box:hover {
    color: #409eff;
  }

  .tag-box {
    display: flex;
    cursor: pointer;
    line-height: 2em;
    color: #606266;
  }

  /*.el-tree-node {
    margin-bottom: 5px !important;
  }

  .el-tree-node__content {
    margin-bottom: 5px !important;
  }*/
</style>

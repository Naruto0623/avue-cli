<template>
  <div>
    <el-tabs @tab-click="handleClick" type="border-card" value="目录">
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
  </div>
</template>

<script>
  import configData from './catalogConfig'

  export default {
    name: "cataLog",
    data() {
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
      typeHandleClick(e){
        this.$emit('typeHandleClick', e)
      },
      // 树节点点击
      nodeClick(e) {
        this.$emit('nodeClick', e);
      },
      // 树节点自定义渲染
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
      },
    }
  }
</script>

<style scoped>

</style>

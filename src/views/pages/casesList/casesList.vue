<template>
  <div class="casesList">
    <el-card class="box-card">
      <avue-crud :option="option"
                 :page="page" simplePage
                 @row-dblclick="handleRowClick"
                 :data="data">
        <template slot="header">
          <el-row style="padding: 5px 0">
            <el-button size="mini" type="primary">待接收</el-button>
            <el-button size="mini" type="success">已接收</el-button>
          </el-row>
        </template>
        <!--<el-row style="padding: 5px 0">
          <el-button size="mini" type="primary">待接收</el-button>
          <el-button size="mini" type="success">已接收</el-button>
        </el-row>-->
        <template slot-scope="scope" slot="menu">
          <el-button style="margin-left:10px;" size="small" type="text" icon="el-icon-receiving" @click.native="receive">接收</el-button>
          <el-button style="margin-left:10px;" size="small" type="text" icon="el-icon-receiving" @click.native="receive">退回</el-button>
        </template>
      </avue-crud>
    </el-card>
  </div>
</template>

<script>
  import configData from './caseListConfig'

  export default {
    name: "casesList",
    data(){
      return {
        page: {
          pageSize: 10,
          // pagerCount:5,
          total: 120
        },
        data: configData.data,
        option: configData.option,
      }
    },
    methods: {
      // 案件接收
      receive( row ){
        this.handleRowClick(row);
      },
      // 案件详情跳转
      handleRowClick( row, event, column ){
        this.$router.push({
          path: '/casesCard/index',
          query: {
            name: row.name,
            type: row.type,
          }
        })
        // this.$notify({
        //   showClose: true,
        //   message: '单击'+JSON.stringify(row),
        //   type: 'success',
        // });
      },
    }
  }
</script>

<style scoped>
  .casesList {
    padding: 10px;
  }
</style>

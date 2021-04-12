<template>
  <div class="casesList">
    <el-card class="box-card">
      <avue-crud :option="option"
                 :page="page" simplePage
                 @row-dblclick="handleRowClick"
                 :data="data">
        <template slot="header">
          <el-row style="padding: 5px 0;margin-top: -50px;margin-right: 130px;text-align: right">
            <el-input
              size="mini"
              style="width: 15%;"
              placeholder="搜索此列表"
              prefix-icon="el-icon-search">
            </el-input>
          </el-row>
        </template>
        <template slot-scope="scope" slot="action">
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link" style="padding: 0 2px;border: 1px solid #dddbda;border-radius: 3px;font-size: 13px;">
              <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>接收</el-dropdown-item>
              <el-dropdown-item>退回</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <!--<el-button style="margin-left:10px;" size="small" type="text" icon="el-icon-receiving" @click.native="receive">接收</el-button>
          <el-button style="margin-left:10px;" size="small" type="text" icon="el-icon-receiving" @click.native="receive">退回</el-button>-->
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

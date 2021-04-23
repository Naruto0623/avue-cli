<template>
  <div class="home">
    <draggable>
      <el-row :gutter="12" style="margin-bottom: 12px;">
        <draggable>
          <el-col :span="18">
            <el-card class="box-card">
              <avue-data-tabs :option="configData.option4"></avue-data-tabs>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <avue-data-icons :option="configData.option2"></avue-data-icons>
            </el-card>
          </el-col>
        </draggable>
      </el-row>
      <el-row :gutter="12" style="margin-bottom: 12px;">
        <el-col :span="18">
          <el-card class="box-card">
            <div slot="header">
              <span>在办案件</span>
            </div>
            <el-row>
              <avue-crud :option="option"
                         @row-dblclick="handleRowClick"
                         :data="data">
              </avue-crud>
            </el-row>
            <div class="foot" @click="toAll">查看全部</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header">
              <span>超期预警案件</span>
            </div>
            <el-row>
              <el-col :span="14">
                <div v-for="item in configData.listData1" :key="item.name" class="item">
                  <span class="text">{{ item.name }}</span> -
                  <span>{{ item.date }}</span>
                </div>
              </el-col>
              <el-col :span="8" :offset="2">
                <div class="count-box">
                  <div class="count">8</div>
                  <div class="count-text">总计</div>
                </div>
              </el-col>
            </el-row>
            <div class="foot" @click="toAll">查看全部</div>
          </el-card>
          <!--<el-card class="box-card">
            <div slot="header">
              案件发生地分布（2340）
            </div>
            <div id="echart3" style="height: 422px;"></div>
          </el-card>-->
        </el-col>
      </el-row>
      <el-row :gutter="12" style="margin-bottom: 12px;">
        <el-col :span="18">
          <el-card class="box-card">
            <div id="echart2" style="height: 394px;"></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header">
              <span>办结案件</span>
            </div>
            <el-row>
              <div v-for="item in configData.listData2" :key="item.name" class="item">
                <span class="text">{{ item.name }}</span> -
                <span>{{ item.date }}</span>
              </div>
            </el-row>
            <div class="foot" @click="toAll">查看全部</div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <avue-data-box :option="configData.topOption"></avue-data-box>
      </el-row>
      <el-row :gutter="12" style="margin-bottom: 12px;">
        <draggable>
          <el-col :span="8">
            <!--<el-card class="box-card">
              <div slot="header">
                <span>超期预警案件</span>
              </div>
              <el-row>
                <el-col :span="12">
                  <div v-for="item in configData.listData" :key="item.name" class="item">
                    <span class="text">{{ item.name }}</span> -
                    <span>{{ item.date }}</span>
                  </div>
                </el-col>
                <el-col :span="8" :offset="4">
                  <div class="count-box">
                    <div class="count">8</div>
                    <div class="count-text">总计</div>
                  </div>
                </el-col>
              </el-row>
              <div class="foot" @click="toAll">查看全部</div>
            </el-card>-->
          </el-col>
          <el-col :span="8">
            <el-card class="box-card" style="overflow:hidden;">
              <div slot="header">
                <span>新案件动态</span>
              </div>
              <el-row>
                <el-col :span="12">
                  <div v-for="item in configData.listData" :key="item.name" class="item">
                    <span class="text">{{ item.name }}</span> -
                    <span>{{ item.date }}</span>
                  </div>
                </el-col>
                <el-col :span="10" :offset="2" style="overflow: hidden">
                  <div class="echart-box" id="echart1"></div>
                </el-col>
              </el-row>
              <div class="foot" @click="toAll">查看全部</div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div slot="header">
                <span>卷宗书签</span>
              </div>
              <el-row>
                <el-col :span="15">
                  <div v-for="item in configData.bookTagList" :key="item.name" class="item">
                    <span class="text">{{ item.title }}</span> -
                    <span>{{ item.name }}</span>
                  </div>
                </el-col>
                <el-col :span="7" :offset="2">
                  <div class="count-box">
                    <div class="count">9</div>
                    <div class="count-text">总计</div>
                  </div>
                </el-col>
              </el-row>
              <div class="foot" @click="toPage">查看全部</div>
            </el-card>
          </el-col>
        </draggable>
      </el-row>
    </draggable>
  </div>
</template>

<script>
  import configData from './homeConfig'
  import draggable from 'vuedraggable'
  import * as echarts from 'echarts';

  export default {
    name: "home",
    components: { draggable },
    data(){
      return {
        configData,
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
      echartInit3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('echart3'));
        // 绘制图表
        myChart.setOption(this.configData.echartOption3);
      },
      echartInit2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('echart2'));
        // 绘制图表
        myChart.setOption(this.configData.echartOption2);
      },
      echartInit1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('echart1'));
        // 绘制图表
        // this.demoLine(myChart);
        myChart.setOption(this.configData.echartOption1);
      },
      demoLine( myChart ){
        var app = {};
        var option;
        var easingFuncs = {
          quarticInOut: function ( k ){
            if ((k *= 2) < 1) {
              return 0.5 * k * k * k * k;
            }
            return -0.5 * ((k -= 2) * k * k * k - 2);
          },
        };
        var N_POINT = 30;
        var grids = [];
        var xAxes = [];
        var yAxes = [];
        var series = [];
        var titles = [];
        var count = 0;
        Object.keys(easingFuncs).forEach(function ( easingName ){
          var easingFunc = easingFuncs[ easingName ];
          var data = [];
          for (var i = 0; i <= N_POINT; i++) {
            var x = i / N_POINT;
            var y = easingFunc(x);
            data.push([x, y]);
          }
          grids.push({
            show: true,
            borderWidth: 0,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 2
          });
          xAxes.push({
            type: 'value',
            show: false,
            min: 0,
            max: 1,
            gridIndex: count
          });
          yAxes.push({
            type: 'value',
            show: false,
            min: -0.4,
            max: 1.4,
            gridIndex: count
          });
          series.push({
            name: easingName,
            type: 'line',
            xAxisIndex: count,
            yAxisIndex: count,
            data: data,
            showSymbol: false,
            animationEasing: easingName,
            animationDuration: 1000
          });
          titles.push({
            textAlign: 'center',
            text: easingName,
            textStyle: {
              fontSize: 12,
              fontWeight: 'normal'
            }
          });
          count++;
        });
        var rowNumber = Math.ceil(Math.sqrt(count));
        grids.forEach(function ( grid, idx ){
          grid.left = ((idx % rowNumber) / rowNumber * 100 + 0.5) + '%';
          grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 0.5) + '%';
          grid.width = (1 / rowNumber * 100 - 1) + '%';
          grid.height = (1 / rowNumber * 100 - 1) + '%';

          titles[ idx ].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
          titles[ idx ].top = parseFloat(grid.top) + '%';
        });
        option = {
          title: titles.concat([{
            text: ' ',
            top: 'bottom',
            left: 'center'
          }]),
          grid: grids,
          xAxis: xAxes,
          yAxis: yAxes,
          series: series
        };
        if (option && typeof option === 'object') {
          myChart.setOption(option);
        }
      },
      toAll(){
        this.$router.push({
          path: '/casesList/index',
        })
      },
      toPage(){
        this.$router.push({
          path: '/casesCard/index',
          query: {
            name: '张三非法经营案',
            type: '一审公诉案件'
          }
        })
      },
      receive( row ){
        this.handleRowClick(row);
      },
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
    },
    mounted(){
      this.echartInit1();
      this.echartInit2();
      this.echartInit3();
    }
  }
</script>

<style>
  .home {
    color: #3e3e3c;
    padding: 12px;
  }

  .el-card__header {
    background-color: transparent !important;
    border: none !important;
    padding: 12px 16px 0 16px;
  }

  .foot {
    text-align: center;
    font-size: 13px;
    color: #006dcc;
    border-top: 1px solid #eee;
    padding-top: 12px;
  }

  .foot:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .text {
    color: #006dcc;
    border-bottom: 1px dotted;
  }

  .item {
    font-size: 13px;
    margin: 12px 0;
    cursor: pointer;
  }

  .data-box .item {
    margin: 0 0 12px 0;
    padding-right: 12px;
    width: 100%;
  }

  .count-box {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    justify-content: center
  }

  .echart-box {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 230px;
    margin-top: -72px;
    justify-content: center
  }

  .count {
    font-size: 50px;
    color: #006dcc;
    font-weight: 600;
  }

  .count-text {
    color: #006dcc;
  }

  .avue-data-tabs .item {
    height: 121px;
  }

  .avue-crud__menu {
    min-height: 0;
  }

  .avue-crud__pagination {
    padding: 0;
  }
</style>

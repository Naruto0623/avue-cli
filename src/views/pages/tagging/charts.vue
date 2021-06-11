<template>
  <div>
    <div id="echart1" style="height: 800px;width: 500px;"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  import chartsData from "./chartsData";

  export default {
    name: 'charts',
    data(){
      return {
        chartsData,
      }
    },
    methods: {
      echartInit1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('echart1'));
        // 绘制图表
        // this.demoLine(myChart);
        myChart.setOption(this.chartsData.echart1);
      },
    },
    mounted(){
      this.echartInit1();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

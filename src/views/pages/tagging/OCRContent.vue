<template>
  <!--<div class="content-box">
    &lt;!&ndash; 头部 &ndash;&gt;
    <div class="header">
      <div class="text-center">天津市公安局和平分局</div>
      <div class="text-center title">
        起 诉 意 见 书
      </div>
    </div>
  </div>-->
  <div style="margin-top: -8px;">
    <img src="../../../../public/img/起诉意见书/起诉意见书编辑.jpg" height="auto" width="100%"/>
    <img src="../../../../public/img/起诉意见书/起诉意见书编辑2.jpg" height="auto" width="100%"/>
    <img src="../../../../public/img/起诉意见书/起诉意见书编辑3.jpg" height="auto" width="100%"/>
  </div>
</template>

<script>
  export default {
    name: "OCRContent",
    props: ['isShowMan', 'isShowDate'],
    methods: {
      showModal(){
        this.$emit('showModal', '')
      }
    }
  }
</script>

<style>
  img {
    border: none;
    margin: 0;
    padding: 0;
  }
  .content-box {
    padding: 20px;
    font-family: '宋体';
  }

  .text-center {
    text-align: center;
  }
  .title {
    font-size: 20px;
    font-weight: 900;
    line-height: 1.5em;
  }
  .header {
    margin-top: 60px;
  }
</style>

<template>
  <div>
    <img src="../../../../public/img/起诉意见书/起诉意见书案卡.jpg" height="auto" width="100%"/></div>
</template>

<script>
  export default {
    name: "OCRContent",
    props: ['isShowMan', 'isShowDate'],
    methods: {
      showModal() {
        this.$emit('showModal', '')
      }
    }
  }
</script>

<style>
  .yellowtext {
    background-color: yellow;
  }

  .greentext {
    background-color: #67c23a;
  }

  .redtext {
    background-color: #f56c6c;
    color: #fff;
  }

  .blueText {
    background-color: #409EFF;
  }
</style>

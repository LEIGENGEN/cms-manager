<template>
  <div>
    <div class="preview-drag-mask" @dragover="onDragover"></div>
    <div class="preview-drag-out" @dragover="onDragout"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    onDragover() {
      console.log("over");
    },
    onDragout() {
      console.log("out");
    }
  }
}
</script>

<style lang="less" scoped>
.preview-drag-mask {
  position: absolute;
  left: 50%;
  top: 60px;
  bottom: 20px;
  width: 520px;
  margin-left: -260px;
  z-index: 10;
}

.preview-drag-out {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
<template>
  <div class="home">
    <!-- 顶部head -->
    <!-- 左侧组件列表 -->
    <page-left></page-left>
    <!-- 中间内容区域 -->
    <page-view></page-view>
    <!-- 右侧组件编辑区域 -->
  </div>
</template>

<script>
import PageLeft from './components/PageLeft.vue';
import PageView from './components/PageView.vue';
export default {
  components: {
    PageLeft,
    PageView
  },
  data() {
    return {

    }
  },
}
</script>

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
import { getCmsPageById } from '@/api/activity'
import { createRandomId } from '@/utils'
import { mapMutations } from 'vuex';
export default {
  components: {
    PageLeft,
    PageView
  },
  data() {
    return {

    }
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapMutations(['UPDATE_COMPONENT']),
    // 获取详情数据
    getData() {
      const { id } = this.$route.query
      console.log(id, "cc");
      if (id) {
        getCmsPageById(id).then(({ data }) => {
          console.log(data, "daad");
          this.postDataToH5(data)
        })
      }
    },
    // 处理后端返回的页面数据
    postDataToH5(data) {
      if (data && data.componentList) {
        data.componentList.forEach(item => {
          if (item.data.validTime && typeof item.data.validTime === 'string') item.data.validTime = JSON.parse(item.data.validTime)
          if (!item.id) item.id = item.data.component + '-' + createRandomId()
          this.UPDATE_COMPONENT()
        })
      }
    }
  }
}
</script>

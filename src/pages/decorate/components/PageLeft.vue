<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(item, index) in componentlist" :key="index" class="component-item" :title="item.title"
        :name="index">
        <ul class="component-list">
          <li v-for="(component, size) in item.components" :key="size">
            <i :class="component.iconClass"></i>
            <p>{{ component.name }}</p>
            <p>4/50</p>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import componentlist from '../../../config/component-list';
export default {
  data() {
    return {
      activeNames: [1],
      componentlist,
    }
  },
}
</script>
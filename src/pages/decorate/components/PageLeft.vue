<template>
  <div class="page-left">
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(item, index) in componentlist" :key="index" class="component-item" :title="item.title"
        :name="index">
        <ul class="component-list">
          <li :draggable="draggableEnable(component)" v-for="(component, size) in item.components" :key="size"
            @dragstart="onDragstart(component)" @dragend="onDragend(component)"
            :class="draggableEnable(component) ? 'drag-enabled' : 'drag-disabled'">
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
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      activeNames: [0],
      componentlist,
    }
  },
  methods: {
    ...mapMutations(['SET_DRAG_STATE', 'SET_DRAG_COMPONENT']),
    // 控制当前元素是否可拖拽
    draggableEnable(component) {
      // 当前组件被使用的次数与组件使用次数的上限进行比较
      // component.maxNumForAdd
      return true
    },
    onDragstart(component) {
      console.log(component, "cc");
      this.SET_DRAG_STATE(true)
      this.SET_DRAG_COMPONENT(JSON.parse(JSON.stringify(component)))
    },
    onDragend() {

    }
  }
}
</script>

<style scoped lang="less">
// 左侧框架
.page-left {
  position: absolute;
  top: 56px;
  left: 0;
  width: 186px;
  overflow-x: hidden;
  overflow-y: auto;
  bottom: 0;
  background: #fff;
  user-select: none;
}

// 组件列表
.component-item {
  padding: 0 20px;
  margin-top: 22px;

  .component-list {
    overflow: hidden;

    li {
      float: left;
      width: 50%;
      font-size: 12px;
      padding-bottom: 8px;
      text-align: center;

      &.drag-enabled {
        cursor: move;
      }

      &.drag-disabled {
        cursor: not-allowed;
      }

      &.drag-enabled:hover {
        background: @color-1;
        color: #fff;
        border-radius: 2px;

        .ico {
          background-position: 0 -32px;
        }

        .num,
        .name {
          color: #ffffff !important;
        }
      }

      .ico {
        display: inline-block;
        margin-top: 8px;
        background-position: 0 0;
        height: 32px;
        width: 32px;
        background-size: cover;
      }

      .name {
        line-height: 16px;
        margin-top: -4px;
      }

      .num {
        font-size: 12px;
        color: #999999;
      }
    }
  }
}

// 折叠面板样式
.el-collapse {
  border: none;

  /deep/ .el-collapse-item__header {
    border: none;
    height: 30px;
    line-height: 30px;
  }

  /deep/ .el-collapse-item__wrap {
    border: none;
  }

  /deep/ .el-collapse-item__content {
    padding-bottom: 0;
  }
}
</style>
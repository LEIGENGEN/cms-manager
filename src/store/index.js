import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 当前组件是否正在拖拽
    dragActive: false,
    // 当前正在拖拽的组件
    dragComponent: {},
  },
  mutations: {
    // 修改组件拖拽状态
    SET_DRAG_STATE(state, value) {
      state.dragActive = value;
    },
    // 设置当前正在拖拽的组件对象
    SET_DRAG_COMPONENT(state, value) {
      state.dragComponent = value;
    },
  },
  actions: {},
});

Vue.store = store;

export default store;

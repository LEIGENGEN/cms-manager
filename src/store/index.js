import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

Vue.use(Vuex);

// 页面的初始化数据
const emptyPageData = {
  id: "",
  name: "页面标题",
  shareDesc: "", //微信分享文案
  shareImage: "", //微信分享图
  backgroundColor: "",
  backgroundImage: "",
  backgroundPosition: "top", //页面背景位置
  componentList: [],
};

const store = new Vuex.Store({
  state: {
    // 当前组件是否正在拖拽
    dragActive: false,
    // 当前正在拖拽的组件
    dragComponent: {},
    // 当前页面的数据
    pageData: JSON.parse(JSON.stringify(emptyPageData)),
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
    // 页面更新方法
    UPDATE_COMPONENT(state, { data }) {
      state.pageData = data || {};
    },
  },
  actions: {},
  getters,
});

Vue.store = store;

export default store;

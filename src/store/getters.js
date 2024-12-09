const getters = {
  // 记录组件被拖拽的个数
  pageComponentTotalMap: (state) => {
    const map = {};
    const list = state.pageData.componentList || [];
    let name;
    list.forEach((item) => {
      name = item.data.component;
      if (map[name]) map[name]++;
      else map[name] = 1;
    });
    return map;
  },
};

export default Object.assign({}, getters);

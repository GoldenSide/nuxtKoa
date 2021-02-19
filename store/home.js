export const state = () => ({
  hotPlace: [],
  menu: [
    {
      type: "food",
      name: "美食"
    }
  ]
});

export const mutations = {
  setMenu(state, val) {
    state.menu = val;
  },
  setHotPlace(state, val) {
    state.hotPlace = val;
  }
};
export const actions = {
  setMenu: ({ commit }, menu) => {
    commit("setMenu", menu);
  },
  setHotPlace: ({ commit }, hotPlace) => {
    commit("setHotPlace", hotPlace);
  }
};

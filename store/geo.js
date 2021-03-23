export const state = () => ({ position: { city: "三亚" } });
export const mutations = {
  setPosition(state, val) {
    state.position = val;
  }
};

export const actions = {
  setPosition: ({ commit }, position) => {
    commit("setPosition", position);
  }
};

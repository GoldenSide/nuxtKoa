export const state = () => ({ position: { city: "深圳" } });
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

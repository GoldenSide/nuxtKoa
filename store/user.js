export const state = () => ({
  userInfo: null
});

export const mutations = {
  setUser(state, data) {
    state.userInfo = data;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, ctx) {
    const addressModel = await ctx.app.$axios.get("/geo/getPosition");
    commit("geo/setPosition", addressModel.data);
  }
};

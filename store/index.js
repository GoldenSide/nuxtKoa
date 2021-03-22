export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const addressModel = await app.$axios.get("/geo/getPosition");
    commit("geo/setPosition", addressModel.data);
    const {
      status: status2,
      data: { menu }
    } = await app.$axios.get("geo/menu");
    commit("home/setMenu", status2 === 200 ? menu : []);
  }
};

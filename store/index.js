export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const addressModel = await app.$axios.get("/geo/getPosition");
    commit("geo/setPosition", addressModel.data);
    const {
      status: status2,
      data: { menu }
    } = await app.$axios.get("geo/menu");
    commit("home/setMenu", status2 === 200 ? menu : []);
    const {
      status: status3,
      data: { result }
    } = await app.$axios.get("/search/hotPlace", {
      params: {
        city: app.store.state.geo.position.city.replace("市", "")
      }
    });
    commit("home/setHotPlace", status3 === 200 ? result : []);
  }
};

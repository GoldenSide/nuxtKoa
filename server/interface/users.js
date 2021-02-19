import Router from "koa-router";
let router = new Router({ prefix: "/users" });

router.get("/getUser", async ctx => {
  //   if (ctx.isAuthenticated()) {
  //     const { username, email } = ctx.session.passport.user;
  //     ctx.body = {
  //       user: username,
  //       email
  //     };
  //   } else {
  //     ctx.body = {
  //       user: "",
  //       email: ""
  //     };
  //   }
  ctx.body = {
    user: "叶金龙",
    email: "1244338192@qq.com"
  };
});

export default router;

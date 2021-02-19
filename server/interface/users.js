import Router from "koa-router";
import Redis from "koa-redis";
import nodemailer from "nodemailer";
import User from "../dbs/models/users";
import Passport from "./utils/passport";
import Email from "../dbs/config";
import axios from "./utils/axios";
let router = new Router({ prefix: "/users" });

let Store = new Redis().client;
router.post("/signup", async ctx => {
  const { username, password, email, code } = ctx.request.body;
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, "code");
    const saveExpire = await Store.hget(`nodemail:${username}`, "expire");
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire >= 0) {
        ctx.body = {
          code: -1,
          msg: "验证码已过期，请重新尝试"
        };
      }
      return false;
    } else {
      ctx.body = {
        code: -1,
        msg: "请填写正确的验证码"
      };
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "验证码为必填项"
    };
  }
  let user = await User.find({ username });
  if (user.length > 0) {
    ctx.body = {
      code: -1,
      msg: "该用户名已被注册"
    };
    return false;
  }
  let nuser = await User.create({
    username,
    password,
    email
  });

  if (nuser) {
    let res = await axios.post("/users/signin", { username, password });
    if (res.data && res.data.code == 0) {
      ctx.body = {
        code: 0,
        msg: "注册成功",
        user: res.data.user
      };
    } else {
      ctx.body = {
        code: -1,
        msg: "登录失败"
      };
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "注册失败"
    };
  }
});

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

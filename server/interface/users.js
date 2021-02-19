import Router from "koa-router";
import Redis from "koa-redis";
import nodemailer from "nodemailer";
import User from "../dbs/models/users";
import Passport from "./utils/passport";
import Email from "../dbs/config";
import axios from "./utils/axios";
let router = new Router({ prefix: "/users" });

// router.post

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

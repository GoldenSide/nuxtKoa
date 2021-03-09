import Router from "koa-router";
import axios from "./utils/axios";

let router = new Router({ prefix: "/geo" });

router.get("/getPosition", async ctx => {
  let { data } = await axios.get("https://www.ip.cn/api/index?ip=&type=0");
  data.city = data.address.split(" ")[3];
  ctx.body = data;
});

export default router;

import Router from "koa-router";
import axios from "./utils/axios";

let router = new Router({ prefix: "/geo" });

router.get("/getPosition", async ctx => {
  //   let obj = await axios.get("http://api.79xj.cn/ip.php?ip=183.17.230.79");
  //   let obj = await axios.get("http://pv.sohu.com/cityjson");
  let obj = await axios.get("https://www.ip.cn/api/index?ip=&type=0");
  ctx.body = obj.data;
});

export default router;

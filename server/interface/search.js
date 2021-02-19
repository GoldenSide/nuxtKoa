import Router from "koa-router";
// import axios from './utils/axios'
// import Poi from '../dbs/models/poi'
// import sign from './utils/sign'

let router = new Router({ prefix: "/search" });

router.get("/resultsByKeywords", async ctx => {
  const { city, keyword } = ctx.query;
  //   let {
  //     status,
  //     data: { count, pois }
  //   } = await axios.get("http://cp-tools.cn/search/resultsByKeywords", {
  //     params: {
  //       city,
  //       keyword,
  //       sign
  //     }
  //   });
  //   ctx.body = {
  //     count: status === 200 ? count : 0,
  //     pois: status === 200 ? pois : []
  //   };
  let count = 1;
  let pois = [
    {
      title: "我是标题",
      pos: "深圳",
      price: "100",
      img: "",
      url: "www.baidu.com",
      photos: []
    }
  ];
  ctx.body = {
    count,
    pois
  };
});

export default router;

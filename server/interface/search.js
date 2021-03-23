import Router from "koa-router";
// import axios from './utils/axios'
import Poi from "../dbs/models/poi";
// import sign from './utils/sign'

let router = new Router({ prefix: "/search" });

router.get("/top", async ctx => {
  try {
    let top = await Poi.find({
      name: new RegExp(ctx.query.input),
      city: "三亚"
    });
    ctx.body = {
      code: 0,
      top: top.map(item => {
        return {
          name: item.name,
          type: item.type
        };
      }),
      type: top.length ? top[0].type : ""
    };
  } catch (e) {
    ctx.body = {
      code: "-1",
      top: []
    };
  }
});

router.get("/hotPlace", async ctx => {
  // let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city;
  let result = await Poi.find({
    city: "三亚",
    type: "丽人"
  }).limit(10);
  ctx.body = {
    code: 0,
    result: result.map(item => {
      return {
        name: item.name,
        type: item.type
      };
    })
  };
});

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

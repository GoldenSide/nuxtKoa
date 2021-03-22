import Router from "koa-router";
import axios from "./utils/axios";
import Province from "../dbs/models/province";
import City from "../dbs/models/city";
import Menu from "../dbs/models/menu";

let router = new Router({ prefix: "/geo" });

router.get("/getPosition", async ctx => {
  let { data } = await axios.get("https://www.ip.cn/api/index?ip=&type=0");
  data.city = data.address.split(" ")[3];
  ctx.body = data;
});

router.get("/province", async ctx => {
  let province = await Province.find();
  ctx.body = {
    province: province.map(item => {
      return {
        id: item.id,
        name: item.value
      };
    })
  };
});

router.get("/province/:id", async ctx => {
  let city = await City.findOne({ id: ctx.params.id });
  ctx.body = {
    city: city.value
  };
});
router.get("/city", async ctx => {
  let res = await City.find();
  let city = res.reduce((prev, next) => {
    return prev.concat(next.value);
  }, []);
  ctx.body = {
    city: city.map(item => {
      return {
        province: item.province,
        id: item.id,
        name:
          item.name === "市辖区" || item.name === "省直辖县级行政区划"
            ? item.province
            : item.name
      };
    })
  };
});

router.get("/hotCity", async ctx => {
  let list = [
    "北京市",
    "上海市",
    "广州市",
    "深圳市",
    "天津市",
    "西安市",
    "杭州市",
    "南京市",
    "武汉市",
    "成都市"
  ];
  let result = await City.find();
  let nList = [];
  result.forEach(item => {
    nList = nList.concat(
      item.value.filter(k => list.includes(k.name) || list.includes(k.province))
    );
  });
  ctx.body = {
    hots: nList
  };
});

router.get("/menu", async ctx => {
  const result = await Menu.findOne();
  ctx.body = {
    menu: result.menu
  };
});

export default router;

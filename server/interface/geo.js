import Router from "koa-router";
import axios from "./utils/axios";
import Province from "../dbs/models/province";
import City from "../dbs/models/city";

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

export default router;

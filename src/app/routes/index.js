const Router = require("koa-router");

const router = new Router({
  prefix: "/api/v1"
});

router.get("/", (ctx, next) => {
  ctx.body = "hello koa-router";
});

module.exports = router;

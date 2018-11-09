const Router = require("koa-router");

const router = new Router({
  prefix: "/api/v1"
});

router.get("/", (ctx, next) => {
  ctx.body = {
    body: "hello koa-router",
    request: ctx.request.body
  };
});

module.exports = router;

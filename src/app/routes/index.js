const Router = require("koa-router");

const router = new Router({
  prefix: "/api/v1"
});

router.get("/", ctx => {
  ctx.compress = false;
  ctx.body = {
    ctx,
    body: "hello koa-router",
    request: ctx.request.body
  };
});

router.get("/compress", ctx => {
  ctx.compress = true;
  ctx.body = {
    ctx,
    body: "hello koa-router",
    request: ctx.request.body
  };
});

router.get("/success", ctx => {
  const data = { id: 123, name: "success" };
  ctx.ok(data, 200);
});

router.get("/failure", ctx => {
  ctx.throw(404);
});

module.exports = router;

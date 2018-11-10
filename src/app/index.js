const Koa = require("koa");
const logger = require("koa-logger");
const compress = require("koa-compress");
const bodyParser = require("koa-bodyparser");
const zlib = require("zlib");

const router = require("./routes");

const app = new Koa();

app.use(logger());
app.use(
  compress({
    filter: contentType => /text/i.test(contentType),
    threshold: 2048,
    flush: zlib.Z_SYNC_FLUSH
  })
);
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

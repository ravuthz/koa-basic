const Koa = require("koa");
const logger = require("koa-logger");
const compress = require("koa-compress");
const bodyParser = require("koa-bodyparser");
const jsonResponseError = require("koa-json-error");
const jsonResponseSucess = require("koa-respond");
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
app.use(
  jsonResponseError(err => ({
    error: true,
    status: err.status || 500,
    message: err.message,
    stackTrace: process.env.NODE_ENV === "production" ? undefined : err.stack
  }))
);
app.use(jsonResponseSucess());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

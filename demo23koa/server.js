const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const cors = require("@koa/cors")
app.use(cors())
app.use(router.routes());

router.get('/aaa', async (ctx) => {
    ctx.body = {
        aa: 1
    }
})


app.listen(8080)
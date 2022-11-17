const Koa = require('koa');
const aaa = require('koa-static');
const path = require('path');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
app.use(router.routes());
app.use(aaa(
    path.join(__dirname + '/dist'), //默认static文件夹下，也可以改成其他或根目录
    {
        index: 'index.html',    //默认为static下的index.html,也可以更改其他名字或者false
        hidden: false,
        defer: true,
    }
))
router.get('/aaa', async (ctx) => {
    ctx.body = 'hahah'
})


app.listen(2022)
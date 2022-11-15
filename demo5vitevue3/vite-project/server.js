// const Koa = require('koa');
// const static = require('koa-static');
// const path = require('path');
import koastatic from 'koa-static'
import koa from 'koa'
import path from 'path'
const app = new koa();
app.use(koastatic(
    './dist', //默认static文件夹下，也可以改成其他或根目录
    {
        index: 'index.html',    //默认为static下的index.html,也可以更改其他名字或者false
        hidden: false,
        defer: true,
    }
))
app.listen(8080)
const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const Router = require('koa-router');
const fs = require('fs');

const WebSocket = require('ws');

const app = new Koa();

app.use(static(
    path.join(__dirname + '/dist'), //默认static文件夹下，也可以改成其他或根目录
    {
        index: 'index.html',    //默认为static下的index.html,也可以更改其他名字或者false
        hidden: false,
        defer: true,
    }
))



const ws = new WebSocket.Server({ port: 8888 });

ws.on('connection', ws => {
    console.log('server connection');

    ws.on('message', msg => {
        console.log('server receive msg：', msg);
    });
    let a = 0
    setInterval(() => {
        ws.send(a++);
    }, 500)
});



// 下载

const router = new Router();
router.get('/aaa', async (ctx) => {
    ctx.body = 'hahah'
})
app.use(router.routes());
app.on("error", (err, ctx) => {
    // console.log(6666,err);
})
router.get('/xiazai', async (ctx) => {
    //获取资源文件的绝对路径
    let filePath = './demo.mp4'
    console.log(111, filePath);
    let resHred = readFile(ctx.headers.range, filePath);
    ctx.status = resHred.code
    ctx.set(resHred.head);
    let stream = fs.createReadStream(filePath, resHred.code == 200 ? {} : { start: resHred.start, end: resHred.end });
    stream.pipe(ctx.res);
    // //也可使用这种方式。
    // stream.on('data', e => ctx.res.write(e));
    // // 接收完毕
    // stream.on('end', e => ctx.res.end());
    ctx.respond = false;
})
app.use(router.routes());
app.on("error", (err, ctx) => {
    // console.log(6666,err);
})

function readFile(range, filePath, chunkSize = 5000) {
    console.log(range, filePath);
    //mime类型
    const mime = {
        "css": "text/css",
        "gif": "image/gif",
        "html": "text/html",
        "ico": "image/x-icon",
        "jpeg": "image/jpeg",
        "jpg": "image/jpeg",
        "js": "text/javascript",
        "json": "application/json",
        "pdf": "application/pdf",
        "png": "image/png",
        "svg": "image/svg+xml",
        "swf": "application/x-shockwave-flash",
        "tiff": "image/tiff",
        "txt": "text/plain",
        "mp3": "audio/mp3",
        "wav": "audio/x-wav",
        "wma": "audio/x-ms-wma",
        "wmv": "video/x-ms-wmv",
        "xml": "text/xml",
        "mp4": "video/mp4"
    };
    // 获取后缀名
    let ext = path.extname(filePath);
    ext = ext ? ext.slice(1) : 'unknown';
    //未知的类型一律用"text/plain"类型
    let contentType = mime[ext.toLowerCase()];

    //建立流对象，读文件
    let stat = fs.statSync(filePath)
    let fileSize = stat.size;
    let head = {
        code: 200,
        head: {
            'Content-Length': fileSize,
            'content-type': contentType,
        }

    };
    // 大文件分片
    let parts = [0, 10000]
    let start = parseInt(parts[0], 10);
    let end = parts[1] ? parseInt(parts[1], 10) : start + chunkSize;
    end = end > fileSize - 1 ? fileSize - 1 : end;
    chunkSize = (end - start) + 1;
    head = {
        code: 206,
        filePath,
        start,
        end,
        head: {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'content-type': contentType,
            'Content-Length': chunkSize,
            'Accept-Ranges': 'bytes'
        }
    }

    return head;
}
app.listen(3000)
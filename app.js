const Koa = require('koa');
const koaStatic = require('koa-static');
const views = require('koa-views');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const {join} = require('path');
const router = require('./routers/router');
const app = new Koa();


app.use(cors());
app.use(koaBody());

// 使用的是pug模板引擎
app.use(views(join(__dirname,'views')),{
    extension: 'pug'
});


app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(koaStatic(join(__dirname,'public')));

app.listen(3000,()=>{
    console.log('3000端口 服务启动成功');
});

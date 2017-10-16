/**
 * Date: 2017/10/16
 * Author: Zn
 * Email: 312073339@qq.com
 */
import koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import common from './lib/common';
import webSocketServer from './websocket'
const app = new koa();

app.use(logger());
app.use((ctx, next) => {
    //生成客户端id
    next();
}) 
const router = new Router();
router.get('/', (ctx, next) => {
    ctx.body = {data: 1};
})
app.use(router.routes());
app.use(router.allowedMethods());

webSocketServer(app);
app.listen(8082);
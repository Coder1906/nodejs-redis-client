/**
 * Date: 2017/10/16
 * Author: Zn
 * Email: 312073339@qq.com
 */
import koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
const app = new koa();
const router = new Router();
router.get('/', (ctx, next) => {
    ctx.body = {data: 1};
})

app.use(logger())
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8082);
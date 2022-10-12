import Koa from 'koa';
import koaBody from 'koa-body';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

app.use(koaBody());

router.get('/', (context: Koa.Context) => {
	context.status = 200;
	context.body = 'success';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3030, () => {
	console.log('Listening on port 3030');
});

export default app;

import Koa from 'koa';

const app = new Koa();

let x;

app.listen(8080, () => {
	console.log(`Listening on port ${8080}`);
});

const Koa = require('koa');
const Redis = require('ioredis');

const app = new Koa();
const redis = new Redis({
  host: 'redis',
});

app.use(async ctx => {
  console.log('come into function')
  ctx.body = '计数：' + (~~(await redis.get('count')) + 1);
  redis.incr('count');
});

app.listen(3000, () => {
  console.log('app 正在监听 3000 端口');
});


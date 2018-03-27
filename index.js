import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

import router from './routes';

const app = new Koa();

app
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);


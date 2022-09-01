import Router from 'koa-router';
const router = new Router();
import ctrls from '../controllers';

router.get('/', (ctx) => ctrls.root(ctx));
router.get('/test/get', (ctx) => ctrls.get(ctx));
router.post('/test/post', (ctx) => ctrls.post(ctx));
router.patch('/test/patch', (ctx) => ctrls.patch(ctx));
router.put('/test/put', (ctx) => ctrls.put(ctx));
router.delete('/test/delete', (ctx) => ctrls.delete(ctx));
router.get('/test/err', (ctx) => ctrls.err(ctx));

export default router;

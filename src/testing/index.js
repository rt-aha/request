import '../styles/index.scss'
import { restful } from '../index';

const request = restful({ baseURL: 'http://127.0.0.1:8010', version: '', useAuth: false })


get.addEventListener('click', async () => {
  const res = await request({ method: 'get', url: '/test/get', params: { a: 1 } });
  console.log('res-get--', res);
});

post.addEventListener('click', async () => {
  const res = await request({ method: 'post', url: '/test/post', data: { c: 3, d: 4 } });
  console.log('res-post--', res);
});

put.addEventListener('click', async () => {
  const res = await request({ method: 'put', url: '/test/put', version: '/v2' });
  console.log('res-put--', res);
});

patch.addEventListener('click', async () => {
  const res = await request({ method: 'patch', url: '/test/patch', useAuth: false });
  console.log('res-patch--', res);
});

del.addEventListener('click', async () => {
  const res = await request({ method: 'delete', url: '/test/del' });
  console.log('res-del--', res);
});

err.addEventListener('click', async () => {
  const res = await request({ method: 'get', url: '/test/err' });
  console.log('res-err--', res);
});

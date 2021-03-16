import '@/template/index.html';
import '@/styles/preset/index.scss';
import '@/styles/index.scss';
import { restful } from '@/libs';

const request = restful({baseURL: 'https://jsonplaceholder.typicode.com', b: 2})

const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    request({methods:'get', url: '/todos/1'});
});

import { jsonplaceholderRequset } from '@/api';

export const mockJsonPlaceholder = async () => {
  const res = await jsonplaceholderRequset({
    method: 'get',
    url: '/posts/1',
  });

  return res;
};

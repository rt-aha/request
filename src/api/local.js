import {localRequest} from '@/network';

export const localGetAPI = async () => {
  const res = await localRequest({
    method: 'get',
    url: '/test/get',
  });

  return res;
};


export const localPostAPI = async () => {
  const res = await localRequest({
    method: 'post',
    url: '/test/post',
  });

  return res;
};


export const localPutAPI = async () => {
  const res = await localRequest({
    method: 'put',
    url: '/test/put',
  });

  return res;
};

export const localPatchAPI = async () => {
  const res = await localRequest({
    method: 'patch',
    url: '/test/patch',
  });

  return res;
};



export const localDeleteAPI = async () => {
  const res = await localRequest({
    method: 'delete',
    url: '/test/delete',
  });

  return res;
};

export const localGetErrorAPI = async () => {
  const res = await localRequest({
    method: 'get',
    url: '/test/err',
  });

  return res;
};


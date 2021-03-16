import axios from 'axios';

const restful = ({
  baseURL = '',
  timeout = 1000,
  headers = {}
}) => {
  const xhr = axios.create({
    baseURL,
    timeout,
    headers
  });

  return async ({
    methods = 'get',
    url = '',
  }) => {
    const res = await xhr.request({
      methods,
      url
    });

    return res;
  }
}

export default restful;
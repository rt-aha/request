import axios from 'axios';
import { getToken } from './auth';
import { formatResponse } from './formatResponse';
import interceptor from './interceptor';

/**
 * 
 * @param {string} baseURL 
 * @param {number} timeout 
 * @param {object} headers 設定預設 headers
 * @param {version} string default: '', optional e.g. '/v1'
 * @param {useAuth} boolean default: true, optional
 * @param {authFunc} function 取得token方式
 * @param {formatResponse} function 預設request回傳格式
 */
const restful = ({
  baseURL = '',
  timeout = 1000,
  headers: defaultHeaders = {},
  version: ver = '',
  useAuth: auth = true,
  authFunc = getToken,
  formatResponse: formatResponseFunc = formatResponse,
  interceptor: interceptorFunc = interceptor,
}) => {
  const xhr = axios.create({
    baseURL,
    timeout,
    headers: defaultHeaders,
  });

  xhr.interceptors.request.use(interceptorFunc.reqSuccess,interceptorFunc.reqFail);
  xhr.interceptors.response.use(interceptorFunc.resSuccess,interceptorFunc.resFail);

  return async ({
    headers = {},
    method = 'get',
    url = '',
    params = {},
    data = {},
    version = ver,
    useAuth = auth,
    formatResponse = formatResponseFunc,
    ...rest
  }) => {

    // 合併預設headers和特定headers
    headers = {
      ...defaultHeaders,
      ...headers,
    };

    if(useAuth) {
      headers = authFunc(headers);
    }

    try {
      const res = await xhr.request({
        headers,
        method,
        url: version ? version + url : url,
        params: params ? params: {},
        data: data ? data: {},
        ...rest
      });
      return formatResponse(res);

    } catch(err) {
      return new Error(err);
    }
  }
}

export default restful;
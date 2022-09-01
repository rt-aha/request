

import axios from "axios";
import { getToken } from "./auth";
import { formatResponse } from "./formatResponse";
import interceptor from "./interceptor";
import validate from "./validate";
import {  TypeRestful } from '@/interface/api'

const restful: TypeRestful = ({
  baseURL = "",
  timeout = 1000,
  headers: defaultHeaders = {},
  version: ver = "",
  useAuth: auth = true,
  authFunc: getTokenFunc = getToken,
  formatResponse: formatResponseFunc = formatResponse,
  interceptor: interceptorFunc = interceptor,
}) => {
  if (!validate("baseURL", baseURL)) return;

  const xhr = axios.create({
    baseURL,
    timeout,
    headers: defaultHeaders,
  });

  xhr.interceptors.request.use(
    interceptorFunc.reqSuccess,
    interceptorFunc.reqFail
  );
  xhr.interceptors.response.use(
    interceptorFunc.resSuccess,
    interceptorFunc.resFail
  );

  return async ({
    headers = {},
    method = "get",
    url = "",
    params = {},
    data = {},
    version = ver,
    authFunc = getTokenFunc,
    useAuth = auth,
    formatResponse = formatResponseFunc,
    ...rest
  }) => {
    if (!validate("method", method)) return;

    // 合併預設headers和特定headers
    headers = {
      ...defaultHeaders,
      ...headers,
    };

    if (useAuth) {
      headers = authFunc(headers);
    }

    try {
      const res = await xhr.request({
        headers,
        method,
        url: version ? version + url : url,
        params: params || {},
        data: data || {},
        ...rest,
      });

      return formatResponse(res);
    } catch (err: any) {
      return new Error(err);
    }
  };
};

export default restful;

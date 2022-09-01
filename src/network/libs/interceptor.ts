import { TypeInterceptor } from '@/interface/api'

const interceptor: TypeInterceptor = {
  reqSuccess(config) {
    return config;
  },
  reqFail(error) {
    return Promise.reject(error);
  },
  resSuccess(response) {
    return response;
  },
  resFail(error) {
    return Promise.reject(error);
  },
};

export default interceptor;

const interceptor = {
  reqSuccess(config) {
    return config;
  },
  reqFail(error) {
    console.log('res error', error);
    return Promise.reject(error);
  },
  resSuccess(response) {
    return response;
  },
  resFail(error) {
    console.log('res error', error);
    return Promise.reject(error);
  }
}

export default interceptor;
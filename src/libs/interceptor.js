const interceptor = {
  reqSuccess(config) {
    console.log('res success', config);
    return config;
  },
  reqFail(error) {
    console.log('res error', error);
    return Promise.reject(error);
  },
  resSuccess(response) {
    console.log('req success', response);
    return response;
  },
  resFail(error) {
    console.log('res error', error);
    return Promise.reject(error);
  }
}

export default interceptor;
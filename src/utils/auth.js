const getToken = (headers) => {
  const token = localStorage.getItem('token') || '';

  if(!token) {
    throw new Error('there is no token !');
  }
  
  return {
    ...headers,
    Authorization: `Bearer ${token}`
  }
};


export { getToken };
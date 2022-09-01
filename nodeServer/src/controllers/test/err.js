function err(ctx) {
  ctx.body = {
    msg: 'ERROR',
    code: '400400'
  };
  ctx.status = 400;
}

export default err;

function get(ctx) {
  ctx.body = [
    {
      id: 1,
      title: 'title1',
    },
    {
      id: 2,
      title: 'title2',
    },
    {
      id: 3,
      title: 'title3'
    }
  ];
}

export default get;

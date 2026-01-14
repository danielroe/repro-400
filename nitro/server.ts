export default {
  fetch(req: Request) {
    return new Response('my custom response', {
      status: 400
    })
  },
};

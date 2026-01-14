export default {
	fetch(req, context) {
    return new Response('my custom response', {
      status: 400
    })
	}
};

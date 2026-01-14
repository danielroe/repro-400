export default defineEventHandler(async event => {
  setResponseStatus(event, 400)
  return {
    error: true,
    this: 'should be displayed'
  }
})

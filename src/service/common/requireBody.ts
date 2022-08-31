const requireBody = (request: any) => {
  const { body } = request.body
  if (!!body) throw new Error("a 'body' property is required in request body")

  return body
}

export default requireBody

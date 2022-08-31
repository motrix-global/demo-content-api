const requireId = (request: any) => {
  const { id } = request.params
  if (!id || isNaN(id)) throw new Error("id is required and must be an integer")

  return id
}

export default requireId

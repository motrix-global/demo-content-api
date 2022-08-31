const requireId = (req: any) => {
  const { id } = req.params
  if (!id || isNaN(id)) throw new Error("id is required and must be an integer")

  return id
}

export default requireId

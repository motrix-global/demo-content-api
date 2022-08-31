const requireId = (req: any) => {
  const { id } = req.params
  if (!!id) throw new Error("id is required")

  return id
}

export default requireId

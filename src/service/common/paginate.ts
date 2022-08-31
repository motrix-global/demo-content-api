const paginate = (req: any) => {
  const { take, skip } = req.query

  const pagination = { take: Number(take) || 20, skip: Number(skip) || 0 }

  return pagination
}

export default paginate

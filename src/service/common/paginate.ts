const paginate = (request: any) => {
  const { take, skip } = request.query

  const pagination = { take: Number(take) || 20, skip: Number(skip) || 0 }

  return pagination
}

export default paginate

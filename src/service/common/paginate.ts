const paginate = (request: any) => {
  const { perPage, page } = request.query

  const skip = Number(perPage) * Number(page)
  const take = Number(perPage)

  const pagination = { take: take || 20, skip: skip || 0 }

  return pagination
}

export default paginate

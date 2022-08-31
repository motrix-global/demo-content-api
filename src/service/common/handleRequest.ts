const handleRequest = async (request: any, response: any, callback: any) => {
  try {
    const { data, count } = await callback(request)

    response.set("X-Total-Count", count).json(data)
  } catch (error: any) {
    response
      .status(500)
      .json({ error: true, message: error.message || "Internal server error" })
  }
}

export default handleRequest

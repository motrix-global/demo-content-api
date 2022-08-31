const handleRequest = async (request: any, response: any, callback: any) => {
  try {
    const content = await callback(request)

    response.json(content)
  } catch (error: any) {
    response
      .status(500)
      .json({ error: true, message: error.message || "Internal server error" })
  }
}

export default handleRequest

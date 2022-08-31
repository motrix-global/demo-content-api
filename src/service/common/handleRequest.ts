const handleRequest = async (req: any, res: any, callback: any) => {
  try {
    const content = await callback(req)

    res.json(content)
  } catch (error: any) {
    res
      .status(500)
      .json({ error: true, message: error.message || "Internal server error" })
  }
}

export default handleRequest

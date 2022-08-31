const handleRequest = async (req: any, res: any, func: any) => {
  try {
    const content = await func(req)

    res.json(content)
  } catch (error) {
    res.status(400).json({ error: true, message: error })
  }
}

export default handleRequest
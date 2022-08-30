import prisma from "../prisma"

const createContent = async (req: any) => {
  const { title } = req.body

  if (!title) throw new Error("'title' property is required in request body")

  const content = await prisma.content.create({
    data: {
      title,
    },
  })

  return content
}

export default createContent

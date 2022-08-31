import prisma from "../common/prisma"

const createContent = async (request: any) => {
  const { title } = request.body
  if (!title) throw new Error("'title' property is required in request body")

  const content = await prisma.content.create({
    data: {
      title,
    },
  })

  return content
}

export default createContent

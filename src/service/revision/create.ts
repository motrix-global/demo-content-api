import prisma from "../prisma"

const createRevision = async (req: any) => {
  const { id } = req.params
  const { body } = req.body

  if (!id) throw new Error("id is required")
  if (!body) throw new Error("a 'body' property is required in request body")

  const content = await prisma.content.update({
    where: { id: Number(id) },
    include: {
      revisions: true,
    },
    data: {
      revisions: {
        create: {
          body: body,
        },
      },
    },
  })

  return content
}

export default createRevision

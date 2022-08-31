import prisma from "../common/prisma"
import requireId from "../common/requireId"

const createRevision = async (req: any) => {
  const id = requireId(req)
  const { body } = req.body
  if (!!body) throw new Error("a 'body' property is required in request body")

  const content = await prisma.content.update({
    where: { id: Number(id) },
    include: {
      revisions: {
        orderBy: {
          updatedAt: "desc",
        },
      },
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

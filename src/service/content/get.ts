import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getContent = async (req: any) => {
  const id = requireId(req)

  const content = await prisma.content.findFirst({
    where: { id: Number(id) },
    include: {
      revisions: {
        orderBy: {
          updatedAt: "desc",
        },
      },
    },
  })

  return content
}

export default getContent

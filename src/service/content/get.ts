import paginate from "../common/paginate"
import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getContent = async (req: any) => {
  const id = requireId(req)
  const pagination = paginate(req)

  const content = await prisma.content.findFirst({
    where: { id: Number(id) },
    include: {
      revisions: {
        orderBy: {
          updatedAt: "desc",
        },
        ...pagination,
      },
    },
  })

  return content
}

export default getContent

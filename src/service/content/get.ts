import paginate from "../common/paginate"
import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getContent = async (request: any) => {
  const id: number = requireId(request)
  const pagination = paginate(request)

  const content = await prisma.content.findFirst({
    where: { id: id },
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

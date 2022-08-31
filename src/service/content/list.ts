import paginate from "../common/paginate"
import prisma from "../common/prisma"

const listContent = async (request: any) => {
  const pagination = paginate(request)

  const content = await prisma.content.findMany({
    include: {
      revisions: {
        orderBy: {
          updatedAt: "desc",
        },
        ...pagination,
      },
    },
    where: {
      deletedAt: null,
    },
  })

  return content
}

export default listContent

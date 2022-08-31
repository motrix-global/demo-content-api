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
        take: 1,
        skip: 0,
      },
    },
    where: {
      deletedAt: null,
    },
    ...pagination,
  })

  return content
}

export default listContent

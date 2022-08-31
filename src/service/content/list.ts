import { Content } from "@prisma/client"
import paginate from "../common/paginate"
import prisma from "../common/prisma"

const listContent = async (request: any): Promise<Array<Content>> => {
  const pagination = paginate(request)

  const content: Array<Content> = await prisma.content.findMany({
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

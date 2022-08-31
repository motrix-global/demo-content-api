import { Content } from "@prisma/client"
import { paginate, Pagination } from "../common/paginate"
import prisma from "../common/prisma"
import ResponseData from "../common/responseData"

const listContent = async (request: any): Promise<ResponseData> => {
  const pagination: Pagination = paginate(request)

  const count: number =
    (await prisma.content.count({
      where: { deletedAt: null },
    })) || 1
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

  return { data: content, count: count }
}

export default listContent

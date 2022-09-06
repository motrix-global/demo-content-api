import { Content } from "@prisma/client"
import { Request } from "express"
import { paginate, Pagination } from "../common/paginate"
import prisma from "../common/prisma"
import ResponseData from "../common/responseData"

const listContent = async (request: Request): Promise<ResponseData> => {
  const pagination: Pagination = paginate(request)

  const count: number = await prisma.content.count({
    where: { deletedAt: null },
  })

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

  return { data: content, count }
}

export default listContent

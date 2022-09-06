import { Request } from "express"
import { paginate, Pagination } from "../common/paginate"
import prisma from "../common/prisma"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const getContent = async (request: Request): Promise<ResponseData> => {
  const id: number = requireId(request)
  const pagination: Pagination = paginate(request)

  // TODO: remover paginação
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

  return { data: content, count: 1 }
}

export default getContent

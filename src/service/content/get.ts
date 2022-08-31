import { paginate, Pagination } from "../common/paginate"
import prisma from "../common/prisma"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const getContent = async (request: any): Promise<ResponseData> => {
  const id: number = requireId(request)
  const pagination: Pagination = paginate(request)

  const count: number =
    (await prisma.content.count({
      where: { id: id },
    })) || 1
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

  return { data: content, count: count }
}

export default getContent

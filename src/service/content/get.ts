import { Request } from "express"
import prisma from "../common/prisma"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const getContent = async (request: Request): Promise<ResponseData> => {
  const id: number = requireId(request)

  const content = await prisma.content.findFirst({
    where: { id: id },
    include: {
      revisions: {
        orderBy: {
          updatedAt: "desc",
        },
        skip: 0,
        take: 1,
      },
    },
  })

  return { data: content, count: 1 }
}

export default getContent

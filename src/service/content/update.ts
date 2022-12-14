import { Request } from "express"
import prisma from "../common/prisma"
import requireBody from "../common/requireBody"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const updateContent = async (request: Request): Promise<ResponseData> => {
  const id: number = requireId(request)
  const body = requireBody(request)

  const content = await prisma.content.update({
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
    data: {
      revisions: {
        create: {
          body: body,
        },
      },
    },
  })

  return { data: content, count: 1 }
}

export default updateContent

import { Content } from "@prisma/client"
import { Request } from "express"
import prisma from "../common/prisma"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const unpublishContent = async (request: Request): Promise<ResponseData> => {
  const id: number = requireId(request)

  const content: Content = await prisma.content.update({
    where: { id: id },
    data: { published: false },
  })

  return { data: content, count: 1 }
}

export default unpublishContent

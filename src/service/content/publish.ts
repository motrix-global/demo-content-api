import { Content } from "@prisma/client"
import prisma from "../common/prisma"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const publishContent = async (request: any): Promise<ResponseData> => {
  const id: number = requireId(request)

  const content: Content = await prisma.content.update({
    where: { id: id },
    data: { published: true },
  })

  return { data: content, count: 1 }
}

export default publishContent

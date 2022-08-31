import { Content } from "@prisma/client"
import prisma from "../common/prisma"
import requireTitle from "../common/requireTitle"
import ResponseData from "../common/responseData"

const createContent = async (request: any): Promise<ResponseData> => {
  const title: string = requireTitle(request)

  const content: Content = await prisma.content.create({
    data: {
      title,
    },
  })

  return { data: content, count: 1 }
}

export default createContent

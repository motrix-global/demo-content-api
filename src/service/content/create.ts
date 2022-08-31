import { Content } from "@prisma/client"
import prisma from "../common/prisma"
import requireTitle from "../common/requireTitle"

const createContent = async (request: any): Promise<Content> => {
  const title = requireTitle(request)

  const content: Content = await prisma.content.create({
    data: {
      title,
    },
  })

  return content
}

export default createContent

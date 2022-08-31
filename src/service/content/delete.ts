import { Content } from "@prisma/client"
import prisma from "../common/prisma"
import requireId from "../common/requireId"

const deleteContent = async (request: any): Promise<Content> => {
  const id: number = requireId(request)

  const content: Content = await prisma.content.update({
    where: { id: id },
    data: {
      deletedAt: new Date(),
    },
  })

  return content
}

export default deleteContent

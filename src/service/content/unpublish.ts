import { Content } from "@prisma/client"
import prisma from "../common/prisma"
import requireId from "../common/requireId"

const unpublishContent = async (request: any): Promise<Content> => {
  const id: number = requireId(request)

  const content: Content = await prisma.content.update({
    where: { id: Number(id) },
    data: { published: false },
  })

  return content
}

export default unpublishContent

import { Content } from "@prisma/client"
import prisma from "../common/prisma"
import requireId from "../common/requireId"

const publishContent = async (request: any): Promise<Content> => {
  const id = requireId(request)

  const content: Content = await prisma.content.update({
    where: { id: Number(id) },
    data: { published: true },
  })

  return content
}

export default publishContent

import prisma from "../common/prisma"
import requireId from "../common/requireId"

const publishContent = async (request: any) => {
  const id = requireId(request)

  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: { published: true },
  })

  return content
}

export default publishContent

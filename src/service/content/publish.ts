import prisma from "../common/prisma"
import requireId from "../common/requireId"

const publishContent = async (req: any) => {
  const id = requireId(req)

  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: { published: true },
  })

  return content
}

export default publishContent

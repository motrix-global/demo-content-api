import prisma from "../common/prisma"
import requireId from "../common/requireId"

const unpublishContent = async (req: any) => {
  const id = requireId(req)

  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: { published: false },
  })

  return content
}

export default unpublishContent

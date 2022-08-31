import prisma from "../common/prisma"
import requireId from "../common/requireId"

const deleteContent = async (req: any) => {
  const id = requireId(req)
  
  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: {
      deletedAt: new Date(),
    },
  })

  return content
}

export default deleteContent

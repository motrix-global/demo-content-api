import prisma from "../prisma"

const deleteContent = async (req: any) => {
  const { id } = req.params
  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: {
      deletedAt: new Date(),
    },
  })

  return content
}

export default deleteContent

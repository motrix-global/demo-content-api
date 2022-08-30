import prisma from "../prisma"

const getContent = async (req: any) => {
  const { id } = req.params
  if (!id) throw new Error("id is required")

  const content = await prisma.content.findFirst({
    where: { id: Number(id) },
    include: {
      revisions: {
        orderBy: {
          updatedAt: "desc",
        },
      },
    },
  })

  return content
}

export default getContent

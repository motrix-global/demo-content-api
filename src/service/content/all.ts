import prisma from "../prisma"

const getRevisions = async (req: any) => {
  const { id } = req.params
  if (!id) throw new Error("id is required")

  const content = await prisma.revision.findMany({
    where: { contentId: Number(id) },
    orderBy: {
      updatedAt: "desc",
    },
  })

  return content
}

export default getRevisions

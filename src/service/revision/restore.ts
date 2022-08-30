import prisma from "../prisma"

const restoreRevision = async (req: any) => {
  const { id } = req.params
  if (!id) throw new Error("id is required")

  const revision = await prisma.revision.update({
    where: { id: Number(id) },
    data: {
      updatedAt: new Date(),
    },
  })

  return revision
}

export default restoreRevision

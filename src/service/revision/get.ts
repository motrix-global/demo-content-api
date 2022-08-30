import prisma from "../prisma"

const getRevision = async (req: any) => {
  const { id } = req.params
  if (!id) throw new Error("id is required")

  const content = await prisma.revision.findFirst({
    where: { id: Number(id) },
  })

  return content
}

export default getRevision

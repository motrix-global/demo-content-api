import prisma from "../prisma"

const unpublishContent = async (req: any) => {
  const { id } = req.params
  if (!id) throw new Error("id is required")

  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: { published: false },
  })

  return content
}

export default unpublishContent

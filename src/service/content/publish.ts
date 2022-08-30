import prisma from "../prisma"

const publishContent = async (req: any) => {
  const { id } = req.params
  if (!id) throw new Error("id is required")

  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: { published: true },
  })

  return content
}

export default publishContent

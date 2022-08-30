import prisma from "../prisma"

const publishContent = async (req: any) => {
  const { id } = req.params
  const { publish } = req.body || true
  if (!id) throw new Error("id is required")

  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: { published: publish },
  })

  return content
}

export default publishContent

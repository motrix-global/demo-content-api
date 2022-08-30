import prisma from "../prisma"

const publishContent = async (req: any) => {
  const { id } = req.params
  let publish = true

  if (!id) throw new Error("id is required")
  if (req.body.publish === "false") publish = false

  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: { published: publish },
  })

  return content
}

export default publishContent

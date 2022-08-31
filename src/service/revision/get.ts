import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getRevision = async (req: any) => {
  const id = requireId(req)

  const content = await prisma.revision.findFirst({
    where: { id: Number(id) },
  })

  return content
}

export default getRevision

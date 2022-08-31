import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getRevision = async (request: any) => {
  const id = requireId(request)

  const content = await prisma.revision.findFirst({
    where: { id: Number(id) },
  })

  return content
}

export default getRevision

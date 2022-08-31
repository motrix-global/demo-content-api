import prisma from "../common/prisma"
import requireId from "../common/requireId"

const restoreRevision = async (request: any) => {
  const id = requireId(request)

  const revision = await prisma.revision.update({
    where: { id: Number(id) },
    data: {
      updatedAt: new Date(),
    },
  })

  return revision
}

export default restoreRevision

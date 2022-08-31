import prisma from "../common/prisma"
import requireId from "../common/requireId"

const restoreRevision = async (req: any) => {
  const id = requireId(req)

  const revision = await prisma.revision.update({
    where: { id: Number(id) },
    data: {
      updatedAt: new Date(),
    },
  })

  return revision
}

export default restoreRevision

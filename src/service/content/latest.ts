import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getLatestRevision = async (req: any) => {
  const id = requireId(req)

  const content = await prisma.revision.findFirst({
    where: { contentId: Number(id) },
    orderBy: {
      updatedAt: "desc",
    },
  })

  return content
}

export default getLatestRevision

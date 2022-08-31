import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getLatestRevision = async (request: any) => {
  const id = requireId(request)

  const content = await prisma.revision.findFirst({
    where: { contentId: Number(id) },
    orderBy: {
      updatedAt: "desc",
    },
  })

  return content
}

export default getLatestRevision

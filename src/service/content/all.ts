import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getRevisions = async (req: any) => {
  const id = requireId(req)

  const { take, skip } = req.query
  const content = await prisma.revision.findMany({
    where: { contentId: Number(id) },
    take: Number(take) || 20,
    skip: Number(skip) || undefined,
    orderBy: {
      updatedAt: "desc",
    },
  })

  return content
}

export default getRevisions

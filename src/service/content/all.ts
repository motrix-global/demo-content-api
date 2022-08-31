import paginate from "../common/paginate"
import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getRevisions = async (req: any) => {
  const id = requireId(req)
  const pagination = paginate(req)

  const content = await prisma.revision.findMany({
    where: { contentId: Number(id) },
    ...pagination,
    orderBy: {
      updatedAt: "desc",
    },
  })

  return content
}

export default getRevisions

import paginate from "../common/paginate"
import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getRevisions = async (request: any) => {
  const id = requireId(request)
  const pagination = paginate(request)

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

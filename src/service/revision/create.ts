import { paginate, Pagination } from "../common/paginate"
import prisma from "../common/prisma"
import requireBody from "../common/requireBody"
import requireId from "../common/requireId"

const createRevision = async (request: any) => {
  const id: number = requireId(request)
  const pagination: Pagination = paginate(request)
  const body = requireBody(request)

  const count = await prisma.revision.count({ where: { contentId: id } })
  const content = await prisma.content.update({
    where: { id: id },
    include: {
      revisions: {
        orderBy: {
          updatedAt: "desc",
        },
        ...pagination,
      },
    },
    data: {
      revisions: {
        create: {
          body: body,
        },
      },
    },
  })

  return { data: content, count: count }
}

export default createRevision

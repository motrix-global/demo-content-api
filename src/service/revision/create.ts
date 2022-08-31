import paginate from "../common/paginate"
import prisma from "../common/prisma"
import requireBody from "../common/requireBody"
import requireId from "../common/requireId"

const createRevision = async (request: any) => {
  const id = requireId(request)
  const body = requireBody(request)
  const pagination = paginate(request)

  const content = await prisma.content.update({
    where: { id: Number(id) },
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

  return content
}

export default createRevision

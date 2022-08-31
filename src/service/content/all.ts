import { Revision } from "@prisma/client"
import { paginate, Pagination } from "../common/paginate"
import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getRevisions = async (request: any): Promise<Array<Revision>> => {
  const id = requireId(request)
  const pagination: Pagination = paginate(request)

  const revisions: Array<Revision> = await prisma.revision.findMany({
    where: { contentId: Number(id) },
    ...pagination,
    orderBy: {
      updatedAt: "desc",
    },
  })

  return revisions
}

export default getRevisions

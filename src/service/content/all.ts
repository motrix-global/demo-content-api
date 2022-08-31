import { Revision } from "@prisma/client"
import paginate from "../common/paginate"
import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getRevisions = async (request: any): Promise<Array<Revision>> => {
  const id = requireId(request)
  const pagination = paginate(request)

  const content: Array<Revision> = await prisma.revision.findMany({
    where: { contentId: Number(id) },
    ...pagination,
    orderBy: {
      updatedAt: "desc",
    },
  })

  return content
}

export default getRevisions

import { Revision } from "@prisma/client"
import { Request } from "express"
import { paginate, Pagination } from "../common/paginate"
import prisma from "../common/prisma"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const getRevisions = async (request: any): Promise<ResponseData> => {
  const id = requireId(request)
  const pagination: Pagination = paginate(request)

  const count: number = await prisma.revision.count({
    where: { contentId: Number(id) },
  })

  const revisions: Array<Revision> = await prisma.revision.findMany({
    where: { contentId: Number(id) },
    ...pagination,
    orderBy: {
      updatedAt: "desc",
    },
  })

  return { data: revisions, count: count }
}

export default getRevisions

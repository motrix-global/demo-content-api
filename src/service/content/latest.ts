import { Revision } from "@prisma/client"
import prisma from "../common/prisma"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const getLatestRevision = async (request: any): Promise<ResponseData> => {
  const id: number = requireId(request)

  const revision: Revision | null = await prisma.revision.findFirst({
    where: { contentId: Number(id) },
    orderBy: {
      updatedAt: "desc",
    },
  })

  return { data: revision, count: 1 }
}

export default getLatestRevision

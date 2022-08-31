import { Revision } from "@prisma/client"
import prisma from "../common/prisma"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const restoreRevision = async (request: any): Promise<ResponseData> => {
  const id: number = requireId(request)

  const revision: Revision = await prisma.revision.update({
    where: { id: Number(id) },
    data: {
      updatedAt: new Date(),
    },
  })

  return { data: revision, count: 1 }
}

export default restoreRevision

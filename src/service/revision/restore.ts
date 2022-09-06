import { Revision } from "@prisma/client"
import { Request } from "express"
import prisma from "../common/prisma"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const restoreRevision = async (request: Request): Promise<ResponseData> => {
  const id: number = requireId(request)

  // TODO: criar nova revisão com o mesmo conteúdo
  const revision: Revision = await prisma.revision.update({
    where: { id: Number(id) },
    data: {
      updatedAt: new Date(),
    },
  })

  return { data: revision, count: 1 }
}

export default restoreRevision

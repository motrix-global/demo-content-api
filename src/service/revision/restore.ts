import { Revision } from "@prisma/client"
import { Request } from "express"
import prisma from "../common/prisma"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const restoreRevision = async (request: Request): Promise<ResponseData> => {
  const id: number = requireId(request)

  const oldRevision: Revision | null = await prisma.revision.findFirst({
    where: { id: Number(id) },
  })

  if (oldRevision) {
    const revision: Revision = await prisma.revision.create({
      data: {
        body: oldRevision.body,
        contentId: oldRevision.contentId,
      },
    })

    return { data: revision, count: 1 }
  }

  throw new Error("Revision not found")
}

export default restoreRevision

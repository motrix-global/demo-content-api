import { Revision } from "@prisma/client"
import prisma from "../common/prisma"
import requireId from "../common/requireId"
import ResponseData from "../common/responseData"

const getRevision = async (request: any): Promise<ResponseData> => {
  const id: number = requireId(request)

  const content: Revision | null = await prisma.revision.findFirst({
    where: { id: Number(id) },
  })

  return { data: content, count: 1 }
}

export default getRevision

import { Revision } from "@prisma/client"
import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getRevision = async (request: any): Promise<Revision | null> => {
  const id = requireId(request)

  const content: Revision | null = await prisma.revision.findFirst({
    where: { id: Number(id) },
  })

  return content
}

export default getRevision

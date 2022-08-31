import { Revision } from "@prisma/client"
import prisma from "../common/prisma"
import requireId from "../common/requireId"

const getLatestRevision = async (request: any): Promise<Revision | null> => {
  const id = requireId(request)

  const content: Revision | null = await prisma.revision.findFirst({
    where: { contentId: Number(id) },
    orderBy: {
      updatedAt: "desc",
    },
  })

  return content
}

export default getLatestRevision

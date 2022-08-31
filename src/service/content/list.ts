import prisma from "../common/prisma"

const listContent = async (req: any) => {
  const content = await prisma.content.findMany({
    include: {
      revisions: {
        orderBy: {
          updatedAt: "desc",
        },
      },
    },
    where: {
      deletedAt: null,
    },
  })

  return content
}

export default listContent

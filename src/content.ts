import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const router = Router()
const prisma = new PrismaClient()

router.get("/", async (req, res) => {
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

  res.json(content)
})

router.get(`/:id`, async (req, res) => {
  const { id } = req.params
  const content = await prisma.content.findFirst({
    where: { id: Number(id) },
    include: {
      revisions: {
        orderBy: {
          updatedAt: "desc",
        },
      },
    },
  })

  res.json(content)
})

router.post(`/`, async (req, res) => {
  const { title } = req.body
  const result = await prisma.content.create({
    data: {
      title,
    },
  })

  res.json(result)
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const { body } = req.body

  if (!id) res.status(400).json({ error: true, message: "id is required" })
  if (!body)
    res.status(400).json({
      error: true,
      message: "a 'body' property is required in request body",
    })

  try {
    const content = await prisma.content.update({
      where: { id: Number(id) },
      include: {
        revisions: true,
      },
      data: {
        revisions: {
          create: {
            body: body,
          },
        },
      },
    })

    res.json(content)
  } catch (error) {
    res.status(500).json({ error: true, message: error })
  }
})

router.put("/restore/:id", async (req, res) => {
  const { id } = req.params
  if (!id) res.status(400).json({ error: true, message: "id is required" })

  try {
    const revision = await prisma.revision.update({
      where: { id: Number(id) },
      data: {
        updatedAt: new Date(),
      },
    })

    res.json(revision)
  } catch (error) {
    res.status(500).json({ error: true, message: error })
  }
})

// router.put("/publish/:id", async (req, res) => {
//   const { id } = req.params
//   const content = await prisma.content.update({
//     where: { id: Number(id) },
//     data: { published: true },
//   })
//   res.json(content)
// })

router.delete(`/:id`, async (req, res) => {
  const { id } = req.params
  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: {
      deletedAt: new Date(),
    },
  })
  res.json(content)
})

export default router

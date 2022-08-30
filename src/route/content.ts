import prisma from "../service/prisma"
import { Router } from "express"
import createRevision from "../service/createRevision"

const router = Router()

router.post("/:id", async (req, res) => {
  try {
    const content = await createRevision(req)

    res.json(content)
  } catch (error) {
    res.status(400).json({ error: true, message: error })
  }
})

router.post(`/`, async (req, res) => {
  const { title } = req.body
  const content = await prisma.content.create({
    data: {
      title,
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

router.put("/publish/:id", async (req, res) => {
  const { id } = req.params
  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: { published: true },
  })
  res.json(content)
})

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

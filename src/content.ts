import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const router = Router()
const prisma = new PrismaClient()

/**
 * Creates a new revision in a content from a given id
 * @method POST
 * @path /:id/revision
 * @body body
 */
router.post("/:id", async (req, res) => {
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

/**
 * Creates new content
 * @method POST
 * @path /
 * @param title
 *
 */
router.post(`/`, async (req, res) => {
  const { title } = req.body
  const result = await prisma.content.create({
    data: {
      title,
    },
  })

  res.json(result)
})

/**
 * Retrieves content from a given id
 * @method GET
 * @path /:id
 */
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

/**
 * Lists all content that hasn't been marked as deleted
 * @method GET
 * @path /
 */
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

/**
 * Publishes content from a given id
 * @path /publish/:id
 */
router.put("/publish/:id", async (req, res) => {
  const { id } = req.params
  const content = await prisma.content.update({
    where: { id: Number(id) },
    data: { published: true },
  })
  res.json(content)
})

/**
 * Deletes content from a given id
 * @method DELETE
 * @path /:id
 */
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

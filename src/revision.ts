import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const router = Router()
const prisma = new PrismaClient()

/**
 * Restore revision from a given id
 * @method PUT
 * @path /revision/restore/:id
 */
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

export default router

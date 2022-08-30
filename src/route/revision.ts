import { Router } from "express"
import getRevision from "../service/revision/get"
import restoreRevision from "../service/revision/restore"

const router = Router()

router.put("/restore/:id", async (req, res) => {
  try {
    const revision = await restoreRevision(req)

    res.json(revision)
  } catch (error) {
    res.status(400).json({ error: true, message: error })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const revision = await getRevision(req)

    res.json(revision)
  } catch (error) {
    res.status(400).json({ error: true, message: error })
  }
})

export default router

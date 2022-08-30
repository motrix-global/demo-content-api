import { Router } from "express"
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

export default router

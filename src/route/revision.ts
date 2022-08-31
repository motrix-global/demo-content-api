import { Router } from "express"
import handleRequest from "../service/handleRequest"
import getRevision from "../service/revision/get"
import restoreRevision from "../service/revision/restore"

const router = Router()

router.put("/restore/:id", async (req, res) => {
  await handleRequest(req, res, restoreRevision)
})

router.get("/:id", async (req, res) => {
  await handleRequest(req, res, getRevision)
})

export default router

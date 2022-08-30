import { Router } from "express"
import createRevision from "../service/revision/create"
import createContent from "../service/content/create"
import getContent from "../service/content/get"
import listContent from "../service/content/list"
import publishContent from "../service/content/publish"
import deleteContent from "../service/content/delete"

const router = Router()

router.post(`/`, async (req, res) => {
  try {
    const content = await createContent(req)

    res.json(content)
  } catch (error) {
    res.status(400).json({ error: true, message: error })
  }
})

router.post("/:id", async (req, res) => {
  try {
    const content = await createRevision(req)

    res.json(content)
  } catch (error) {
    res.status(400).json({ error: true, message: error })
  }
})

router.get(`/:id`, async (req, res) => {
  try {
    const content = await getContent(req)

    res.json(content)
  } catch (error) {
    res.status(400).json({ error: true, message: error })
  }
})

router.get("/", async (req, res) => {
  try {
    const content = await listContent(req)

    res.json(content)
  } catch (error) {
    res.status(400).json({ error: true, message: error })
  }
})

router.put("/publish/:id", async (req, res) => {
  try {
    const content = await publishContent(req)

    res.json(content)
  } catch (error) {
    res.status(400).json({ error: true, message: error })
  }
})

router.delete(`/:id`, async (req, res) => {
  try {
    const content = await deleteContent(req)

    res.json(content)
  } catch (error) {
    res.status(400).json({ error: true, message: error })
  }
})

export default router

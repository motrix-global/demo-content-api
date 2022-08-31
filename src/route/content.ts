import { Router } from "express"
import createRevision from "../service/revision/create"
import createContent from "../service/content/create"
import getContent from "../service/content/get"
import listContent from "../service/content/list"
import publishContent from "../service/content/publish"
import deleteContent from "../service/content/delete"
import getLatestRevision from "../service/content/latest"
import getRevisions from "../service/content/all"
import unpublishContent from "../service/content/unpublish"
import handleRequest from "../service/handleRequest"

const router = Router()

router.post(`/`, (req, res) => {
  handleRequest(req, res, createContent)
})

router.post("/:id", (req, res) => {
  handleRequest(req, res, createRevision)
})

router.get(`/:id`, (req, res) => {
  handleRequest(req, res, getContent)
})

router.get("/", (req, res) => {
  handleRequest(req, res, listContent)
})

router.get(`/:id/latest`, (req, res) => {
  handleRequest(req, res, getLatestRevision)
})

router.get(`/:id/revisions`, (req, res) => {
  handleRequest(req, res, getRevisions)
})

router.put("/publish/:id", (req, res) => {
  handleRequest(req, res, publishContent)
})

router.put("/unpublish/:id", (req, res) => {
  handleRequest(req, res, unpublishContent)
})

router.delete(`/:id`, (req, res) => {
  handleRequest(req, res, deleteContent)
})

export default router

import { PrismaClient } from "@prisma/client"
import { randomUUID } from "crypto"
import { Router } from "express"

const router = Router()
const prisma = new PrismaClient()

router.get("/", async (req, res) => {
  const content = await prisma.content.findMany()
  res.json(content)
})

router.get(`/:id`, async (req, res) => {
  const { id } = req.params
  const content = await prisma.content.findFirst({
    where: { id: Number(id) },
  })
  res.json(content)
})

router.post(`/`, async (req, res) => {
  const { title, body } = req.body
  const result = await prisma.content.create({
    data: {
      title,
      contentId: randomUUID(),
      body,
      published: false,
    },
  })
  res.json(result)
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
  const content = await prisma.content.delete({
    where: { id: Number(id) },
  })
  res.json(content)
})

export default router

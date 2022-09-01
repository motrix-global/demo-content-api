import { Content } from "@prisma/client"
import unpublishContent from "../../src/service/content/unpublish"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Publish content", () => {
  it("Should mark content as published", async () => {
    const content: Content = {
      id: 1,
      title: "Título do conteúdo",
      published: false,
      deletedAt: new Date(),
    }

    prismaMock.content.update.mockResolvedValue(content)

    const request = mockRequest()

    const response = await unpublishContent(request)
    const expected = {
      count: 1,
      data: {
        id: 1,
        title: "Título do conteúdo",
        published: false,
        deletedAt: expect.any(Date),
      },
    }
    expect(response).toMatchObject(expected)
  })
})

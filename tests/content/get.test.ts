import { Content } from "@prisma/client"
import getContent from "../../src/service/content/get"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Get all revisions", () => {
  it("Should create a new content and return it", async () => {
    const content: Content = {
      id: 1,
      title: "Título do conteúdo",
      published: false,
      deletedAt: null,
    }

    prismaMock.content.findFirst.mockResolvedValue(content)

    const request = mockRequest()

    const response = await getContent(request)
    const expected = {
      count: 1,
      data: {
        id: 1,
        title: "Título do conteúdo",
        published: false,
        deletedAt: null,
      },
    }
    expect(response).toMatchObject(expected)
  })
})

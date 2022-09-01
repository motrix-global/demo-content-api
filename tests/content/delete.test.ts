import { Content } from "@prisma/client"
import deleteContent from "../../src/service/content/delete"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Get all revisions", () => {
  it("Should mark content as deleted", async () => {
    const content: Content = {
      id: 1,
      title: "Título do conteúdo",
      published: false,
      deletedAt: new Date(),
    }

    prismaMock.content.update.mockResolvedValue(content)

    const request = mockRequest()

    const response = await deleteContent(request)
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

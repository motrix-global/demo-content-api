import { Content } from "@prisma/client"
import createContent from "../../src/service/content/create"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Get all revisions", () => {
  it("Should retrieve a paginated array of revision from a given id", async () => {
    const content: Content = {
      id: 1,
      title: "Título do conteúdo",
      published: false,
      deletedAt: null,
    }

    prismaMock.content.create.mockResolvedValue(content)

    const request = mockRequest()

    const response = await createContent(request)
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

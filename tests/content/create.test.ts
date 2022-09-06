import { Content } from "@prisma/client"
import createContent from "../../src/service/content/create"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Create a new content entry", () => {
  it("Should create a new content entry with a given title", async () => {
    const title = "Título do conteúdo"

    const content: Content = {
      id: 2,
      title: title,
      published: false,
      deletedAt: null,
    }

    prismaMock.content.create.mockResolvedValue(content)

    const request = mockRequest()
    const response = await createContent(request)

    const expectedFindArgs = {
      data: {
        title,
      },
    }

    expect(prismaMock.content.create).toHaveBeenCalledWith(expectedFindArgs)

    const expectedResponse = {
      count: 1,
      data: {
        id: 2,
        title: "Título do conteúdo",
        published: false,
        deletedAt: null,
      },
    }

    expect(response).toMatchObject(expectedResponse)
  })
})

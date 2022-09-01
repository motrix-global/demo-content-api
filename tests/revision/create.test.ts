import createRevision from "../../src/service/revision/create"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Get all revisions", () => {
  it("Should retrieve content from a given id", async () => {
    const now = new Date()
    const content = {
      id: 2,
      title: "Título do conteúdo",
      published: false,
      deletedAt: null,
      revisions: [
        {
          id: 26,
          body: "Corpo do conteúdo",
          contentId: 1,
          createdAt: now,
          updatedAt: now,
        },
      ],
    }

    prismaMock.content.update.mockResolvedValue(content)

    const request = mockRequest()

    const response = await createRevision(request)
    const expected = {
      count: 1,
      data: {
        id: 1,
        title: "Título do conteúdo",
        published: false,
        deletedAt: null,
        revisions: [
          {
            id: 26,
            body: "Corpo do conteúdo",
            contentId: 1,
            createdAt: now,
            updatedAt: now,
          },
        ],
      },
    }
    expect(response).toMatchObject(expected)
  })
})

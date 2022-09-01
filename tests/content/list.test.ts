import { Content } from "@prisma/client"
import getLatestRevision from "../../src/service/content/latest"
import listContent from "../../src/service/content/list"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Get all revisions", () => {
  it("Should create a new content and return it", async () => {
    const result = [
      {
        id: 1,
        title: "Título teste",
        published: false,
        deletedAt: null,
        revisions: [],
      },
    ]

    prismaMock.content.findMany.mockResolvedValue(result)

    const request = mockRequest()

    const response = await listContent(request)
    const expected = {
      count: 1,
      data: [
        {
          id: 1,
          title: "Título teste",
          published: false,
          deletedAt: null,
          revisions: [],
        },
      ],
    }

    expect(response).toMatchObject(expected)
  })
})

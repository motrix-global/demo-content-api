import { Content } from "@prisma/client"
import getLatestRevision from "../../src/service/content/latest"
import listContent from "../../src/service/content/list"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Get latest revision from content", () => {
  it("Should return a content entry and it's latest revision", async () => {
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
      count: undefined,
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

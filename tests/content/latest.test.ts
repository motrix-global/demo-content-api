import { Revision } from "@prisma/client"
import getLatestRevision from "../../src/service/content/latest"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Get all revisions", () => {
  it("Should create a new content and return it", async () => {
    const revision: Revision = {
      id: 1,
      body: "Corpo de exemplo",
      contentId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    prismaMock.revision.findFirst.mockResolvedValue(revision)

    const request = mockRequest()

    const response = await getLatestRevision(request)
    const expected = {
      count: 1,
      data: {
        id: 1,
        body: "Corpo de exemplo",
        contentId: 1,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      },
    }
    expect(response).toMatchObject(expected)
  })
})

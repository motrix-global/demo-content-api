import { Revision } from "@prisma/client"
import getRevision from "../../src/service/revision/get"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Get revision", () => {
  it("Should retrieve a revision from a given id", async () => {
    const revision: Revision = {
      id: 1,
      body: null,
      contentId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    prismaMock.revision.findFirst.mockResolvedValue(revision)

    const request = mockRequest()

    const response = await getRevision(request)
    const expected = {
      count: 1,
      data: {
        id: 1,
        body: null,
        contentId: 1,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      },
    }
    expect(response).toMatchObject(expected)
  })
})

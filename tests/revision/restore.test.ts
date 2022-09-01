import { Revision } from "@prisma/client"
import restoreRevision from "../../src/service/revision/restore"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Restore revision", () => {
  it("Should restore a revision from a given id to the foreground", async () => {
    const revision: Revision = {
      id: 1,
      body: null,
      contentId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    prismaMock.revision.update.mockResolvedValue(revision)

    const request = mockRequest()

    const response = await restoreRevision(request)
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

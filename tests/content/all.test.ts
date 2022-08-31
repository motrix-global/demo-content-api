import getRevisions from "../../src/service/content/all"
import { prismaMock } from "../singleton"

describe("Get all revisions", () => {
  it("Should retrieve a paginated array of revision from a given id", async () => {
    const revisions = [
      {
        id: 1,
        body: null,
        contentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    prismaMock.revision.findMany.mockResolvedValue(revisions)

    const request = {
      params: { id: 1 },
      query: {},
    }

    const response = await getRevisions(request)
    const expected = {
      id: 1,
    }
    expect(response).toEqual(expected)
  })
})

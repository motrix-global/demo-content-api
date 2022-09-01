import getRevisions from "../../src/service/content/all"
import { mockRequest } from "../mockRequest"
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

    const request = mockRequest()

    const response = await getRevisions(request)
    const expected = {
      count: 1,
      data: [
        {
          id: 1,
          body: null,
          contentId: 1,
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        },
      ],
    }
    expect(response).toMatchObject(expected)
  })

  it("Should error when trying to retrieve revisions without passing a content id", async () => {
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
      params: { id: null },
      query: {},
    }

    expect(getRevisions(request)).rejects.toEqual(
      new Error("id is required and must be an integer")
    )
  })
})

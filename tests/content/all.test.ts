import { Revision } from "@prisma/client"
import ResponseData from "../../src/service/common/responseData"
import getRevisions from "../../src/service/content/all"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

describe("Get all revisions", () => {
  it("Should retrieve a paginated array of revision from a given id", async () => {
    const count = 1
    prismaMock.revision.count.mockResolvedValue(1)

    // TODO: usar test factory
    const revisions: Revision[] = [
      {
        id: 1,
        body: null,
        contentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    prismaMock.revision.findMany.mockResolvedValue(revisions)

    const contentId = 1
    const request = mockRequest(contentId)

    const response = await getRevisions(request)

    const expectedFindArgs = {
      where: {
        contentId,
      },
      skip: 0,
      take: 20,
      orderBy: {
        updatedAt: "desc",
      },
    }

    // TODO: Adicionar nos outros testes
    expect(prismaMock.revision.findMany).toHaveBeenCalledWith(expectedFindArgs)

    const expecteResponse: ResponseData = {
      count,
      data: revisions,
    }
    expect(response).toEqual(expecteResponse)
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

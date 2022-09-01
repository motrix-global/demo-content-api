import createRevision from "../../src/service/revision/create"
import { mockRequest } from "../mockRequest"
import { prismaMock } from "../singleton"

<<<<<<< HEAD
describe("Create revision", () => {
  it("Should create a new revision on a content from a given id", async () => {
    const now = new Date()
    const content = {
      id: 1,
=======
describe("Get all revisions", () => {
  it("Should retrieve content from a given id", async () => {
    const now = new Date()
    const content = {
      id: 2,
>>>>>>> e0838d48abcb58432760bfef1e5556253a34497d
      title: "Título do conteúdo",
      published: false,
      deletedAt: null,
      revisions: [
        {
<<<<<<< HEAD
          id: 1,
=======
          id: 26,
>>>>>>> e0838d48abcb58432760bfef1e5556253a34497d
          body: "Corpo do conteúdo",
          contentId: 1,
          createdAt: now,
          updatedAt: now,
        },
      ],
    }

<<<<<<< HEAD
    prismaMock.revision.count.mockResolvedValue(1)
=======
>>>>>>> e0838d48abcb58432760bfef1e5556253a34497d
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
<<<<<<< HEAD
            id: 1,
=======
            id: 26,
>>>>>>> e0838d48abcb58432760bfef1e5556253a34497d
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

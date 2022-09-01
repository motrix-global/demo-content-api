import { paginate } from "../../src/service/common/paginate"
import { mockRequest } from "../mockRequest"

describe("Get all revisions", () => {
  it("Should return pagination object showing 20 results on page 0, or taking 20 and skipping 0", async () => {
    const request = mockRequest()
    const result = paginate(request)
    const expected = { take: 20, skip: 0 }

    expect(result).toMatchObject(expected)
  })
})

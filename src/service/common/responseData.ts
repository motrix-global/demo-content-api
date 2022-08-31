import { Content, Revision } from "@prisma/client"

interface ResponseData {
  data: Revision | Revision[] | Content | Content[] | null
  count: number
}

export default ResponseData

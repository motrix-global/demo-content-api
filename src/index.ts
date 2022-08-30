import express from "express"
import content from "./route/content"
import revision from "./route/revision"

const app = express()

app.use(express.json())
app.use("/", content)
app.use("/revision", revision)

app.listen(3000, () =>
  console.log("Demo Content API is running at http://localhost:3000")
)

import express from "express"
import content from "./content"

const app = express()

app.use(express.json())
app.use("/", content)

app.listen(3000, () =>
  console.log("REST API server ready at: http://localhost:3000")
)

import express from "express"

const app = express()

app.get('/', (request, response) => {
  response.json({ server: "API Server 1.0" })
})

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})
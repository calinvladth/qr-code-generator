const express = require('express')
const router = require('./router')

const app = express()
const port = 3000

app.use(express.json())
app.use(router)

app.listen(3000, () => {
  console.log(`Server started on port ${port}`)
})

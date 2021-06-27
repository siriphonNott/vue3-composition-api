const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(port, () => console.log(`Server is running at port ${port}`) ) 
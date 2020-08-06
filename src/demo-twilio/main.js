require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.static('public'))

const { generateToken } = require('./generateToken')

app.get('/', (req, res) => {
  res.send('<a href="chat.html">Demo chat</a>')
})

app.post('/token', function (req, res) {
  const { identity } = req.body
  const token = generateToken(identity)

  res.json({
    identity,
    token: token.toJwt()
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  return res.status(401).json({
    msg  : "Blocked"
  })
  
})

app.listen(port, () => {
  console.log(`Server authen listening on port ${port}`)
})
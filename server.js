require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  return res.status(401).json({
    msg  : "Blocked"
  })
  
})

app.get("/pass",(req,res) => {
  return res.status(200).json({
    msg : "Ok"
  })
})

app.listen(port, () => {
  console.log(`Server authen listening on port ${port}`)
})
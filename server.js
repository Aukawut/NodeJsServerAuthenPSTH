require('dotenv').config()
const { v4: uuidv4 } = require("uuid");

const express = require('express')
const app = express()
const port = process.env.PORT;


app.use((req, res, next) => {
  // If client didn’t send UUID, generate one
  const incomingId = req.headers['x-request-id'];
  req.id = incomingId ;
  console.log("Request UUID:", req.id);
  next();
});


app.get('/', (req, res) => {
  const token = req.query.token 

    console.log(res.header())
    return res.status(200).json({
      id : `Hello, your request UUID is ${token}`,
    })
  
})

app.get("/pass",(req,res) => {
   console.log(res.header())
  return res.status(200).json({
    msg : "Ok"
  })
})

app.listen(port, () => {
  console.log(`Server authen listening on port ${port}`)
})
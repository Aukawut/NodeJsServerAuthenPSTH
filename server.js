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
  // Access headers
  const realIp = req.headers["x-real-ip"];
  const forwardedFor = req.headers["x-forwarded-for"];
  const proto = req.headers["x-forwarded-proto"];
  const requestId = req.headers["x-request-id"];
  const clientIp = req.ip ;
  const userAgent = req.headers["user-agent"]; 

  console.log(`---- Date:${new Date()} ----`)
  console.log("clientIp:", clientIp);
  console.log("x-real-ip:", realIp);
  console.log("x-forwarded-for:", forwardedFor);
  console.log("x-forwarded-proto:", proto);
  console.log("x-request-id:", requestId);
  console.log("userAgent:", userAgent);

  return res.status(200).json({
    msg : "Ok"
  })
})

app.listen(port, () => {
  console.log(`Server authen listening on port ${port}`)
})
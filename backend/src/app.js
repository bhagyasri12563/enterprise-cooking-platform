const express = require('express')

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
 res.send("Enterprise Catering Platform Running")
})

app.post("/book-event",(req,res)=>{

 const booking = req.body

 res.json({
  message:"Event booking successful",
  booking
 })

})

app.listen(3000,()=>{
 console.log("Server started on port 3000")
})

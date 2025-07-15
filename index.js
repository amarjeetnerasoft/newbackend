
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hello',(req,res)=>{
    res.send("helloooooooo")
})
app.get('/amarjeet', (req,res)=>{
    res.send('<h2>hii this is amarjeet</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// hello
const path = require('path');
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/FAQ', (req, res) => {
  res.sendFile(path.join(__dirname+'/faq.html'));
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname+'/about.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
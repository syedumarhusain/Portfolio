const express = require('express')
const app = express()
const port = process.env.PORT || 5001


app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/header.html');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
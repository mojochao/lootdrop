var bodyParser = require('body-parser')
var express = require('express')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.json({ message: 'gimme some sugar, baby' })
})

var port = 3000
app.listen(port)
console.log('listening on port ' + port)

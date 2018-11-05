// required packages
var express = require('express')
var exphbs = require('express-handlebars')

// apps and connection
var app = express()
var PORT = process.env.PORT || 8080


// set up engine (tell express to use handlebars)
// exphbs is a function that takes in objects
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
// set 'view engine function'(above) to look at what we just made
app.set('view engine', 'handlebars')
global.Tony = {
  Config: {},
  Session: {},
}
require('./src/misc/config')
const express = require("express")
const path = require("path")
const cors = require('cors');
const app = express()
const hbs = require('hbs')
const morgan = require("morgan")
const body_parser = require("body-parser")
const cookie_parser = require("cookie-parser")
const {success, error, info} = require("./src/misc/style")

//init default classes for api calls
global.APICLASSES = {}
require("./src/index")

// setup express app
app.use(morgan('dev', {}))
app.use(body_parser.json())
app.use(cookie_parser())
app.use(cors())

// setup view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views/partials"));
app.use(express.urlencoded({extended: false}))
app.use("/public/assets", express.static(path.join(__dirname, "/public/assets")));
app.use("/dist", express.static(path.join(__dirname, "/dist")));
hbs.registerPartials(path.join(__dirname, "views/partials"));

//import all routers
app.use('/', require("./src/routes/partials"))
app.use('/app', require('./src/routes/app'))
app.use("/api", require('./src/routes/api'))
app.get("/notfound", (req, res, next) => {
  res.render('404.hbs', {
    title: '404 Error',
    project: Tony.Config.project_name
  })
})

// listen app
app.set('port', process.env.PORT || Tony.Config.connection.port)
app.listen(app.get('port'), () => {
  console.log(info(`listening on ${app.get('port')}`))
})


module.exports = app


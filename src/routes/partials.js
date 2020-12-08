let express = require('express');
let router = express.Router();

module.exports = router.get('/', (req, res, next) => {
  res.render('index.hbs', {
    digInUrl: Tony.Config.digInUrl ? Tony.Config.digInUrl : '/auth/login',
    project: Tony.Config.project_name,
    title: "Home",
  })
})
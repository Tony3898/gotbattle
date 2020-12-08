const express = require('express');
const Promise = require("bluebird");
const router = express.Router();
const path = require('path')
const readFile = Promise.promisify(require("fs").readFile);

const renderHtml = (req, res) => {
  let pagePath = req.url;
  let reqPage = pagePath.split("/react/")[1]
  let filePath = path.join("ui/pages/" + reqPage + ".html")
  let nav = Tony.Config.nav;
  readFile(filePath, 'utf-8').then(html => {
    res.render('react.hbs', {
      title: nav && nav.sub ? nav.sub.filter((data) => {
        return data.name.toLowerCase() === pagePath;
      }).map((data) => {
        return data.name;
      }) : Tony.Config.project_name,
      nav: nav && nav.sub ? nav.sub : null,
      html: html,
      query: req.query
    });
  }).catch(err => {
    if (err.code === 'ENOENT')
      res.render('404.hbs')
  })
}

getTitle = (nav, pagePath) => {
  if (!nav || !nav.length)
    return ''
  let title = ''
  nav.forEach((n) => {
    if (n.sub && n.sub.length)
      title = getTitle(n.sub, pagePath)
    else if (n.path === pagePath)
      title = n.name
    else
      title = ''
  })
  return title
}

captailize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = router.get('/', (req, res, next) => {
  res.redirect(`${Tony.Config.digInUrl}`)
}).get(`/app/${Tony.Config.module_name}`, (req, res, next) => {
  res.redirect(`${Tony.Config.digInUrl}`)
}).get(`/${Tony.Config.module_name}/*`, (req, res, next) => {
  let nav = Tony.Config.nav;
  let pagePath = req.url;
  let reqPage = pagePath.split(`/${Tony.Config.module_name}/`)[1]
  let title = getTitle(nav, '/app' + pagePath)
  title = nav && title && title.length ? title : reqPage.includes("-") ? reqPage.replace("-", " ") : reqPage.includes('?') ? reqPage.substring(0, reqPage.indexOf('?')) : reqPage
  res.render('react.hbs', {
    title: title ? captailize(title) : captailize(Tony.Config.project_name),
    nav: nav,
    project: Tony.Config.project_name,
  })
})
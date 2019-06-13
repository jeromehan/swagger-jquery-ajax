const swaggerGen = require('./index')
const jsonData = require('./api-docs.json')
const fs = require('fs')
const path = require('path')
let opt = {
  swagger: jsonData,
  moduleName: 'api',
  className: 'api'
}
const codeResult = swaggerGen(opt)
fs.writeFileSync(path.join(__dirname, './api.js'), codeResult)
// setup express web server !!

const express = require('express') //import the module
const app = express() // instantiate it ..
const fs = require('fs') //file system node module
const path = require('path') // make the file path more strict

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

app.use('/dist', express.static(path.resolve(__dirname, './dist')))
// auto change browsers data
require('./build/dev-server')(app)


// Event Handler for all get requests ..
// * .. all things will return to SPA
// req ..all data submitted
// res .. data sent back

app.get('*', (req, res) => {
  res.write(indexHTML)
  res.end()
})


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

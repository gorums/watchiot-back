const { all, set } = require('rvl-pipe')
const pkg = require('../package.json')

const sendResponse = res => context => {
  res.json(context)
  return context
}

const sendErrorResponse = res => err => {
  console.log(err)
  res.status(500)
}

module.exports.status = (req, res) => {
  return all(
    set({ app: pkg.name }),
    set({ environment: process.env.NODE_ENV }),
    set({ version: pkg.version })
  )()
    .then(sendResponse(res))
    .catch(sendErrorResponse(res))
}

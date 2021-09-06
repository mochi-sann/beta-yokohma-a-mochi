require('dotenv').config()

module.exports = {
  trailingSlash: true,
  assetPrefix: process.env.BASE_PATH || '',
  basePath: process.env.BASE_PATH || '',
}

require('dotenv').config()

module.exports = {
  trailingSlash: true,
  assetPrefix: process.env.BASE_PATH || '',
  basePath: process.env.BASE_PATH || '',
  // publicRuntimeConfig: { urlPrefix: process.env.BASE_PATH || '' }, // ★コレ
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || '',
  },

  env: {
    BASE_PATH: process.env.BASE_PATH,
  },
}

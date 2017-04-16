const env = process.env.NODE_ENV || 'development'

const development = {
  env,
  port: 8999,
  publicPath: 'http://localhost:8998',
  resourcesPath: 'cdn.bootcss.com',
}

const production = Object.assign({}, development, {
  port: 8999,
  publicPath: '',
})

export default { development, production }[env]

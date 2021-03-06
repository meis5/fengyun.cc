const env = process.env.NODE_ENV || 'development'

const development = {
  env,
  port: 8999,
  publicPath: 'http://localhost:8998',
  resourcesPath: 'http://localhost:8999/static/home/resources',
}

const production = Object.assign({}, development, {
  port: 8999,
  publicPath: '//fycdn.fengyun.cc/static/home/assets',
  resourcesPath: '//fycdn.fengyun.cc/static/home/resources',
})

export default { development, production }[env]

const env = process.env.NODE_ENV || 'development'

const development = {
  env,
  port: 8998,
  publicPath: 'http://localhost:8998',
  resourcesPath: 'http://localhost:8998/static/ttd2/resources',
}

const production = Object.assign({}, development, {
  port: 8998,
  publicPath: '//fycdn.fengyun.cc/static/ttd2/assets',
  resourcesPath: '//fycdn.fengyun.cc/static/ttd2/resources',
})

export default { development, production }[env]

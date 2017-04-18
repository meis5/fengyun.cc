import path from 'path'
import glob from 'glob'
import oss from 'ali-oss'
import co from 'co'

const store = oss({
  accessKeyId: 'LTAIzpBx3qKD0jTN',
  accessKeySecret: '2TTgIO8JfH2Bbb8gbKwsTrMLTTHP4X',
  bucket: 'fycdn',
  region: 'oss-cn-shenzhen',
})

const source = path.resolve(__dirname, '../public')
const files = glob.sync(`${source}/**/*`, { nodir: true })

co(function*() {
  for (let i = 0; i < files.length; i++) {
    yield store.put(files[i].replace(`${source}/`, ''), files[i])
  }
}).then(value => {
  console.log('done')
}, (err) => {
  console.error(err.stack)
})

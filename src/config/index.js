import path from 'path'
import dev from './dev.js'
// import fs from 'fs'
import merge from 'lodash/merge'

const serverRoot = path.dirname(__dirname)
const root = path.resolve(serverRoot, '../')
const staticDir = path.join(root, 'static')
let config = {
  app: {
    name: 'ocean',
    port: 3000
  },
  debug: false,
  env: 'production',
  mongoConfig: {
    url: 'mongodb://localhost:27017/ocean',
    opts: {
      user: '',
      pass: ''
    }
  },
  'jwt': {
    'cert': 'ocean'
  },
  dir: {
    root,
    log: path.join(__dirname, '..', 'logs'),
    server: serverRoot,
    static: staticDir,
    resource: path.join(serverRoot, 'resource'),
    upload: path.join(serverRoot, 'resource', 'upload')
  }
}
config = merge(config, process.env.NODE_ENV === 'development'
  ? dev
  : require('./private.js'))

export default config

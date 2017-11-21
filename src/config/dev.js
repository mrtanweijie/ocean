export default {
  env: 'development',
  debug: true,
  mongoConfig: {
    url: 'mongodb://localhost:27017/ocean',
    opts: {
      user: '',
      pass: ''
    }
  },
  'jwt': {
    'cert': 'ocean'
  }
}

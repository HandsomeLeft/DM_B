let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else {
  BASE_URL = 'http://ceaser.org'
}

export { BASE_URL, TIME_OUT }

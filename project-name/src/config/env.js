let baseUrl = ''
let routerMode = 'hash'

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'http://localhost:8082'
} else if (process.env.NODE_ENV === 'production') {

}

export {
  baseUrl,
  routerMode
}

import qs from 'qs'
import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// })

axios.interceptors.request.use(config => {
  console.log(config, '=== config')
  config.headers.test += '1'
  return config
})
axios.interceptors.request.use(config => {
  config.headers.test += '2'
  return config
})
axios.interceptors.request.use(config => {
  config.headers.test += '3'
  return config
})

axios.interceptors.response.use(res => {
  console.log(res, 'res')
  res.data += '1'
  return res
})
axios.interceptors.response.use(res => {
  res.data += '2'
  return res
})
axios.interceptors.response.use(res => {
  res.data += '3'
  return res
})

// axios.interceptors.response.eject(interceptor)

// axios({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     a: 1,
//     b: 2
//   }
// }).then(res => {
//   console.log(res)
// })

const arr = new Int32Array([21, 31])
axios.defaults.headers.common['test2'] = (() => {
  axios({
    method: 'POST',
    url: '/config/post',
    data: qs.stringify({
      a: 3,
      b: 4
    }),
    headers: {
      test: '3345'
    }
  }).then(res => {
    console.log(res, '==== 饭团🐦')
  })
})()

// axios({
//   url: '/interceptor/post',
//   method: 'post',
//   headers: {
//     test: ''
//   }
// }).then(res => {
//   console.log(res.data)
// })

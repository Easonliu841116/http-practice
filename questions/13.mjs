import axios from 'axios'

// task url = https://lidemy-http-challenge.herokuapp.com/lv13?token={qspyz}
// api doc = https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4

const baseUrl = 'https://lidemy-http-challenge.herokuapp.com'

;(async () => {
  const { data } = await axios(baseUrl + '/api/v3/logs', {
    method: 'GET',
    headers: {
      // https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Headers/X-Forwarded-For
      'X-Forwarded-For': '161.49.222.67' // 仿造 IP，位置去 google 隨便抓一個就可以
    },
  })
  console.log(data)
})()

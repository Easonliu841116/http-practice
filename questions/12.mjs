import axios from 'axios'

// task url = https://lidemy-http-challenge.herokuapp.com/lv12?token={r3d1r3c7}
// api doc = https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4

const baseUrl = 'https://lidemy-http-challenge.herokuapp.com'

;(async () => {
  const { headers } = await axios(baseUrl + '/api/v3/deliver_token', {
    method: 'GET',
    maxRedirects: 0 // 發現被重新導向後，限制轉址即可獲得 token
  })
  console.log(headers)
})()

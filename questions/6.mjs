import axios from 'axios'
import { urlBuilder } from '../util.mjs'

// task url = https://lidemy-http-challenge.herokuapp.com/lv6?token={CHICKENCUTLET}
// api doc = https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a

const auth = 'admin:admin123'

;(async () => {
  const res = await axios(urlBuilder({
    path: '/api/v2/me'
  }), {
    method: 'GET',
    headers: {
      Authorization: 'Basic ' + Buffer.from(auth).toString('base64')
    }
  })

  console.log(res.data) // 取得信箱

  const { data } = await axios(urlBuilder({
    path: '/lv6',
    query: {
      token: '{CHICKENCUTLET}',
      email: 'lib@lidemy.com'
    }
  }), {
    method: 'GET'
  })

  console.log(data)

})()

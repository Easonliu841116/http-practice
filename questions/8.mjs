import axios from 'axios'
import { urlBuilder } from '../util.mjs'

// task url = https://lidemy-http-challenge.herokuapp.com/lv8?token={HsifnAerok}
// api doc = https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a

const auth = 'admin:admin123'

;(async () => {
  const res = await axios(urlBuilder({
    path: '/api/v2/books',
    query: {
      q: '我'
    }
  }), {
    method: 'GET',
    headers: {
      Authorization: 'Basic ' + Buffer.from(auth).toString('base64')
    }
  })

  console.log(res.data) // 找到作者的名字是四個字，key 錯的 ISBN 最後一碼為 7

  const formData = new URLSearchParams()
  formData.append('ISBN', '9981835423')

  const { data } = await axios(urlBuilder({
    path: '/api/v2/books/72'
  }), {
    method: 'PATCH',
    headers: {
      Authorization: 'Basic ' + Buffer.from(auth).toString('base64'),
      'Content-type': 'application/x-www-form-urlencoded'
    },
    data: formData
  })

  console.log(data)
})()

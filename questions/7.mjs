import axios from 'axios'
import { urlBuilder } from '../util.mjs'

// task url = https://lidemy-http-challenge.herokuapp.com/lv7?token={SECurityIsImPORTant}
// api doc = https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a

const auth = 'admin:admin123'

;(async () => {
  const { data } = await axios(urlBuilder({
    path: '/api/v2/books/89'
  }), {
    method: 'DELETE',
    headers: {
      Authorization: 'Basic ' + Buffer.from(auth).toString('base64')
    }
  })

  console.log(data)
})()

import axios from 'axios'
import { urlBuilder } from '../util.mjs'

// task url = https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}
// api doc = https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a

const auth = 'admin:admin123'

;(async () => {
  const { data } = await axios(urlBuilder({
    path: '/api/v2/sys_info'
  }), {
    method: 'GET',
    headers: {
      Authorization: 'Basic ' + Buffer.from(auth).toString('base64'),
      'X-Library-Number': '20',
      'User-Agent': // 瀏覽器環境無法設定 User-Agent
        'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)'
    }
  })

  console.log(data)
})()

import axios from 'axios'
import { urlBuilder } from '../util.mjs'

// task url =https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}

;(async () => {
  const { data } = await axios(urlBuilder({
    path: '/lv10',
    query: {
      token: '{duZDsG3tvoA}',
      num: '9613'
    }
  }), {
    method: 'GET',
  })

  console.log(data) // 是猜猜看的娛樂題！
})()

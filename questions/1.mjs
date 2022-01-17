import axios from 'axios'
import { urlBuilder } from '../util.mjs'

// task url = https://lidemy-http-challenge.herokuapp.com/lv1?token={GOGOGO}

;(async () => {
  const { data } = await axios(urlBuilder({
    path: '/lv1',
    query: {
      token: '{GOGOGO}'
    }
  }), {
    method: 'GET',
  })
  console.log(data)
})()

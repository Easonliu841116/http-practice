import axios from 'axios'
import { urlBuilder } from '../util.mjs'

// task url = https://lidemy-http-challenge.herokuapp.com/lv4?token={LEarnHOWtoLeArn}
// api doc = https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba

;(async () => {
  const res = await axios(urlBuilder({
    path: '/api/books',
    query: {
      q: '世界'
    }
  }), {
    method: 'GET',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })

  console.log(res.data) // 找到村上春樹

  const { data } = await axios(urlBuilder({
    path: '/lv4',
    query: {
      token: '{LEarnHOWtoLeArn}',
      id: 79
    }
  }), {
    method: 'GET'
  })

  console.log(data)
})()

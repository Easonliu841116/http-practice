import axios from 'axios'
import { urlBuilder } from '../util.mjs'

// task url = https://lidemy-http-challenge.herokuapp.com/lv2?token={HellOWOrld}
// api doc = https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba

;(async () => {
  const { data } = await axios(urlBuilder({
    path: '/lv2',
    query: {
      token: '{HellOWOrld}',
      id: 56
    }
  }), {
    method: 'GET',
  })
  console.log(data)
})()

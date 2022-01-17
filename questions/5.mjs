import axios from 'axios'
import { urlBuilder } from '../util.mjs'

// task url = https://lidemy-http-challenge.herokuapp.com/lv5?token={HarukiMurakami}
// api doc = https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba

;(async () => {
  const { data } = await axios(urlBuilder({
    path: '/api/books/23'
  }), {
    method: 'DELETE'
  })

  console.log(data)
})()

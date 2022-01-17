import axios from 'axios'
import qs from 'qs'
import { urlBuilder } from '../util.mjs'

// task url = https://lidemy-http-challenge.herokuapp.com/lv3?token={5566NO1}
// api doc = https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba

;(async () => {
  const formData = new URLSearchParams()
  formData.append('name', '《大腦喜歡這樣學》')
  formData.append('ISBN', '9789863594475')
  const res = await axios(urlBuilder({
    path: '/api/books'
  }), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  })
  console.log(res.data) // 取得 id

  const { data } = await axios(urlBuilder({
    path: '/lv3',
    query: {
      token: '{5566NO1}',
      id: 1989
    }
  }), {
    method: 'GET',
    data: formData
  })
  console.log(data)
})()

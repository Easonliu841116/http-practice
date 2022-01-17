import axios from 'axios'

// task url = https://lidemy-http-challenge.herokuapp.com/lv11?token={IhateCORS}
// api doc = https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4

const baseUrl = 'https://lidemy-http-challenge.herokuapp.com'

;(async () => {
  const { data } = await axios(baseUrl + '/api/v3/hello', {
    method: 'GET',
    headers: {
      'Origin': 'lidemy.com' // 瀏覽器環境無法設定 Origin
    },
  })
  console.log(data)
})()

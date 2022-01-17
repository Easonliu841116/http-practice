import axios from 'axios'

// task url = https://lidemy-http-challenge.herokuapp.com/lv15?token={ILOVELIdemy!!!}
// api doc = https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4

const baseUrl = 'https://lidemy-http-challenge.herokuapp.com/lv15?token={ILOVELIdemy!!!}'

;(async () => {
  const { data } = await axios(baseUrl, {
    method: 'GET',
  })
  console.log(data) // 過關！
})()

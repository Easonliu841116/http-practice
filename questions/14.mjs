import axios from 'axios'

// task url = https://lidemy-http-challenge.herokuapp.com/lv14?token={SEOisHard}
// api doc = https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4

const baseUrl = 'https://lidemy-http-challenge.herokuapp.com'

;(async () => {
  const { data } = await axios(baseUrl + '/api/v3/index', {
    method: 'GET',
    headers: {
      'User-Agent':
        'Googlebot/2.1 (+http://www.googlebot.com/bot.html)' // 做法同第 9 題
    }
  })
  console.log(data)
})()

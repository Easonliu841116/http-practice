export const baseUrl = 'https://lidemy-http-challenge.herokuapp.com'

const utils = {
  urlBuilder({path, query}) {
    if(!path) return baseUrl

    if(!query) return baseUrl + path

    let queryString = ''

    for(let key in query) {
      queryString += encodeURIComponent(key)
      queryString += '='
      queryString += encodeURIComponent(query[key])
      queryString += '&'
    }

    return (baseUrl + path + '?' + queryString).slice(0, -1)
  }
}

export const urlBuilder = utils.urlBuilder

export default utils

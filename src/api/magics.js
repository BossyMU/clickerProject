import Vue from 'vue'

export default {
  getMagics (callback, errCallback) {
    Vue.$http.post('/magics')
    .then(function (response) {
      callback(response.data.magics)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}

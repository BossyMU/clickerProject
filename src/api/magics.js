import Vue from 'vue'

export default {
  getMagics (callback, errCallback) {
    Vue.$http.get('/magics')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}

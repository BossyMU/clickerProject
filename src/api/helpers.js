import Vue from 'vue'

export default {
  getHelpers (callback, errCallback) {
    Vue.$http.get('/helpers')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}

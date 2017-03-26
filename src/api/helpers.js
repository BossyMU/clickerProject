import Vue from 'vue'

export default {
  getHelpers (callback, errCallback) {
    Vue.$http.post('/helpers')
    .then(function (response) {
      callback(response.data.helpers)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}

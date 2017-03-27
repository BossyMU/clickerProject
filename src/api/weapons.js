import Vue from 'vue'

export default {
  getWeapons (callback, errCallback) {
    Vue.$http.get('/weapons')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}

import Vue from 'vue'

export default {
  getWeapons (callback, errCallback) {
    Vue.$http.post('/weapons')
    .then(function (response) {
      callback(response.data.weapons)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}

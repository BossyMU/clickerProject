import Vue from 'vue'

export default {
  getAchievements (callback, errCallback) {
    Vue.$http.post('/achievements')
    .then(function (response) {
      callback(response.data.achievements)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}

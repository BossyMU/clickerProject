import Vue from 'vue'

export default {
  createGame (id, callback, errCallback) {
    Vue.$http.post(`/games/${id}`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}

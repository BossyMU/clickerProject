import Vue from 'vue'

export default {
  createGame (id, callback, errCallback) {
    Vue.$http.post(`/games/${id}`)
    .then(function (response) {
      callback(response.data.game)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  addHelper (id, helperId, callback, errCallback) {
    Vue.$http.post(`/games/${id}/add_helper/${helperId}`)
    .then(function (response) {
      callback(response.data.game)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  useMagic (id, magicId, callback, errCallback) {
    Vue.$http.post(`/games/${id}/use_magic/${magicId}`)
    .then(function (response) {
      callback(response.data.game)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  useWeapon (id, weaponId, callback, errCallback) {
    Vue.$http.post(`/games/${id}/use_weapon/${weaponId}`)
    .then(function (response) {
      callback(response.data.game)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  getStats (id, callback, errCallback) {
    Vue.$http.get(`/games/${id}/stats`)
    .then(function (response) {
      callback(response.data.game)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  archive (id, callback, errCallback) {
    Vue.$http.post(`/games/${id}/archive`)
    .then(function (response) {
      callback(response)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}

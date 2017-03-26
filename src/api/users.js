import Vue from 'vue'
import store from '../store'

export default {
  login (email, password, callback) {
    console.log(store)
    var loginParams = {
      user: {
        email: email,
        password: password
      }
    }
    Vue.$http.post(`/users/login?email=${email}&password=${password}`, loginParams)
    .then(function (response) {
      if (response.data.user === true) {
        store.dispatch('login')
      }
      callback(response.data.user)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  signup (email, password, callback) {
    Vue.$http.post(`/users?email=${email}&password=${password}`)
    .then(function (response) {
      // store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  },
  logout (callback) {
    console.log(store)
    store.dispatch('logout')
    // Vue.$http.delete('/users/api_sign_out.json')
    // .then(function (response) {
    //   store.dispatch('logout')
    //   callback(response.data)
    // })
    // .catch(function (response) {
    //   store.dispatch('logout')
    // })
  },
  checkLoggedIn () {
    Vue.$http.get('/users/check_signed_in.json')
    .then(function (response) {
      store.dispatch('login')
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  getLeaderboards (callback) {
    Vue.$http.get('/users/leaderboards')
    .then(function (response) {
      console.log(response.data.user)
      callback(response.data.user)
    })
    .catch(function (response) {
      console.log('kuy')
    })
  }
}

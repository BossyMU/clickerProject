<template>
  <div class="sign-in">
    <md-list class="md-double-line">
      <center><span class="md-display-4">Monster Clicker</span></center>
        <md-list-item>
          <md-avatar class="md-avatar-icon">
            <md-icon>person</md-icon>
          </md-avatar>
          <div class="md-list-text-container">
            <md-input-container>
              <label>Username</label>
              <md-input v-model="email" placeholder=""></md-input>
            </md-input-container>
          </div>
        </md-list-item>
        <md-list-item>
          <md-avatar class="md-avatar-icon">
            <md-icon>lock</md-icon>
          </md-avatar>
          <div class="md-list-text-container">
            <md-input-container>
              <label>Password</label>
              <md-input v-model="password" placeholder="" type="password" @keyup.enter.native="login"></md-input>
            </md-input-container>
          </div>
        </md-list-item>
      <md-list-item>
        <span style="flex: 1"></span>
        <md-button class="md-raised md-primary" @click.native="login">Login</md-button>
        <md-button class="md-raised md-primary" @click.native="signup">SignUp</md-button>
        <span style="flex: 1"></span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import UsersApi from '../api/users.js'
import router from '../router'

export default {
  name: 'sign-in',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('methods.login')
      UsersApi.login(this.email, this.password, function (_response) {
        // NOTE: Posts.index is not yet implemented
        if (_response === true) router.push({ name: 'Hello' })
      })
    },
    signup () {
      router.push({ name: 'Users.sign_up' })
    }
  }
}
</script>

<style scoped>
.sign-in{
  margin-top: 50px;
}
</style>

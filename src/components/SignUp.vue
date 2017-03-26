<template>
  <div class="sign-up" >
    <md-list class="md-double-line">
      <center><md-header class="md-display-2">Sign Up</md-header></center>
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
              <md-input v-model="password" placeholder="" type="password" @keyup.enter.native="signup"></md-input>
            </md-input-container>
          </div>
        </md-list-item>
      <md-list-item>
        <span style="flex: 1"></span>
        <md-button class="md-raised md-primary" @click.native="submit">Submit</md-button>
        <md-button class="md-raised md-primary" @click.native="cancel">Cancel</md-button>
        <span style="flex: 1"></span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import UsersApi from '../api/users.js'
import router from '../router'

export default {
  name: 'sign-up',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      // console.log('methods.login')
      UsersApi.signup(this.email, this.password, function (_response) {
        // NOTE: Posts.index is not yet implemented
        // router.push({ name: 'Posts.index' })
        router.push({ name: 'Hello' })
      })
    },
    cancel () {
      router.push({ name: 'Users.sign_in' })
    }
  }
}
</script>

<style scoped>
.sign-up{
  margin-top: 50px;
}
</style>

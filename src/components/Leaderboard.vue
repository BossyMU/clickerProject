<template>
	<div class="leaderboard">
		<md-table md-sort="calories">
		  <md-table-header>
		    <md-table-row>
		      <md-table-head md-sort-by="dessert">User</md-table-head>
		      <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">High-Score</md-table-head>
		    </md-table-row>
		  </md-table-header>

		  <md-table-body>
		    <md-table-row v-for="user in posts.user">
		      <md-table-cell>{{user.email}}</md-table-cell>
		      <md-table-cell v-for="(col, index) in 1" :key="index" md-numeric>{{user.highscore}}</md-table-cell>
		    </md-table-row>
		  </md-table-body>
		</md-table>
    <md-button class="md-raised md-primary" @click.native="getLeaderboards">get</md-button>
	</div>
</template>
<script>
import UsersApi from '../api/users.js'
// import Vue from 'vue'

export default {
  mounted: function () {
    this.getLeaderboards()
    // this.getLeaderboards2()
  },
  data () {
    return {
      users: 10,
      age: [1, 2, 3, 4, 5],
      posts: ''
    }
  },
  methods: {
    getLeaderboards () {
      // this.users = UsersApi.getLeaderboards()
      UsersApi.getLeaderboards(_posts => {
        this.posts = _posts
        console.log(this.posts)
      })
      // this.age = UsersApi.getLeaderboards().users[0].email
    }
    // getLeaderboards2 (callback) {
    //   console.log('sfsfksj;sl')
    //   Vue.$http.get('/users/leaderboards')
    //   .then(function (response) {
    //     this.users = response.data.user[0].email
    //     console.log(response.data.user[0])
    //     callback(response.data)
    //   })
    //   .catch(function (response) {
    //     // console.log('kuy')
    //   })
    // }
  }
}
</script>

<style scoped>
.leaderboard{
  margin-right: 200px;
  margin-left: 200px;
}
</style>

<template>
	<div class="leaderboard">
		<md-table md-sort="calories">
		  <md-table-header>
		    <md-table-row>
		      <md-table-head md-sort-by="User">User</md-table-head>
		      <md-table-head md-sort-by="High-Score" md-numeric >High-Score</md-table-head>
		    </md-table-row>
		  </md-table-header>

		  <md-table-body>
		    <md-table-row v-for="user in posts.user">
		      <md-table-cell>{{user.email}}</md-table-cell>
		      <md-table-cell v-for="(col, index) in 1" :key="index" md-numeric>{{user.highscore}}</md-table-cell>
		    </md-table-row>
		  </md-table-body>
		</md-table>
	</div>
</template>

<script>
import UsersApi from '../api/users.js'
export default {
  mounted: function () {
    this.getLeaderboards()
  },
  data () {
    return {
      posts: ''
    }
  },
  methods: {
    getLeaderboards () {
      UsersApi.getLeaderboards(_posts => {
        this.posts = _posts
        console.log(this.posts)
      })
    }
  }
}
</script>

<style scoped>
.leaderboard{
  margin-right: 200px;
  margin-left: 200px;
}
</style>

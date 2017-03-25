<!-- Vue.component('my-table-head', {
  template: "<thead><tr><th>#</th><th>Camper Name</th><th v-on:click='clickRecent'><a href='#'>Points in the last 30 days</a></th><th v-on:click='clickAllTime'><a href='#'>All time points</a></th></tr></thead>",
  methods: {
    clickRecent() {
      this.$emit('get-recent')
    },
    clickAllTime() {
      this.$emit('get-all-time')
    }
  },
}) -->
<template>
	<div class="leaderboard">
		<md-table md-sort="calories">
		  <md-table-header>
		    <md-table-row>
		      <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>
		      <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>
		      <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>
		      <md-table-head md-sort-by="carbs" md-numeric>Carbs (g)</md-table-head>
		      <md-table-head md-sort-by="protein" md-numeric>Protein (g)</md-table-head>
		    </md-table-row>
		  </md-table-header>

		  <md-table-body>
		    <md-table-row v-for="(row, index) in 5" :key="index">
		      <md-table-cell>Dessert Name</md-table-cell>
		      <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
		    </md-table-row>
		  </md-table-body>
		</md-table>
	</div>
</template>

<!-- Vue.component('my-rows', {

  template: "<tr><td>{{index + 1}}</td><td><img :src='camper.img' /> {{ camper.username }}</td><td >{{ camper.recent }}</td><td >{{ camper.alltime }}</td></tr>",

  props: ["camper", "index"],

}) -->

<!-- var app = new Vue({
  el: '#app',
  data: {
    camperList: [],
    allTime: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
    recentTime: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
  },
  mounted() {
    this.getAllTime()
  },
  methods: {
    getAllTime: function() {
      var self = this
      $.getJSON(this.allTime, function(result) {
        self.camperList = result;
        console.log('Now displaying: All Time');
      });
    },
    getRecent: function() {
      var self = this
      $.getJSON(this.recentTime, function(result) {
        self.camperList = result;
        console.log('Now displaying: Recent Time');
      });
    }
  }
}); -->

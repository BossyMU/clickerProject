<template>
  <div class="hello">
  <iccs340-left-sidenav></iccs340-left-sidenav>
    <md-layout md-align="center" md-gutter="16">
  <md-layout md-flex="50">
    <h1>Your Gold {{ gold }}</h1>
  </md-layout>
</md-layout>

    <button v-on:click="updateCount">Greet</button>
    <h1>The button above has been clicked {{ counter }} times.</h1>
        <h1 v-count-down="'2016-07-02 15:08:00'"></h1>
    <h1 v-count-down="'2016/07/02 15:08:00'"></h1>
    <h2> You have {{ sec }} secs left </h2>


    <md-layout md-align="center" md-gutter="16">
      <md-layout md-flex="35">
        <md-progress :md-progress="counter"></md-progress>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'hello',
  data () {
    return {
      counter: store.state.counter,
      gold: store.state.gold,
      sec: store.state.sec
    }
  },
  methods: {
    updateCount: function () {
      if (this.counter !== 0) {
        this.counter -= 1
      } else {
        store.state.counter += 30
        this.counter = store.state.counter
        store.state.gold += 10
        this.gold = store.state.gold
        this.sec += 30
      }
    }
  },
  components: {
    Iccs340LeftSidenav: require('./LeftSidenav2')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
button {
  position: relative;
  top: 100px;
  border: none;
  color: #fff;
  width: 200px;
  height: 200px;
  transition: 0.3s;
  border-radius: 50%;
  background-color: #f2ca27;
}
button:active {
  width: 190px;
  height: 190px;
}
</style>

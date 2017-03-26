<template>
  <div class="hello">
  <iccs340-left-sidenav></iccs340-left-sidenav>
    <md-layout md-align="center" md-gutter="16">
  <md-layout md-flex="50">
    <h1>Your Gold {{ gold }}</h1>
  </md-layout>
</md-layout>

    <button v-on:click="updateCount">Greet</button>
<!--     <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <h1>The button above has been clicked {{ counter }} times.</h1>
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
      msg: 'Welcome to Your Vue.js App',
      counter: 1,
      gold: store.state.gold
    }
  },
  methods: {
    updateCount: function () {
      if (this.counter !== 0) {
        this.counter -= 1
      } else {
        this.counter = 1
        store.state.gold += 10
        this.gold = store.state.gold
      }
    }
  },
  components: {
    Iccs340LeftSidenav: require('../LeftSidenav')
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

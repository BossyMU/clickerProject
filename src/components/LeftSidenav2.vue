<template lang="html">
  <div class="left-sidenav">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Monster Clicker</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>
		<md-tabs md-fixed>
		  <md-tab id="upgrade" md-label="Upgrade" md-icon="trending_up">
		    <p> Upgrade tab.</p>
		    <md-list>
		     	<!-- <md-button v-on:click="buyWeapon">Weapon</md-button> -->
          <md-list-item>
          <span>Weapon</span>
          <md-list-expand>
              <md-list v-for=" x in Weapon_posts.weapons">
                <md-button v-on:click="buyWeapon">{{x.name}}</md-button>
              </md-list>
            </md-list-expand>
          </md-list-item>


          <!-- <md-button>Add Helper</md-button> -->
          <md-list-item>
          <span>Add Helper</span>
          <md-list-expand>
              <md-list v-for=" x in Helper_posts.helpers">
                <md-button v-on:click="buyWeapon">{{x.name}}</md-button>
              </md-list>
            </md-list-expand>
          </md-list-item>

          <!-- <md-button>Magic</md-button> -->
          <md-list-item>
          <span>Magic</span>
          <md-list-expand>
              <md-list v-for=" x in Magic_posts.magics">
                <md-button v-on:click="buyWeapon">{{x.name}}</md-button>
              </md-list>
            </md-list-expand>
          </md-list-item>
			  </md-list>
		  </md-tab>

		  <md-tab md-fixed id="achievement" md-label="Achievement" md-icon="star">
		    <p> Achievement tab.</p>
          <md-list-item>Start The Game
            <md-icon>star</md-icon>
          </md-list-item>
          <md-list-item> Kill 10 Monster
            <md-icon>star_border</md-icon>
          </md-list-item>
          <md-list-item> Click 10 time in 1 second
            <md-icon>star_border</md-icon>
          </md-list-item>
		  </md-tab>
      <md-tab md-fixed md-label="Status" md-icon="favorite">
      <h3> Status tab.</h3>
       <p> Name: John </p>
        <p> Damage: 0 </p>
        <p> Upgraded time: 0</p>
        <p> Used Magic: 0 </p>
      <!-- <p>sfs</p> -->
    </md-tab>
<!-- 		  <md-tab md-fixed id="status" md-label="Status" md-icon="favorite">
		    <h3> Status tab.</h3>
        <p> Name: John </p>
        <p> Damage: 0 </p>
        <p> Upgraded time: 0</p>
        <p> Used Magic: 0 </p>
		  </md-tab> -->
		</md-tabs>
    </md-sidenav>
  </div>
</template>

<script>
import store from '../store'
import WeaponApi from '../api/weapons.js'
import MagicApi from '../api/magics.js'
import HelperApi from '../api/helpers.js'

export default {
  mounted: function () {
    this.getWeapons()
    this.getMagics()
    this.getHelpers()
  },
  data () {
    return {
      Weapon_posts: '',
      Helper_posts: '',
      Magic_posts: ''
    }
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    buyWeapon () {
      console.log('BUY')
      store.state.gold -= 10
    },
    getWeapons () {
      WeaponApi.getWeapons(_posts => {
        this.Weapon_posts = _posts
        console.log(this.Weapon_posts)
      })
    },
    getMagics () {
      MagicApi.getMagics(_posts => {
        this.Magic_posts = _posts
        console.log(this.Magic_posts)
      })
    },
    getHelpers () {
      HelperApi.getHelpers(_posts => {
        this.Helper_posts = _posts
        console.log(this.Helper_posts)
      })
    }
  }
}
</script>

</script>
<style lang="css">
</style>

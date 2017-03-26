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
		     	<md-button v-on:click="buyWeapon">Weapon</md-button>
          <md-button>Add Helper</md-button>
          <md-button>Magic</md-button>
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
      <p>sfs</p>
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
export default {
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    buyWeapon () {
      console.log('BUY')
      this.gold -= 10
    }
  }
}
</script>

<style lang="css">
</style>

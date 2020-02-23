<template>
  <div id="app">
    <Navigation v-if="showNav"/> 
    <router-view/>
  </div>
</template>
<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
  computed: {
    showNav(){
      return this.$store.state.showNav;
    }
  }
}
</script>
<style lang="scss">
  @import './assets/scss/main';
</style>

<template>
  <div id="app">
    <transition name="fade">
      <Navigation v-if="showNav"/> 
    </transition>
    <transition name="fade">
      <router-view/>
    </transition>
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

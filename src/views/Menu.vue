<template>
  <main id="menu">
    <Navicon :type="'navicon'" /> 
    <Carticon />
    <h1>Meny</h1>
    <MenuItem v-for="item in menu" :key="item.id" :item="item" />
  </main>
</template>
<script>
import Navicon from './../components/Navicon'
import Carticon from './../components/Carticon'
import MenuItem from './../components/MenuItem'

export default {
  name: 'Menu',
  components: {
    Navicon,
    Carticon,
    MenuItem
  },
  computed: {
    menu(){
      return this.$store.state.menu;
    }
  }
}
</script>
<style lang="scss">
#menu {
  height: 100vh;

  .darken {
    background: #222;
  }

  h1 {
    margin: 2rem 0 1rem 0;
  }
}

</style>
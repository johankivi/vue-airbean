<template>
  <main id="home" @click="$router.push('/menu')">
    <Navicon :type="'navicon'" /> 
    <img src="./../assets/graphics/airbean-landing.svg" alt="Logo">
  </main>
</template>

<script>
import Navicon from '@/components/Navicon';

export default {
  name: 'Home',
  components: {
        Navicon
  },
}
</script>
<style lang="scss">
@import './../assets/scss/variables';

#home {
  height: 100vh;
  background-color: $green;
  background-image: url('./../assets/graphics/intro-graphic-left.svg'), url('./../assets/graphics/intro-graphic-right.svg'); 
  background-position: top left, top right;
  background-size: auto 100%, auto 100%;
  background-repeat: no-repeat, no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
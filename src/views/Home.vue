<template>
  <main id="home" @click="$router.push('/menu')">
    <img src="./../assets/graphics/airbean-landing.svg" alt="Logo">
  </main>
</template>

<script>
export default {
  name: 'Home'
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
<template>
  <main id="status">
    <p class="order">Ditt ordernummer är <b>#{{order.orderNr}}</b>.</p>
    <img src="./../assets/graphics/drone.svg" alt="Drone">
    <h1>Din beställning är på väg!</h1>
    <p class="eta">ETA {{ order.ETA }} min</p>
    <a href="#" class="btn" @click="$router.push('/menu')">Ok, cool!</a>
  </main>
</template>
<script>
export default {
  name: 'Status',
  computed: {
    order(){
      return this.$store.state.activeOrder;
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/variables';

#status {
  height: 100vh;
  background: $orange;
  color: white;
  text-align: center;

  img {
    margin: 2rem 0;
    animation: hover 4s linear infinite;
  }

  @keyframes hover {
      0% { transform: translateY(0) rotateZ(0deg); }
     25% { transform: translateY(.25rem) rotateZ(1deg); }
     50% { transform: translateY(.5rem) rotateZ(0deg); }
     75% { transform: translateY(.25rem) rotateZ(-1deg); }
    100% { transform: translateY(0) rotateZ(0deg); }
  }

  .eta {
    font-size: 1.2rem;
    margin: 2rem;
  }

  .btn {
    display: inline-flex;
    max-width: 14rem;
    width: 100%;
    font-family: 'PT Serif', serif;
    font-size: 1.4rem;
    text-decoration: none;
    height: 4rem;
    margin: 1rem 0;
    justify-content: center;
    align-items: center;
    color: #222;
    border-radius: 999rem;
    background: white;
  }
}
</style>
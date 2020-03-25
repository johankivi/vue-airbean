<template>
  <main id="status">
    <section v-if="loading" class="loader">
      <img src="./../assets/graphics/loader.png" alt="loading..." >
      <p>Ditt Kaffe bryggs...</p>
    </section>
    <p class="order" v-if="order.orderNr">Ditt ordernummer är <b>#{{order.orderNr}}</b>.</p>
    <img v-if="order.orderNr" src="./../assets/graphics/drone.svg" alt="Drone">

    <h1 v-if="order.orderNr">Din beställning är på väg!</h1>
    <h1 v-if="!order.orderNr && !loading">Här ser du sen din kaffebeställning!</h1>
    <p class="eta" v-if="order.orderNr">ETA {{ order.eta }} min</p>
    <a href="#" class="btn" @click="$router.push('/menu')">Ok, cool!</a>
  </main>
</template>
<script>
export default {
  name: 'Status',
  computed: {
    order(){
      return this.$store.state.activeOrder;
    },
    loading(){
      return this.$store.state.loading; 
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .order {
    margin: 2rem 0;
  }

  .loader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;

    img {
      width: 4rem;
      animation: none;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }

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
    display: flex;
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
    background: rgba($color: #FFFFFF, $alpha: .8);

    &:active {
      background: white;
    }
  }
}
</style>
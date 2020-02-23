<template>
  <aside id="carticon" @click="showCart = !showCart">
    <aside class="badge">{{ cartLength }}</aside>
    <img src="./../assets/graphics/bag.svg" alt="cart">
    <Cart v-if="showCart" />
  </aside>
</template>

<script>
import Cart from './Cart';

export default {
  name: 'Carticon',
  components: {
    Cart
  },
  data(){
    return {
      showCart: false
    }
  },
  computed: {
    cart(){
      return this.$store.state.cart;
    },
    cartLength(){
      return 8;
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/variables';

#carticon {
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999rem;
  background: $brown;
  position: fixed;
  top: 1rem;
  right: 1rem;

  .badge {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.2rem;
    height: 1.2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999rem;
    background: $orange;
    font-size: .8rem;
  }
}
</style>

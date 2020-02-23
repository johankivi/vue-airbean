<template>
  <aside id="carticon">
    <aside class="badge" :class="{ pow : pow }">{{ cartLength }}</aside>
    <img src="./../assets/graphics/bag.svg" alt="cart" @click="showCart = !showCart">
    <transition name="fade">
      <Cart v-if="showCart" />
    </transition>
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
      showCart: false,
      pow: false
    }
  },
  computed: {
    cart(){
      return this.$store.state.cart;
    },
    cartLength(){
      let total = 0;
      this.$store.state.cart.forEach(item => {
          total += item.quantity;
      });

      return total;
    }
  },
  watch: {
    cartLength(){
      this.pow = true;

      setTimeout(() => {
        this.pow = false
      }, 200);
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
    width: 1.25rem;
    height: 1.25rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999rem;
    background: $orange;
    font-size: .7rem;
    font-weight: 700;

    &.pow {
      animation: pow .2s ease;
    }

    @keyframes pow {
      from { transform: scale(1.4); opacity: .8; }
        to { transform: scale(1); opacity: 1; }
    }
  }
}
</style>

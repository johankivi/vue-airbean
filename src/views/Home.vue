<template>
  <main id="home">
    <Navicon :type="'navicon'" /> 
    <h1>Home</h1>
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

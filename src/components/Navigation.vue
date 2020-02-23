<template>
    <nav id="main-nav">
        <Navicon :type="'close'"/> 
        <router-link to="/menu">Meny</router-link>
        <div class="spacer"></div>
        <router-link to="/about">Vårt Kaffe</router-link>
        <div class="spacer"></div>
        <router-link to="/status">Orderstatus</router-link>
    </nav>
</template>
<script>
import Navicon from './Navicon';

export default {
    name: 'Navigation',
    components: {
        Navicon
    }
}
</script>
<style lang="scss">
@import './../assets/scss/variables';

#main-nav {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: $darkbrown, $alpha: .98);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: white;
        text-decoration: none;
        font-family: 'PT Serif', serif;
        font-size: 1.8rem;
        margin: 1rem 0;
    }

    .spacer {
        height: 1px;
        width: 2rem;
        background: rgba($color: #ffffff, $alpha: .2);
    }
}
</style>
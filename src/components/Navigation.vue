<template>
    <nav id="main-nav">
        <Navicon :type="'close'"/> 
        <a href="#" @click="goTo('/menu')">Meny</a>
        <div class="spacer"></div>
        <a href="#" @click="goTo('/about')">Vårt Kaffe</a>
        <div class="spacer"></div>
        <a href="#" @click="goTo('/profile')">Min sida</a>
        <div class="spacer"></div>
        <a href="#" @click="goTo('/status')">Orderstatus</a>
    </nav>
</template>
<script>
import Navicon from './Navicon';

export default {
    name: 'Navigation',
    components: {
        Navicon
    },
    methods: {
        goTo(route){
            this.$store.commit('closeNav');

            if(route !== this.$route.path){
                this.$router.push(route);
            }

        }
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
        font-size: 2rem;
        margin: 2rem 0;
    }

    .spacer {
        height: 1px;
        width: 2rem;
        background: rgba($color: #ffffff, $alpha: .2);
    }
}
</style>
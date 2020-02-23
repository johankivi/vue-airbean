<template>
    <nav class="navicon" @click="close">
        <img v-if="type === 'navicon'" src="./../assets/graphics/navicon.svg" alt="navicon">
        <img v-if="type === 'close'" src="./../assets/graphics/close.svg" alt="close">
    </nav>
</template>
<script>
export default {
    name: 'Navicon',
    props: {
        type: String
    },
    methods: {
        close(){
            if(this.type === 'close') {
                this.$store.commit('closeNav');
            }
        }
    }
}
</script>
<style lang="scss">
    .navicon {
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.4rem;
        height: 1.4rem;
        padding: .8rem;
        border-radius: 999rem;
        position: fixed;
        top: 1rem;
        left: 1rem;

        img {
            width: 100%;
        }
    }
</style>
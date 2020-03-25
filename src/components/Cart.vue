<template>
    <section id="cart">
        <h2>Din beställning</h2>
        <CartItem v-for="(item, index) in cart" :key="index" :item="item" />
        <footer class="total">
            <h3>Total<span class="dots"></span>{{total}} kr</h3>
            <p>Inkl moms + drönarleverans</p>
        </footer>
        <a href="#" class="btn" @click="sendOrder">I need coffee!</a>
    </section>
</template>
<script>
import CartItem from './CartItem'

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    methods: {
        sendOrder(){
            this.$store.dispatch('sendOrder')
            this.$router.push('/status')
        }
    },
    computed: {
        cart(){
            return this.$store.state.cart;
        },
        moms(){
            return (this.total * 0.25).toFixed()*1;
        },
        total(){
            let total = 0;
            this.$store.state.cart.forEach(item => {
                total += item.price * item.quantity;
            });

            return total;
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/variables';

#cart {
    position: fixed;
    padding: 1rem;
    top: 4rem;
    right: 0;
    transform: translateX(0%);
    width: calc(100vw - 4rem);
    margin: 1rem;
    background: white;
    z-index: 999;
    border-radius: .25rem;
    box-shadow: 0 0 .5rem rgba(0,0,0,.2), 0 0 4rem rgba(0,0,0,.2) ;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 91%;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: white;
        border-top: 0;
        margin-left: -8px;
        margin-top: -8px;
        border-radius: 2px;
    }

    footer {
        display: flex;
        flex-direction: column;
        margin: 2rem 0;

        h3 {
            margin: 0;
            display: flex;

            .dots {
                flex: 1;
                border-bottom: 1px dotted rgba(0,0,0,.2);
                margin: 0 .25rem .3rem .25rem;
            }
        }

        p {
            margin: 0;
            padding: 0;
        }

    }
    
}

</style>
<template>
    <article class="cart-item">
        <h3 class="cart-item-title">{{item.title}}<span class="dots"></span></h3>
        <p class="cart-item-desc">{{total}} kr</p>
        <aside class="item-quantity">
            <img src="./../assets/graphics/arrow-up.svg" alt="increse" @click="increse">
            <p class="quantity">{{ item.quantity }}</p>
            <img src="./../assets/graphics/arrow-down.svg" alt="decrese" @click="decrese">
        </aside>
    </article>
</template>
<script>


export default {
    name: 'CartItem',
    props: {
        item: Object
    },
    methods: {
        increse(){
            this.item.quantity++;
        },
        decrese(){
            if(this.item.quantity > 1){
                this.item.quantity--;
            } else {
                this.$store.commit('removeItem', this.item.id)
            }

        }
    },
    computed: {
        total(){
            return this.item.price * this.item.quantity;
        }
    }
}
</script>
<style lang="scss">

.cart-item {
    display: grid;
    grid-template-columns: 1fr 2rem;
    grid-template-rows: 2rem 1.4rem;
    margin: 0 0 1rem 0;

    .cart-item-title {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: flex-end;

        .dots {
            flex: 1;
            border-bottom: 1px dotted rgba(0,0,0,.2);
            margin: 0 0 .3rem 0;
        }
    }

    .cart-item-desc {
        margin: 0;
    }

    .item-quantity {
        grid-column: 2/3;
        grid-row: 1/3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        img {
            margin: .25rem;
        }

        p {
            margin: 0;
            padding: 0;
            font-weight: 700;
        }
    }
}

</style>
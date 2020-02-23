<template>
  <article class="menu-item">
      <aside class="add-item" @click="addItem">
          <button>
              <img src="./../assets/graphics/add.svg" alt="add item">
          </button>
      </aside>
      <h3 class="item-title">{{ item.title }}<span class="dots"></span></h3>
      <p class="item-desc">{{ item.desc }}</p>
      <h3 class="item-price">{{item.price}} kr</h3>
  </article>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
      item: Object
  },
  methods: {
      addItem(){
          this.$store.dispatch('addItem', this.item)
      }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/variables';

#menu {

    h1 {
        text-align: center;
    }

    .menu-item {
        display: grid;
        grid-template-columns: 2.4rem 1fr 4rem;
        grid-template-rows: 1.5rem 1.5rem;
        margin: 0 0 1.2rem 0;

        .add-item {
            display: flex;
            padding: .5rem 0 0 ;
            grid-row: 1/3;

            button {
                appearance: none;
                margin: 0;
                padding: 0;
                border: none;
                border-radius: 999rem;
                background: $brown;
                width: 1.8rem;
                height: 1.8rem;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 60%;
                }
            }
        }

        .item-title {
            margin: 0;
            padding: 0;
            grid-column: 2/3;
            grid-row: 1/2;
            display: flex;

            .dots {
                flex: 1;
                border-bottom: 1px dotted rgba(0,0,0,.2);
                margin: 0 .125rem ;
            }
        }

        .item-desc {
            font-size: .8rem;
            margin: 0;
            padding: 0;
            grid-column: 2/3;
            grid-row: 2/3;
        }

        .item-price {
            grid-column: 3/4;
            grid-row: 1/3;
            margin: 0;
            padding: 0;
            text-align: right;
        }
    }
}
</style>
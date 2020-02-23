import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeOrder: {
      
    },
    showNav: false,
    menu: [
      { id: 1, title: 'Bryggkaffe', desc: 'Bryggd på månadens bönor.', price: 39 },
      { id: 2, title: 'Caffè Doppio', desc: 'Bryggd på månadens bönor.', price: 49 },
      { id: 3, title: 'Cappuccino', desc: 'Bryggd på månadens bönor.', price: 49 },
      { id: 4, title: 'Latte Macchiato', desc: 'Bryggd på månadens bönor.', price: 49 },
      { id: 5, title: 'Kaffe Latte', desc: 'Bryggd på månadens bönor.', price: 54 },
      { id: 6, title: 'Cortado', desc: 'Bryggd på månadens bönor.', price: 39 }
    ],
    cart: []
  },
  mutations: {
    closeNav(state) {
      state.showNav = !state.showNav;
    },
    updateItem(state, id){
      let index = state.cart.findIndex(item => item.id === id)      
      state.cart[index].quantity++;
    },
    removeItem(state, id){
      let index = state.cart.findIndex(item => item.id === id)      
      state.cart.splice(index, 1);
    },
    addItem(state, item){
      state.cart.push({
        id: item.id,
        price: item.price,
        title: item.title,
        quantity: 1
      });
    },
    emptyCart(state){
      state.cart = [];
    },
    orderStatus(state, order){
      state.activeOrder = order;
    }
  },
  actions: {
    addItem(ctx, item){
      let exists = ctx.state.cart.filter(x => x.id === item.id);

      if(exists.length > 0){
        ctx.commit('updateItem', exists[0].id)
      } else {
        ctx.commit('addItem', item);
      }
    },
    async sendOrder(ctx){
      console.log('Sending order.')

      let order = {
        timeStamp: Date.now(),
        items: ctx.state.cart
      }

      // POST and fake order return
      let resp = await new Promise((resolve) => {

        setTimeout(() => {
          order.ETA = 13
          order.orderNr = 'SW921389B'
          resolve(order);
        }, 300)

      });

      ctx.commit('orderStatus', resp);

      // Empty cart
      ctx.commit('emptyCart');


    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import Menu from './../assets/data/menu';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeOrder: {},
    loading: false,
    showNav: false,
    menu: [],
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
    },
    setMenu(state, menu){
      state.menu = menu;
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

      ctx.state.activeOrder = {};

      let order = {
        timeStamp: Date.now(),
        items: ctx.state.cart
      }

      // remove activeOrder
      ctx.state.activeOrder = {};
      
      // Show loader
      ctx.state.loading = true;

      // POST and fake order return
      let resp = await new Promise((resolve) => {

        setTimeout(() => {
          order.ETA = 13
          order.orderNr = 'SW921389B'
          resolve(order);
        }, 2000)

      });

      ctx.state.loading = false;
      ctx.commit('orderStatus', resp);

      // Empty cart
      ctx.commit('emptyCart');


    },
    async getMenu(ctx){

      // Fake API call
      setTimeout(() => {
        ctx.commit('setMenu', Menu.menu )
      }, 200)

    }
  },
  modules: {
  }
})

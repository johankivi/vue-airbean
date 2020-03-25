import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

const apiUrl = 'http://localhost:5000/api/beans';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeOrder: {},
    loading: false,
    showNav: false,
    profile: {
      name: 'Sixten Kaffelovér',
      email: 'sixten.kaffelover@zocom.se',
      orderHistory: []
    },
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
    },
    updateUser(state, user){
      state.profile = user;
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
        items: ctx.state.cart
      }

      // remove activeOrder
      ctx.state.activeOrder = {};
      
      // Show loader
      ctx.state.loading = true;

      let uuid = localStorage.getItem('airbeans');

      // POST and order return
      let resp = await Axios.post(`${apiUrl}/order/${uuid}`, order)
      ctx.state.loading = false;
      ctx.commit('orderStatus', resp.data);

      // Empty cart
      ctx.commit('emptyCart');


    },
    async getMenu(ctx){

      ctx.state.loading = true;

      // Fake API call
      let resp = await Axios.get(apiUrl);
      ctx.commit('setMenu', resp.data.menu )
      
      ctx.state.loading = false;

    },
    async checkState(ctx){
      try {
    
        if(localStorage.getItem('airbeans') === null){

          // get UUID from server
          let uuid = await Axios.post(`${apiUrl}/key`);
          // store in localstorage
          localStorage.setItem('airbeans', uuid.data.key );

        } else {

          // Get user data
          let profile = await Axios.get(`${apiUrl}/profile/${localStorage.getItem('airbeans')}`);
          ctx.commit('updateUser', profile.data)

        }

      } catch(err){
        console.error(err);
      }
    }
  }
})

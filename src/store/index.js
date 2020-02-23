import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNav: false,
    menu: [
      { id: 1, title: 'Bryggkaffe', desc: 'Bryggd på månadens bönor.', price: 39 },
      { id: 2, title: 'Caffè Doppio', desc: 'Bryggd på månadens bönor.', price: 49 },
      { id: 3, title: 'Cappuccino', desc: 'Bryggd på månadens bönor.', price: 49 },
      { id: 4, title: 'Latte Macchiato', desc: 'Bryggd på månadens bönor.', price: 49 },
      { id: 5, title: 'Kaffe Latte', desc: 'Bryggd på månadens bönor.', price: 54 },
      { id: 6, title: 'Cortado', desc: 'Bryggd på månadens bönor.', price: 39 }
    ],
    cart: {
      items: [
        { title: 'Bryggkaffe', price: 39, quantity: 3 },
        { title: 'Cortado', price: 39, quantity: 2 }
      ],
      total: Number
    }

  },
  mutations: {
    closeNav (state) {
      state.showNav = !state.showNav;
    }
  },
  actions: {
  },
  modules: {
  }
})

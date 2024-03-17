import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    products: [],
    users: [],
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setUsers(state, users) {
      state.users = users
    }
  },
  actions: {
    async getProducts(context) {
      try {
        const response = await axios.get(baseUrl + '/products')
        context.commit('setProducts', response.data)
      } catch (error) {
        console.error('Error. Unable to retrieve products:', error)
      }
    },
    async getUsers(context) {
      try {
        const response = await axios.get(baseUrl + '/users')
        context.commit('setUsers', response.data)
      } catch (e) {
        console.error('Error. Unable to retrieve users')
      }
    },
    async deleteUsers(context, userID) {
      try {
        await axios.delete(baseURL + '/users/' + userID)
      } catch (e) {
        console.error('Error. Unable to delete user')
      }
      window.location.reload()
    },
  },
  modules: {
  }
})

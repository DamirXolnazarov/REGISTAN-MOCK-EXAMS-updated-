import { createStore } from "vuex"
export default createStore({
    state: {
        coins: 0,
    },
    getters: {
        coins: (state) => state.coins
    },

    mutations: {
        ADD_COINS(state, amount) {
                state.coins += amount
                window.localStorage.coins = JSON.stringify(state.coins)
        },
       
    },

    actions: {
        ADD_COINS({ commit }, amount) {
            commit("ADD_COINS", amount)
        },
       
    }
})


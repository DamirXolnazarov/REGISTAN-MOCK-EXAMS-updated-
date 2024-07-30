import { createStore } from "vuex";

export default createStore({
    state: {
       coins: 0
    },
    getters: {
        coins: (state) => state.coins,
    },
    mutations: {
        ADD_COIN_MUTATION(state, amount) {
            if(JSON.parse(window.localStorage.coins) !== ''){
                state.coins = JSON.parse(window.localStorage.coins)
                state.coins += amount;
                window.localStorage.coins = JSON.stringify(state.coins)
            }else{
                state.coins += amount;
                window.localStorage.coins = JSON.stringify(state.coins)
                state.coins = JSON.parse(window.localStorage.coins)
            }
                console.log(state.coins);
        },
    },
    actions: {
        ADD_COIN_MUTATION({ commit }, amount) {
            commit("ADD_COIN_MUTATION", amount);
        },
    },
});

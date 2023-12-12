import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store=new Vuex.Store({

    state: {
        counter: 0
    },

    getters: {
        doubleCounter: state=> {
            return state.counter*2

            
        },

        StringCounter: state=> {
            return state.counter + ' Clicks'
        }
    },

    mutations: {
        increment:(state,payload)=>{
            state.counter+=payload;
        },

        decrement: (state,payload)=> {
            state.counter-=payload;
        }
    },

    actions :
     {
        // increment: ({commit})=>{
        //     commit('increment');
        // },

        // decrement :({commit})=> {
        //     commit('decrement');
        // },

        asynIncrement: ({commit},payload)=>{
            setTimeout(()=>{

                commit('increment',payload)

            },1000)
           
        },
    
        asynDecrement: ({commit},payload)=>{
            setTimeout(()=>{

                commit('decrement',payload)

            },1000)
           
        }
    
    }
    
});
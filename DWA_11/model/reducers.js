import { State } from "./store.js";
import { Action } from "./actions.js";

/**
 * @param {State} state
 * @param {Action} action
 */

export const reducer = (state, action) => {
     switch (action.type){
        case "INCREMENT" : {
            return {
                ...state,
                phase: 'counting',
                count: state.count + 1,
            }

        }

        case "DECREMENT" : {
            return {
                ...state,
                phase: 'counting',
                count: state.count - 1,
            }


        }

        case "RESET" : {
            return {
                ...state,
                phase: 'idle',
                count: 0, 
            }


        }

        default: return state

     }

    return state
}
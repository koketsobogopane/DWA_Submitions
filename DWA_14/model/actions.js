import { State,  } from "./store.js";


/**
 * increment the Count in the store 
 * 
 * @typedef {object} Increment 
 * @prop {'INCREMENT'} type
 */

/**
 * @return {Increment}
 */
export const incrementCount = () => { 
    
    return {
        type: 'INCREMENT',
    }
}

/**
 * decrement the Count in the store 
 * 
 * @typedef {object} Decrement 
 * @prop {'DECREMENT'} type 
 */

/**
 * @return {Decrement}
 */
export const decrementCount = () => {
    
    return {
        type: 'DECREMENT',
    }
}

/**
 * Resets the Count in the store 
 * 
 * @typedef {object} Reset 
 * @prop {'RESET'} type
 */


/**
 * @return {Reset}
 */
export const resetNumber = () => {
    return {
        type: 'RESET',
    }
}

/**
 * @typedef {Increment | Decrement | Reset} Action
 */

export const Action = '' 
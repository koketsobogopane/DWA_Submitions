import { Action } from "./actions.js"
import { reducer } from "./reducers.js"


/**
 * @typedef {object} State 
 * @prop {'idle' | 'counting'} phase
 * @prop {number} count   
 */
export const State = {}


/**
 * @type {State}
 */
export const initialState = {
    phase: 'idle',
    count: 0,
}


/**
 * @callback Getstate
 * @returns {State}
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscribtion
 * @param {State} prev
 * @param {State} next
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */


/**
 * @type {Array<Subscribtion>} 
 */
const subscribers = []

/**
 * @type {Array<State>}
 */


const states = [initialState]
/**
 * @return {State}
 */

export const getState = () => {
  return Object.freeze({...states[0]})
}

/**
 * @param {Action} action
 */
export const dispatch = (action) => {
    const prevState = getState()
    const nextState = reducer(prevState, action)
    subscribers.forEach((item) => item(prevState, nextState))
    states.unshift(nextState)
}

/**
 * @param {Subscribtion} subscription
 * @return {EmptyFn}
 */
export const subscribe = (subscription) => {
    subscribers.push(subscription)
    const handler = (item) => item !== subscription

    const unsubscribe = () => {
        const newSubscribers = subscribers.filter(handler)

    }

    return unsubscribe
}




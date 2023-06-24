import { subscribe, dispatch, getState } from "./model/store.js";
import { incrementCount, decrementCount, resetNumber } from "./model/actions.js";

subscribe((_, next)=> console.log (next))
console.log (getState())
dispatch(incrementCount())
dispatch(incrementCount())
dispatch(incrementCount())
dispatch(resetNumber())
console.log (getState())
// dispatch(incrementCount())
// dispatch(resetNumber())



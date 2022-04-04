import store from './store'
import {bugAdded, bugResolved} from "./actions";

const l = (arg) => console.log(arg)

store.dispatch(bugAdded("Bug 1 added"))
store.dispatch(bugResolved(1))

// const unsubscribe = store.subscribe(() => {
//     l("store changed! ", store.getState())
// })
//
//
// store.dispatch({
//     type: BUG_ADDED,
//     payload: {
//         description: "Bug1"
//     }
// })
// unsubscribe()
// store.dispatch({
//     type: BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })
l(store.getState())
import * as actions from "./actionTypes";

export const bugAdded =(description) => {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description
        }
    }

}


export const bugResolved =(id) => {
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id: id
        }
    }

}


// export function bugAdded(description){
//     return {
//         type: BUG_ADDED,
//         payload: {
//             description: "Bug1"
//         }
//     }
// }
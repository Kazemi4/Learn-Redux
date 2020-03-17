//Import
const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

//My items
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//My Actions
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'Second reduc action'
    }
} 

//Next step will be my Reducer (previousState, action) => newState

// const initialState = {
//     numbOfCakes: 10,
//     numbOfIceCreams: 20
// }

const initialCakeState = {
    numbOfCakes: 10
}

const initialIceScreamState = {
    numbOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numbOfCakes: state.numbOfCakes -1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceScreamState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numbOfIceCreams: state.numbOfIceCreams -1
        }
        default: return state
    }
}


// Next step is about Redux Store also i'd like to implement combineReducers

//Combine Reducers Method
const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer
})

//Store
const store = createStore(rootReducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
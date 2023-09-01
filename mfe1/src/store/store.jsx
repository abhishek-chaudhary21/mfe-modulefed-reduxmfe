import { configureStore } from '@reduxjs/toolkit'
import { GlobalStore } from 'redux-micro-frontend';

export const storeName = "Mfe1"


export const Counter1Reducer = (state = {count : 0}, action) => {
    console.log("here")
    if (action.type === "INCREMENT_COUNTER1") return { count: state.count + 1 };
    if (action.type === "DECREMENT_COUNTER1") return { count: state.count - 1 };
    return state;
}


const store = configureStore({reducer: Counter1Reducer})

export const globalStore = GlobalStore.Get()
globalStore.RegisterStore("Mfe1", store, ["INCREMENT_COUNTER1"])
import React, { useEffect, useState } from "react";
import "./counter1.css";
import {globalStore, storeName} from "./store/store"
import { DecrementCounter1, IncrementCounter1 } from "./store/actions";

export default function Counter1() {

  const [state, setState] = useState({count1: 0, count2: 0})

  useEffect( () => {
    globalStore.Subscribe(storeName, updateLocalCounter)
    globalStore.SubscribeToPartnerState(storeName, "Mfe2", updateGlobalCounter)
  
    // globalStore.SubscribeToGlobalState(storeName, updateCounters)
  }, [])

  const updateCounters = (globalState) => {
    const updatedState =  (state) => {
      return {
        count1 :  globalState?.Mfe1?.count ?? state.count1,
        count2 :  globalState?.Mfe2?.count ?? state.count2
      }
    }
    setState(updatedState)
  }

  const updateLocalCounter = (mfe1) => {
    console.log("updatingLocalCounter here")
    const updatedState =  (state) => {
      return {
        ...state,
        count1: mfe1.count
      }
    }
    setState(updatedState)
  }

  const updateGlobalCounter = (mfe2) => {
    console.log("updateGlobalCounter here")
    const updatedState =  (state) => {
      return {
        ...state,
        count2: mfe2.count
      }
    }
    setState(updatedState)
  }



  const incrementLocalCounter = () => {
    console.log("In here")
    globalStore.DispatchAction(storeName, IncrementCounter1())
  }

  const decrementLocalCounter = () => {
    console.log("In here to decrement")
    globalStore.DispatchAction(storeName, DecrementCounter1())
  }

  return (
      <div className = "container1">
        <h1>This is MFE1. Counter1 is local here.</h1>
				<div>Change local counter: </div>
        <button className = "add" onClick={incrementLocalCounter}> Increment </button>
        <button className = "sub" onClick={decrementLocalCounter}> Decrement </button>
				<div >Counter1 value: {state.count1} </div>
        <div>Counter2 value: {state.count2}</div>
      </div>

  ); 
}

import React, { useEffect, useState } from "react";
import "./counter2.css";
import {globalStore, storeName} from "./store/store"
import { DecrementCounter2, IncrementCounter2 } from "./store/actions";


export default function Counter2() {

  const [state, setState] = useState({count1: 0, count2: 0})
  
  useEffect(() => {
    globalStore.SubscribeToGlobalState(storeName, updateCounters)
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


  const incrementLocalCounter = () => {
    console.log("In here")
    globalStore.DispatchAction(storeName, IncrementCounter2())
  }

  const decrementLocalCounter = () => {
    console.log("In here to decrement")
    globalStore.DispatchAction(storeName, DecrementCounter2())
  }

  return (
		<div className="container2">
			<h1>This is MFE2. Counter2 is local here.</h1>
			<div>Change local counter: </div>
			<button className="add" onClick={incrementLocalCounter}>
				Increment
			</button>
			<button className="sub" onClick={decrementLocalCounter}>
				Decrement
			</button>
			<div>Counter1 value: {state.count1} </div>
			<div>Counter2 value: {state.count2}</div>
		</div>
  )
}

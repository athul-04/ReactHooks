import React from 'react'
//Save without re-render
//can keep previous state values..
//DOM access
//Only modifies the dom if the particluar element renders..
//while setting the value of the current it has to be used with useEffect
//Dont use it in dependency...
//Dont Over use it....
export default function UseRefHook() {
    const [useStateCounter, setUseStateCounter] = React.useState(0) ;
    const useRefCounter=React.useRef(0);
    const useStateIncrement=()=>{
        setUseStateCounter(useStateCounter+1) ;
    }
    const useRefIncrement=()=>{
        useRefCounter.current++;
    }
    console.log("Render completed");
  return (
    <div>
      <h1>{useStateCounter}</h1>
      <button onClick={useStateIncrement}>Click to increment(useState)</button>
      <h1>{useRefCounter.current}</h1>
      <button onClick={useRefIncrement}>Click to increment(useRef)</button>
    </div>
  )
}

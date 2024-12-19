import React, { useEffect, useRef } from 'react'

export default function UseRefForPreviousState() {

    const [value, setValue] = React.useState("");
    const refValue=useRef(value);
    const changeHandler=(e)=>{
        setValue(e.target.value);
        
    }
    useEffect(()=>{
        refValue.current=value;
    },[value])

  return (
    <div>
        <h1>{value}</h1>
        <input type='text'  value={value} onChange={changeHandler} />
        <h1>{refValue.current}</h1>
    </div>
  )
}

import React, { useState } from 'react'

const UseState = () => {
    const [counter,setCounter]=useState({id:0,num:0});

    const increment=()=>{
        setCounter((prevVal)=>({
            ...prevVal,
            num:prevVal.num+1
        }));

    }
    const decrement=()=>{
        setCounter((prevVal)=>({
            ...prevVal,
            num:prevVal.num-1
        }));
    }

    const [arrayOfObjects,setArrayOfObjects]=useState([{id:0,num:0},{id:1,num:3}])
    const AddInArrayOfObjects = () => {
        const newState={
            id:3,
            num:5
        }
        // setArrayOfObjects((prevState)=>([ //adding new state
        //     ...prevState,
        //     newState,
        // ]))
        // setArrayOfObjects((prevItems) =>  //updating a existing item
        //     prevItems.map((item) =>
        //       item.id === 0 ? { ...item, num:100 } : item
        //     )
        //   );
        // console.log(arrayOfObjects);
    }  


    

    const DisplayArrayOfObjects=arrayOfObjects.map((obj)=>{
        return(
            <>
                <h1>{obj.id}</h1>
                <p>{obj.num}</p>
            </>
        )
    })


  return (
    <div>
        {/* <h1>{counter.num}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button> */}


        <button onClick={AddInArrayOfObjects}>Add in Array Of Objects</button>
        {DisplayArrayOfObjects}
      
    </div>
  )
}

export default UseState

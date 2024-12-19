import React, { useReducer } from 'react'


const transactionReducer=(state,action)=>{

    switch(action.type){
        case "debit":
            return state-=(action.payload)
            break;
        case "credit":
            return state+=(action.payload)
            break
            case "":
        default:
            return state
    }

}

export const UseReducerHook = () => {

    const [money,dispatch]=useReducer(transactionReducer,1000);

    const CreditMoney=(money)=>{
        dispatch({type:"credit",payload:money})
    }
    const DebitMoney=(money)=>{
        dispatch({type:"debit",payload:money})
    }


  return (
    <div>
        <h1>{money}</h1>

        <button onClick={()=>CreditMoney(500)}>Add Money to wallet</button>
        <button onClick={()=>DebitMoney(500)}>Debit Money to wallet</button>

      
    </div>
  )
}

export default UseReducerHook

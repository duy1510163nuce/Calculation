   
import { createSlice } from "@reduxjs/toolkit";

 export const calculationSlice = createSlice ({
    name: 'calculation',
    initialState: {
        number: '',
        result: '',
        history: [],
    },
    reducers: {
        addNumber: (state, action) => {
            // if(state.result =''){
            //     state.number += (action.payload)
            // }else{
            //     state.number = state.result 
            //     state.number+= action.payload
            // }
            
           state.number += action.payload
        },
        addResult: (state,action) => {
            
            state.result = (action.payload);
            state.history.push(`${state.number} = ${state.result}`)
        },
        clearCalc: (state,action) => {
            state.number = '';
            state.result = '';
            
        },
        handleDel: (state) => {
           state.number = state.number.slice(0,-1);   
        }
    }

}) 
export const  {addNumber,addResult, clearCalc,handleDel} = calculationSlice.actions
// console.log(calculationSlice);

export default calculationSlice.reducer;




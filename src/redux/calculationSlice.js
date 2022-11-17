   
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
            state.number += (action.payload)
           
        },
        addResult: (state,action) => {
            state.result = (action.payload);
            state.history.push(`${state.number} = ${state.result}`)
        },
        clearCalc: (state,action) => {
            state.number = '';
            state.result = '';
            
        },
        // addHistory: () => {

        // }
    }

}) 
export const  {addNumber,addResult, clearCalc} = calculationSlice.actions
// console.log(calculationSlice);

export default calculationSlice.reducer;




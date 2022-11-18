   
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
            if(state.number == ''){
                state.history = ['khong co lich su nao het']
            }else{
                state.history.pop('khong co lich su nao het')
                state.history.push(`${state.number} = ${state.result}`)
            }
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


export default calculationSlice.reducer;




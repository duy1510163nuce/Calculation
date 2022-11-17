// import calculationSlice from './calculationSlice'
import calculationReducer from './calculationSlice'
import {configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        calculation: calculationReducer,
    }
})

export default store;
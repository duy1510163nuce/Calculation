import React, { useState } from 'react'
import './Calculation.css'
import { useDispatch, useSelector } from 'react-redux';
import  {addNumber,addResult, clearCalc} from '../../redux/calculationSlice'


export default function Calculation(props) {
    const {handleCalc} = props
   const dispatch = useDispatch();
  return (
    <div className="calculation">
        <button className="calc " value="+"  onClick={() => dispatch(addNumber('+'))} >+</button>
        <button className="calc "  value="-"  onClick={() => dispatch(addNumber('-'))}>-</button>
        <button className="calc "  value="x"  onClick={() => dispatch(addNumber('*'))}>x</button>
        <button className="calc "  value="/" onClick={() => dispatch(addNumber('/'))} >/</button>
        


    </div>
  )
}

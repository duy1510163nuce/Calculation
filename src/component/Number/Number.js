import React ,{useState} from 'react'
import './Number.css'

import  {addNumber,addResult, clearCalc} from '../../redux/calculationSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function Number(props) {
  const { handleResult,handleClear,handleHis} = props
  const dispatch = useDispatch();
  // console.log(addNumber);
  return (
    <div className="number">  
        <button className="num" value="c"  onClick={() => handleClear()}>C</button>
        <button className="num " value="+-"   onClick={() => dispatch(addNumber(7))}>+-</button>
        <button className="num " value="%"   onClick={() => dispatch(addNumber())}>%</button>
        <button className="num " value="7"  onClick={() => dispatch(addNumber(7))}>7</button>
        <button className="num " value="8"   onClick={() => dispatch(addNumber(8))}>8</button>
        <button className="num " value="9"   onClick={() => dispatch(addNumber(9))}>9</button>
        <button className="num " value="4"   onClick={() => dispatch(addNumber(4))}>4</button>
        <button className="num " value="5"  onClick={() => dispatch(addNumber(5))}>5</button>
        <button className="num "value="6"   onClick={() => dispatch(addNumber(6))} >6</button>
        <button className="num " value="1"   onClick={() => dispatch(addNumber(1))}>1</button>
        <button className="num " value="2"   onClick={() => dispatch(addNumber(2))}>2</button>
        <button className="num " value="3"   onClick={() => dispatch(addNumber(3))}>3</button>
        <button className="num " value="0"   onClick={() => dispatch(addNumber(0))}>0</button>
        <button className="num " value="."   onClick={() => dispatch(addNumber())}>.</button>
        <button className="num " value="^"  onClick={() => dispatch(addNumber())}>^</button>
        <button className="num " value="c"  onClick={() => handleResult()}>=</button>
        <button className="num " onClick = {handleHis}   >His</button>

    </div>
  )
}

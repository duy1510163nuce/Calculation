import React, { useState }from 'react';
import Number from './Number/Number';
import Calculation from './Calculation/Calculation';
import './HomeContainer.css';
import { useDispatch, useSelector } from 'react-redux';
import { NumberSelector,ResultSelector, HistorySelector } from '../redux/selector';
import calculationSlice from '../redux/calculationSlice'
import  {addNumber,addResult, clearCalc} from '../redux/calculationSlice'


export default function HomeContainer() {  
    const [openHis,setOpenHis] = useState(false)
    const dispatch = useDispatch();
    const number = useSelector(NumberSelector);
    const results = useSelector(ResultSelector);
    const history = useSelector(HistorySelector)
    
    const handleResult = (e) =>{
      
            dispatch(addResult(eval(number)))
       
    }
    const handleClear = () =>{
        dispatch(clearCalc())
    }
    const handleHis = () =>{
        setOpenHis(!openHis)
    }
  return (
    <div className= "homecontainer">
        <div className= "wrapper">
            <h1 className= "name">Casio 570FX</h1>
            <p type="text" className='inputText'id='inputId' >{number}</p>
            <p id='resultId'>{results}</p>
            <div className= "content">
                <Number 
                handleResult = {handleResult} 
                handleClear = {handleClear}
                handleHis = {handleHis}
                />
                <Calculation 
                
                />
            </div>
        </div>
         <div className={openHis?"history":"his-close"}>
            <ul className="list-history">
                {history.map((his,i)=>{
                    return(
                        <li key={i}>{his}</li>
                    )
                })}

            </ul>
        </div>
        
    </div>
  )
}

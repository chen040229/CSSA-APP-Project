import React,{useState} from 'react'
import ButtonGrid from "./ButtonGrid";

function System({setSelectedNumber}) {
    const [number, SetNumber] = useState('');
    const [maxValue, setMaxValue] = useState(8);


    const handleConfirm = () =>{
        const inputNumber = Number(number);
        setMaxValue(inputNumber);
    };
  return (
     
    <div className='inputs'>
        <ButtonGrid maxValue={maxValue} setSelectedNumber={setSelectedNumber} />
        <div className='input'>
            <input className='input'
                    type ="text"
                    value = {number} 
                    onChange={(e) => SetNumber(e.target.value)}
                    placeholder='Enter between 1-8'
                    />
                <button onClick={handleConfirm}>确认1</button>
        </div>
       
    
    </div>
  )
}

export default System
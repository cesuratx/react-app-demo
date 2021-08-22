import React from 'react';
import {useState, useEffect} from 'react';

export default function Button(){

     const [input, setInput] = useState([]); // store as array

     const initialState = "";

  useEffect(() => {
    console.log(input.join("")); // join to string
  }, [input]);

  const handleClick = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setInput([...input, value]);
  };

  const handleSubmit = (e) => {
     e.preventDefault();
     let value = e.target.value;
     setInput([...input, value]);
     alert(value)
     clearState();
   };

   const clearState = () => {
       setInput([...initialState])
   }

    return(
     <div>
     <button className='num1' value='1' onClick={handleClick}>1</button>
     <button className='num2' value='2' onClick={handleClick}>2</button>
     <button className='num3' value='3' onClick={handleClick}>3</button>
     <button className='num4' value='4' onClick={handleClick}>4</button>
     <button className='num5' value='5' onClick={handleClick}>5</button>
     <button className='num6' value='6' onClick={handleClick}>6</button>
     <button className='num7' value='7' onClick={handleClick}>7</button>
     <button className='num8' value='8' onClick={handleClick}>8</button>
     <button className='num9' value='9' onClick={handleClick}>9</button>
     <button className='num0'value='0' onClick={handleClick}>0</button>
     <button value={input} onClick={handleSubmit}>Submit!!!</button>

     </div>
    )
    
}


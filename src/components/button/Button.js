import React from 'react';
import {useState, useEffect} from 'react';
import './Button.css'

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
     let value = e.target.value;
     //you should sent this array to corresponding endpoint
     setInput([...initialState])
   };
      
    return(
      <>
      {input.length > 0 && <div className='display'>{input}{ }</div>}
     <div className='nums'> 
     <button className='num' value='1' onClick={handleClick}>1</button>
     <button className='num' value='2' onClick={handleClick}>2</button>
     <button className='num' value='3' onClick={handleClick}>3</button>
     <button className='num' value='4' onClick={handleClick}>4</button>
     <button className='num' value='5' onClick={handleClick}>5</button>
     <button className='num' value='6' onClick={handleClick}>6</button>
     <button className='num' value='7' onClick={handleClick}>7</button>
     <button className='num' value='8' onClick={handleClick}>8</button>
     <button className='num' value='9' onClick={handleClick}>9</button>
     <button className='num' value='10' onClick={handleClick}>10</button>
     <button className='num' value='11' onClick={handleClick}>11</button>
     <button className='num' value='12' onClick={handleClick}>12</button>
     <button className='num' value='13' onClick={handleClick}>13</button>
     <button className='num' value='14' onClick={handleClick}>14</button>
     <button className='num' value='15' onClick={handleClick}>15</button>
     <button className='num' value='16' onClick={handleClick}>16</button>
     <button className='num' value='17' onClick={handleClick}>17</button>
     <button className='num' value='18' onClick={handleClick}>18</button>
     <button className='num' value='19' onClick={handleClick}>19</button>
     <button className='num' value='20' onClick={handleClick}>20</button>
     <button className='num' value='21' onClick={handleClick}>21</button>
     <button className='num' value='22' onClick={handleClick}>22</button>
     <button className='num' value='23' onClick={handleClick}>23</button>
     <button className='num' value='24' onClick={handleClick}>24</button>
     <button className='num' value='25' onClick={handleClick}>25</button>
     <button className='num' value='26' onClick={handleClick}>26</button>
     <button className='num' value='27' onClick={handleClick}>27</button>
     <button className='num' value='28' onClick={handleClick}>28</button>
     <button className='num' value='29' onClick={handleClick}>29</button>  
     <button className='num' value='30' onClick={handleClick}>30</button>
     <button className='num' value='31' onClick={handleClick}>31</button>
     <button className='num' value='32' onClick={handleClick}>32</button>
     <button className='num' value='33' onClick={handleClick}>33</button>
     <button className='num' value='34' onClick={handleClick}>34</button>
     <button className='num' value='35' onClick={handleClick}>35</button>
     <button className='num' value='36' onClick={handleClick}>36</button>
     <button className='num' value='37' onClick={handleClick}>37</button>
     <button className='num' value='38' onClick={handleClick}>38</button>
     <button className='num' value='39' onClick={handleClick}>39</button>
     <button className='num' value='40' onClick={handleClick}>40</button>
     <button className='num' value='41' onClick={handleClick}>41</button>
     <button className='num' value='42' onClick={handleClick}>42</button>
     <button className='num' value='43' onClick={handleClick}>43</button>
     <button className='num' value='44' onClick={handleClick}>44</button>
     <button className='num' value='45' onClick={handleClick}>45</button>
     <button className='num' value='46' onClick={handleClick}>46</button>
     <button className='num' value='47' onClick={handleClick}>47</button>
     <button className='num' value='48' onClick={handleClick}>48</button>   
     <button className='submit' value={input} onClick={handleSubmit}>Submit</button>

     </div>
     </>
    )
    
}


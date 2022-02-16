import React, { useState } from "react";

const CounterFunc = ({Value}) => {
    const [data,setData]=useState(Value);
    const [bgColor,setBgColor]=useState("");
    const updateValue=(val)=>{
      setData((PrevState)=>PrevState+val);
      changeBgColor(val);
    }
    const changeBgColor=(Val)=> {
      let Color = "";
      if (Val ===+1) Color = "Green";
      if(Val===-1) Color = "Blue";
      setBgColor(Color);
    }
  return (
    <React.Fragment>
      <article>
        <h5 style={{backgroundColor: bgColor}}>Counter Function</h5>
        <div className='counter__func'>
          <button onClick={()=>updateValue(1)} className='Inc__btn'>Inc</button>
          <span className='value'>{data}</span>
          <button  onClick={()=>updateValue(-1)} className='Dec__btn'>Dec</button>
        </div>
      </article>
    </React.Fragment>
  )
}

export default CounterFunc

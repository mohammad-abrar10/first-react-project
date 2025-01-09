import React,{useState} from 'react'

export default function Calculator() {
  //  hook statements
    const[number1,setNumber1]=useState()
    const[number2,setNumber2]=useState()

    const[result,setResult]=useState("enter number1 and number 2 on the above two boxes")



    const numberInput=(events)=>{
      setNumber1(events.target.value);
    }
    const numberInput2=(events)=>{
      setNumber2(events.target.value);
    }

    // functions
    // add function

    const add=()=>{
      const numb1=parseInt(number1);
      const numb2=parseInt(number2);

      if(!isNaN(number1) && !isNaN(number2)){
        setResult(numb1+numb2);
      }
      else{
        setResult("enter a valid number");
      }
    }

    // subtract function

    const subtract=()=>{
      const numb1=parseInt(number1);
      const numb2=parseInt(number2);

      if(!isNaN(number1) && !isNaN(number2)){
        setResult(numb1-numb2);
      }
      else{
        setResult("enter a valid number");
      }
    }

    // multiplication function

    const multiplication=()=>{
      const numb1=parseInt(number1);
      const numb2=parseInt(number2);

      if(!isNaN(number1) && !isNaN(number2)){
        setResult(numb1*numb2);
      }
      else{
        setResult("enter a valid number");
      }
    }

    // division

    const division=()=>{
      const numb1=parseInt(number1);
      const numb2=parseInt(number2);

      if(!isNaN(number1) && !isNaN(number2)){
        setResult(numb1/numb2);
      }
      else{
        setResult("enter a valid number");
      }
    }


  return (
    <div className='container border border-danger rounded bg-warning'>

    <h2> calculator</h2>
    <input type='number' className="form-control w-25 form-control form-control-plaintext border border-danger " id="exampleFormControlTextarea1" rows="2"  placeholder='enter your text here' value={number1}  onChange={numberInput}/>
    <hr />

    <input type='number' className="form-control w-25 form-control form-control-plaintext border border-danger" id="exampleFormControlTextarea1" rows="2"  placeholder='enter your text here' value={number2}  onChange={numberInput2}/>

    <hr />

    <button className='btn btn-primary mx-2' onClick={add}>add</button>  
     <button className='btn btn-danger mx-2' onClick={subtract}>subtract</button>
      <button className='btn btn-success mx-2' onClick={division}>division</button>
      <button className='btn btn-dark mx-2' onClick={multiplication}>multiplication</button>

      <textarea className="form-control border border-danger my-2" id="exampleFormControlTextarea1" rows="2" value={result}></textarea>

    </div>
  )
}

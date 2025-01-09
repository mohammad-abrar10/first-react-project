import React,{useState} from 'react'

export default function Textform(props) {

  const [text,setText]=useState("");
  

  const changetoUP=()=>{
    // console.log("the button is clicked"+text);
    var newText=text.toUpperCase();
    setText(newText);
    props.showAlert("text has been changed to uppercase letters ","success")
  }
  const lowerCase=()=>{
    var newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("text has been changed to lowercase letters ","success")
  }

  const copyText=()=>{
    var copied=document.getElementById("myBox");
    console.log("i am copytext" + copied.value);
    copied.select();
    navigator.clipboard.writeText(copied.value);
    props.showAlert("copied to clipBoard","success")

  }

  const reset=()=>{
    var newtext="";
    setText(newtext);
    props.showAlert("the text box has been cleared  ","success")
  }


  const InputValueChange=(events)=>{
    setText(events.target.value);
  }

  return (
  <>
    <div className='container border my-4'>
        <div className="mb-3 my-3">
            <textarea className="form-control " id="myBox" rows="5" placeholder='enter text here' value={text} onChange={InputValueChange}></textarea>

            <button className='btn btn-primary mx-3' onClick={changetoUP}>click to uppercase</button>
            <button className='btn btn-primary my-3' onClick={lowerCase}>click to lowercase</button>
            <button className='btn btn-primary my-3 mx-3' onClick={reset}>reset</button>
            <button className='btn btn-primary my-3 mx-3' onClick={copyText}>Copy text</button>
            <h3 className={`my2 border p-2  text-${props.mode==='dark'?'light':'dark'} `}> <span>Text summary<br /><hr /></span>{text.length} characters and {text.split(" ").length-1} words</h3>
        </div>
    </div>
  </>

  )
}




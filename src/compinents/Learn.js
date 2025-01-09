import React,{useState} from "react"
export default function Learn(){
  const[text,setText]=useState("");
  const[text2,setText2]=useState("");
  const[result,setResult]=useState("");

  const [fname,setFname]=useState("");
  const[lname,setLname]=useState("");

  const[color,setColor]=useState("red")


  const handler=(events)=>{
    setText(events.target.value);
  }
  const handler2=(events)=>{
    setText2(events.target.value);
  }

  const sum=()=>{
   const num1=parseInt(text)
   setText(num1)
   const num2=parseInt(text2)
   setText2(num2)
   setResult(num1+num2);
  }


  const hFName=(e)=>{
    setFname(e.target.value);
  }
  const hlName=(e)=>{
    setLname(e.target.value);

  }

  const sForm=(e)=>{
    e.preventDefault();
    alert(`your first name =${fname} and last name =${lname}`);  
  }
  return(
    <>
    <input type="text" placeholder="enter text here" value={text} onChange={handler}/>
    <input type="text2" placeholder="enter text here" value={text2} onChange={handler2}/>
    <input type="submit" onClick={sum}/><br/>
    <input type="textarea" cols="100" value={`${text} + ${text2}=${result}`} readOnly/>

    <h1>React forms </h1>
    <form onSubmit={sForm}>
    <input type="text" value={fname} onChange={hFName}/>
    <input type="text" value={lname} onChange={hlName}/>
    <input type="submit" />
    </form>
    <hr/>
   
   
    <br /><br /><br />

    <p>the {color} button is clicked</p>
    <button onClick={()=>setColor("red")}>red</button><br />
    <button onClick={()=>setColor("green")}>Green</button><br />
    <button onClick={()=>setColor("yellow")}>yellow</button><br />
    <button onClick={()=>setColor("orange")}>orange</button><br />
    </>
  );
}
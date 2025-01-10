import Navbar from "./compinents/Navbar"
import './App.css';
import Textform from "./compinents/Textform";
import React,{useState} from "react";
import Alert from"./compinents/Alert"
import Learn from "./compinents/Learn";
import { BrowserRouter ,Routes,Route,link } from "react-router-dom";
import Calculator from "./compinents/Calculator";

function App() {
  const[mode,setMode]=useState("light");
 const[alert,setAlert]=useState(null)

 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  },3000);
 }

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#213756';
      showAlert("dark mode has been enabled","success ;")
    }else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success ;")
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title= "textUtills" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path='/' element={<Textform showAlert={showAlert} mode={mode}/>}/>
        <Route exact path='/calculator' element={<Calculator/>}/>
      </Routes>
      
    </BrowserRouter>

    </>
  );
}

export default App;











import React,{useState} from 'react'
import pt from "prop-types"



export default function Navbar(props) {

  return (
   <>
   <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}>

  <div className="container-fluid">
    <a className={`navbar-brand  text-${props.mode==='dark'?'light':'dark'} `} href="/">{props.title}</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='dark'?'light':'dark'} `} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==='dark'?'light':'dark'} `}href="/">Link</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enabled mode</label>
      </div>
    </div>
  </div>
</nav>
   </>
  )
}

Navbar.propTypes={
     title : pt.string
}






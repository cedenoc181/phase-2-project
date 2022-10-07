import React from 'react'
import'./Bcon.css'
import Bcontainer from './Bcontainer'
import TFormContainer from "./TFormContainer";
import TsubmitForm from "./TsubmitForm";
import "./Bracket.css"

function Bracket({usernameArr, newUser}) {
  return (
    <div className='brackethome'>
      
        <img className = " bracket-logo"src="https://smashbros.nintendo.com/buy/dlc/assets/fighters-pass-logo.png" alt = "logo "></img>

        <h1 id="Bracket-header">
          Smash Hub Championship
        </h1>
        <Bcontainer usernameArr={usernameArr} />
        <div id="BracketChampion">
        </div>

      <div className="TformCon">
       <TFormContainer usernameArr={usernameArr} />
       </div>
       <footer className="footer"><TsubmitForm newUser={newUser}/></footer>
    </div>
  )
}

export default Bracket
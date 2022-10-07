import {React} from 'react'
import'./Bcon.css'
import Bcard from './Bcard'


function Bcontainer({usernameArr}) {

  return (
    <div className="Bcontainer"  >
       <h2 id="BracketFinals">
            Finals 
        </h2>
        <h2 className="BracketChampion">
          Winner!
        </h2>
        <section >{usernameArr.map((username) => (
<Bcard key={username.id} username={username} />
        ))}
        
        </section>
        
<div className="connecter">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>

<div className="line">
    <div>
    </div><div>
    </div><div>
    </div><div>
    </div>
</div>
{/* bracket box for quarterFinals  */}
<section id="quarterFinals">
    <div className="selectBox">
        <select className="select">
            <option className="Bracket-option">Winner</option>
            <option className="Bracket-option">Karlyn</option>
            <option className="Bracket-option">Bobbie</option>
        </select>
    </div>
    <div> 
        <select className="select">
            <option className="Bracket-option">Winner</option>
            <option className="Bracket-option">Urson</option>
            <option className="Bracket-option">Mellie</option>
        </select>
        </div>
    <div>
    <select className="select">
             <option className="Bracket-option">winner</option>
            <option className="Bracket-option">Nettie</option>
            <option className="Bracket-option">Avis</option>
        </select>
    </div>
    <div>
    <select className="select">
            <option className="Bracket-option">winner</option>
            <option className="Bracket-option">Teana</option>
            <option className="Bracket-option">Christian</option>
        </select>
    </div>
</section>

<div className="connecter" id="conn2">
    <div></div>
    <div></div>
</div>

<div className="line" id="line2">
    <div></div>
    <div></div>
</div>

<section id="semiFinals">
    <div> 
        <select className="select">
            <option>Winner</option>
            <option className="Bracket-option">Karlyn</option>
            <option className="Bracket-option">Bobbie</option>
            <option className="Bracket-option">Urson</option>
            <option className="Bracket-option">Mellie</option>
        </select>
        </div>
    <div>
    <select className="select">
            <option>Winner</option>
            <option className="Bracket-option">Nettie</option>
            <option className="Bracket-option">Avis</option>
            <option className="Bracket-option">Teana</option>
            <option className="Bracket-option">Christian</option>
        </select>
    </div>
</section>

<div className="connecter" id="conn3">
    <div></div>
</div>

<div className="line" id="line3">
    <div></div>
</div>

<section id="final">
<div>
<select className="select">
            <option>Winner</option>
            <option className="Bracket-option">Karlyn</option>
            <option className="Bracket-option">Bobbie</option>
            <option className="Bracket-option">Urson</option>
            <option className="Bracket-option">Mellie</option>
            <option className="Bracket-option">Nettie</option>
            <option className="Bracket-option">Avis</option>
            <option className="Bracket-option">Teana</option>
            <option className="Bracket-option">Christian</option>
        </select>
</div>
</section>
    </div>
  )
}

export default Bcontainer
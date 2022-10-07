import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";


function Tcard({character}) {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  console.log(state);

  return (
    <div>
        <div className="scrollmenu">
        <img 
         onClick={() => {
          console.log(character);
          navigate(`/characters/${character.OwnerId}`, { state: { character } });
        }}
        className= "Tcard-img" 
        key={character.OwnerId} 
        src= {character.MainImageUrl} 
        alt={character.DisplayName}/>
        </div>
    </div>
  )
}

export default Tcard
import React from 'react'

function Tcard({character}) {
  return (
    <div>
        <div className="Tcard">
        <img className= "Tcard-img" src= {character.MainImageUrl} alt={character.DisplayName}/>
        </div>
    </div>
  )
}

export default Tcard
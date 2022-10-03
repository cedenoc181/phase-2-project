import React from 'react'
import Hcard from './Hcard'

function Hcontainer({charactersArr}) {
  return (
    <div className="Hcontainer">
        
       { charactersArr.map((character) => (
       <Hcard key= {character.OwnerId} character={character} />
       ))}
     
    </div>
    
  )
}

export default Hcontainer
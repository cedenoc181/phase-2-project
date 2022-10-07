import React from 'react'
import Tcard from './Tcard'

function Tcontainer({charactersArr}) {
  return (
    <div className="t-container">
        {charactersArr.map((character) => (
        <Tcard key= {character.OwnerId} character={character}/>
        ))}
    </div>
  )
}

export default Tcontainer
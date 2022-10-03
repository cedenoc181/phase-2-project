import React from 'react'
import Tcard from './Tcard'

function Tcontainer({charactersArr}) {
  return (
    <div>
        {charactersArr.map((character) => (
        <Tcard key= {character.OwnerId} character={character}/>
        ))}
    </div>
  )
}

export default Tcontainer
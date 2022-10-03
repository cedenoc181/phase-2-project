import React from 'react'

function Hcard({character}) {
  return (
    <div className="Hcard">
{/*This should be a flip card that detailes the characters img*/}

    <img src= {character.ThumbnailUrl}    alt= {character.DisplayName} />
            {/* <p>{character.</p> */}
    </div>
  )
}

export default Hcard
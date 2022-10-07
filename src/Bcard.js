import {React, useState} from 'react'
import'./Bcon.css'

function Bcard({username}) {

  const [winner, setWinner] = useState(false)

  function handleClick(){
    setWinner(!winner)
    console.log(setWinner)

  };

  return (
    
    <div className="bracket-card">


<style>
  {`.winner {text-decoration: line-through}`}
</style>

<h3 className={winner ? 'bracket-Name winner':
    'bracket-Name'} onClick={handleClick}> {username.id}. 
{username.first_name} 
</h3>
    </div>
  
    
  )
}

export default Bcard
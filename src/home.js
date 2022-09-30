import React from 'react'

function home() {
  return (
    <div>home

                    {/* our routes will be imported here */}
{/* <Routes>
    <Route></Route>
    <Route></Route>
    <Route></Route>
</Routes> */}

<h1>
Smash hub 
</h1> 

{/*search bar */}
<input type="text" placeholder="search character"/>

<main>
<card>{/*This should be a flip card that detailes the characters name, universe, moves */}
    <img src='{DATA-IMAGE}' alt='{DATA-NAME}' />
    
</card>
</main>

<footer>
<form>
    <input class="newName" type="text" placeholder='Add Character name here'/>
    <input class="newImage" type="text" placeholder='Add Character image here'/>
    <input class="universeOrigin" type="text" placeholder='Add Character universe here'/>
    <button class="form-submit">Add New Character</button>
</form>
</footer>

    </div>
  )
}

export default home
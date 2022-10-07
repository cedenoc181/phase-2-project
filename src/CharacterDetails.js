import {React, useState, useEffect} from 'react'
import { useLocation, useParams } from "react-router-dom";
import "./CharacterDetails.css"

function CharacterDetails() {
    const location = useLocation();
    const state = location.state;
  
    console.log(state);
  
    const param = useParams();
    console.log(param.id);
  
    const [character, setCharacter] = useState({});
  
    useEffect(() => {
      if (!state) {
        fetch(`https://api.kuroganehammer.com/api/characters/${param.id}`)
          .then((res) => res.json())
          .then((data) => setCharacter(data));
      }
    },);
  
    console.log(character === null);
 
    return (
      <div className='space-background'>

        {state ? (
          <>
            {/* <h1>{state.character.Name}</h1> */}
            <div>
                <img className='characterDetails' src={state.character.MainImageUrl} alt={state.character.Name}/>
            <p>{state.character.moves}</p>

                </div>
           
          </>
        ) : (
          <>
            {/* <h1>{character.}</h1> */}
            <img  src={character.FullUrl} alt="full url"/>
          </>
        )}
      </div>
    );
  }

export default CharacterDetails
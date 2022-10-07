import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./home.css"

function Hcard({ character }) {
  const location = useLocation();
  const state = location.state;

  const navigate = useNavigate();

  console.log(state);

  // const [character, setCharacter] = useState([]);

  return (
    <div className="Hcard">
      {/*This should be a flip card that detailes the characters img*/}
      <img className="character-img"
        onClick={() => {
          console.log(character);
          navigate(`/characters/${character.OwnerId}`, { state: { character } });
        }}
        key={character.OwnerId}
        src={character.ThumbnailUrl}
        alt={character.DisplayName}
      />
      <p className="hide-text">{character.DisplayName}</p>
      {/* <p>{character.</p> */}
    </div>
  );
}

export default Hcard;

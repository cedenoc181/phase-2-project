import {React, useState, useEffect} from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Tournament from "./Tournament";
import Bracket from "./Bracket";
import Home from "./Home";
import CharacterDetails from "./CharacterDetails";

function App() {

const [charactersArr, setCharactersArr] = useState([]);  
const [usernameArr, setUsernameArr] = useState([]);
const [searchKey, setSearchKey] = useState('')


  useEffect(() => {
    fetch("https://api.kuroganehammer.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharactersArr(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
fetch("http://localhost:3000/users")
.then((res) => res.json())
.then((data) => {
setUsernameArr(data);
console.log(data);
  });
}, []);

function newUser(user){
console.log(user, "new user from app");
setUsernameArr([...usernameArr, user]);
}

function newCharacter (character) {
  console.log(character, "new Character from app");
  setCharactersArr([character, ...charactersArr]);
}

function onSearch (searchKey){
  console.log(searchKey)
  setSearchKey(searchKey)
}
const filteredItemsFromSearch = charactersArr.filter((character) => {
  return character.DisplayName.toLowerCase().includes(searchKey.toLowerCase());
});
console.log(filteredItemsFromSearch)

  return (
    <div className="App">
      {/* our routes will be imported here */}
      <nav className="navbar">
        <Link className="HomeLink" to="/">
          Home
        </Link>
        <Link className="TournamentLink" to="/Tournament">
          Tournament
        </Link>
        <Link className="BracketLink" to="/Bracket">
          Bracket
        </Link>
      </nav>
      <Routes>
        <Route path= "/" element={<Home onSearch={onSearch} newCharacter={newCharacter} charactersArr={filteredItemsFromSearch}/>} />
        <Route path="Tournament" element={<Tournament  charactersArr={charactersArr}  />} />
        <Route path="Bracket" element={<Bracket newUser={newUser} usernameArr={usernameArr} />} />
        <Route path="/characters/:id" element={<CharacterDetails></CharacterDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import {React, useState, useEffect} from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Tournament from "./Tournament";
import Bracket from "./Bracket";
import Home from "./Home";

function App() {

  const [charactersArr, setCharactersArr] = useState([]);  
//const [userNameArr, setUserNameArr] = useState([]);

  useEffect(() => {
    fetch("https://api.kuroganehammer.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharactersArr(data);
        console.log(data);
      });
  }, []);

  //useEffect(() => {
//fetch("")
//.then((res) => res.json())
//.then((data) => {
// setUserNameArr(data);
//console.log(data);
//   });
//}, []);



  return (
    <div className="App">
      {/* our routes will be imported here */}
      <nav className="navbar">
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/Tournament">
          Tournament
        </Link>
        <Link className="Link" to="/Bracket">
          Bracket
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home charactersArr={charactersArr}/>} />
        <Route path="Tournament" element={<Tournament charactersArr={charactersArr} />} />
        <Route path="Bracket" element={<Bracket />} />
      </Routes>
    </div>
  );
}

export default App;

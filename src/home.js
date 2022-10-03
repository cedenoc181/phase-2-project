import  {React, useState} from "react";
import Hcontainer from "./Hcontainer";

function Home({charactersArr}) {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function handleClick() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      
      <h1>Smash hub</h1>

      {/*Login button with boolean expressionn to render logged in with click */}
      <button onClick={handleClick}>{isLoggedIn ? "Login" : "Logout"}</button>

      <Hcontainer charactersArr={charactersArr} />
    </div>
  );
}

export default Home;

import { React, useState } from "react";
import "./Bracket.css";

function TsubmitForm({newUser}) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [country, setCountry] = useState("");


  function handleSubmit (e) {
    e.preventDefault();
    fetch('http://localhost:3000/users',{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: fName,
        last_name: lName,
        country: country
      }),
    })
.then((res) => res.json())
.then((data) => {console.log(data);
  newUser(data);
})

setFName('');
setLName('');
setCountry('');
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setFName(e.target.value);
            console.log(e.target.value);
          }}
          className="Username"
          value={fName}
          type="text"
          placeholder="First name:"
        />
        <input
          onChange={(e) => {
            setLName(e.target.value);
            console.log(e.target.value);
          }}
          className="CharacterPick"
          value={lName}
          type="text"
          placeholder="Last name:"
        />
        <input
          onChange={(e) => {
            setCountry(e.target.value);
            console.log(e.target.value);
          }}
          className="Cstate"
          value={country}
          type="text"
          placeholder="Country:"
        />

        <button className="form-submit">Fight</button>
      </form>
    </div>
  );
}

export default TsubmitForm;

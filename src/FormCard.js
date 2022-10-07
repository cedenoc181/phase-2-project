import React from 'react'
import "./Bracket.css"

function FormCard({username}) {
  return (
 <div className="formCard">
    <li className="formListRow" >
<h3 className="formName">
{username.first_name}, {username.last_name}
</h3>
<p>{username.country}</p>
    {/* <img className="State" src= {username.adata.avatar} alt=""/> */}

    </li>
 </div>
  )
}

export default FormCard
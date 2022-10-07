import React from 'react'
import FormCard from './FormCard'
import "./Bracket.css"

function TFormContainer({usernameArr}) {
  return (
    <div className="FormContainer">
      
      <div className="asideForm">
        <ol className="FormContainerList">
        { usernameArr.map((username) => (
                <FormCard key= {username.id} username={username} />
        ))}
        </ol>
        </div>
    </div>
  )
}

export default TFormContainer
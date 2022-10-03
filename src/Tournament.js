import React from "react";
import Tcontainer from "./Tcontainer";
import TsubmitForm from "./TsubmitForm";
import Search from "./Search";
import FormContainer from "./FormContainer";



function Tournament({ charactersArr }) {
  return (
    <div>
      <h1 className="Tournament-header">Tournament</h1>
      <div className="">
        
      </div>
      <Search />
      <Tcontainer charactersArr={charactersArr} />
      <FormContainer />
      <TsubmitForm />
      
     
    </div>
  );
}

export default Tournament;

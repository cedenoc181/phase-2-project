import React from "react";
import Tcontainer from "./Tcontainer";
import "./tournament.css"



function Tournament({ charactersArr}) {
  return (
    <div className="Tournament">

      <div className="Tournamet-body">
      <h1 className="Tournament-title">Tournament</h1>
      <div className="Tvideo">
      <iframe width="485" height="230" 
      src="https://www.youtube.com/embed/bHjX3-8aRPU"
       title="YouTube video player" 
       frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      </div>
     
      <Tcontainer charactersArr={charactersArr} />
      {/* <TFormContainer usernameArr={usernameArr} /> */}
      
      

      
      </div>
    </div>
  );
}

export default Tournament;

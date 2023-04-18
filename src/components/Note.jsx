//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
import React from "react";


export default function Note(params) {
  return (
    <div className="note">
      <h1>{params.title}</h1>
      <p>{params.content}</p>
    </div>
  );
}


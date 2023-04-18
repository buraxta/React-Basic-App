import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

export default function App() {
  return (
    <>
      <Heading />
      <Footer />
      {notes.map((note) => {
        return <Note key={note.id} title={note.title} content={note.content} />;
      })}
    </>
  );
}

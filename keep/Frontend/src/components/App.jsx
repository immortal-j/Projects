import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  async function getdata(){
    const res=await axios.get(`/hello`);
    setNotes(prevNotes => {
      return res.data;
    });
  }
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    axios.post(`/hello`,newNote);
    getdata();
  }

  function deleteNote(id) {
    axios.post(`/delete`,{id:id});
    getdata();
  
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

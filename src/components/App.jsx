import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = React.useState([])

  function handleClick(change) {
    setNote(prevVal => {
      return [...prevVal, {title: change.title, content: change.content}]
    })
    
  }

  function deleteNote(id) {
    setNote(prevNotes => {
      return prevNotes.filter((noted, index) => {        // noted is an object {title: "title", content: "content"} of the
        return index !== id;                             // note that we are deleting.
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={handleClick} />
      {note.map((khath, index) => <Note key={index} id={index} title={khath.title} content={khath.content} click={deleteNote} />)}
      <Footer />
    </div>
  );
}

export default App;

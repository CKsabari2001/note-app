import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./components/note-list";
import Search from "./components/search-bar";
import Header from "./components/header";

function App() {
  const [noteListContent, setNoteListContent] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [bgColor, setBgColor] = useState(false);

  // set Height to CSS

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--body-height",
      `${screenHeight}px`
    );
  }, [screenHeight]);

  const handleResize = () => {
    setScreenHeight(window.innerHeight);
  };

  // Set the Width and Height
  useEffect(() => {
    // Set initial screen dimensions
    setScreenHeight(window.innerHeight);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  // set Height to CSS

  // Get Data from Local Storage
  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    const bgColor = JSON.parse(localStorage.getItem("react-note-bg-value"));
    if (saveNotes) {
      setNoteListContent(saveNotes);
    }
    if (bgColor) {
      setBgColor(bgColor);
    }
  }, []);

  // Set Data from Local Storage
  useEffect(() => {
    localStorage.setItem(
      "react-notes-app-data",
      JSON.stringify(noteListContent)
    );
    localStorage.setItem("react-note-bg-value", JSON.stringify(bgColor));
  }, [noteListContent, bgColor]);

  const getNote = (data) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text: data,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...noteListContent, newNote];
    setNoteListContent(newNotes);
  };

  const deleteNote = (id) => {
    const newNote = noteListContent.filter((note) => note.id !== id);
    setNoteListContent(newNote);
  };

  const getEditNoteData = (data) => {
    const date = new Date();
    const newNote = {
      id: data.id,
      text: data.data,
      date: date.toLocaleDateString(),
    };
    const newNoteList = noteListContent.map((existingNote) => {
      return newNote.id === existingNote.id
        ? { id: newNote.id, text: newNote.text, date: newNote.date }
        : existingNote;
    });
    setNoteListContent(newNoteList);
  };

  const clearAllNotes = () => {
    console.log("Test");
    setNoteListContent([]);
  };

  return (
    <div
      className={`app-container ${
        bgColor ? "bg-color-dark" : "bg-color-light"
      }`}
    >
      <div className="container-fluid">
        <div className="container">
          <Header
            setBgColor={setBgColor}
            bgColor={bgColor}
            clearAllNotes={clearAllNotes}
          />
          <Search setSearchValue={setSearchValue} />
          <NoteList
            noteListContent={noteListContent.filter((note) => {
              return note.text.toLowerCase().includes(searchValue);
            })}
            getNote={getNote}
            deleteNote={deleteNote}
            getEditNoteData={getEditNoteData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

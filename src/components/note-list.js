import { useState } from "react";

import Note from "./note";
import NewNote from "./new-note";
import EditNote from "./edit-note";

import { Row, Col } from "react-bootstrap";

function NoteList({ noteListContent, getNote, deleteNote, getEditNoteData }) {
  const [renderEditNote, setRenderEditNote] = useState(false);
  const [sendEditNoteData, setSendEditNoteData] = useState({
    id: "",
    data: "",
  });

  const editNote = (id, data) => {
    setRenderEditNote(true);
    const newNote = {
      id: id,
      data: data,
    };
    setSendEditNoteData(newNote);
  };

  const getRenderEditNote = () => {
    setRenderEditNote(!renderEditNote);
  };

  const CancelEdit = () => {
    setRenderEditNote(false);
  };

  const renderNoteListContent = noteListContent.map((note) => {
    return (
      <Col
        key={note.id}
        sm={12}
        md={4}
        xl={3}
        className="d-flex justify-content-center mb-5"
      >
        <Note
          text={note.text}
          date={note.date}
          id={note.id}
          deleteNote={deleteNote}
          key={note.id}
          editNote={editNote}
        />
      </Col>
    );
  });

  return (
    <Row className="justify-content-start">
      {renderNoteListContent}
      <Col sm={12} md={4} xl={3} className="d-flex justify-content-center mb-5">
        {renderEditNote ? (
          <EditNote
            sendEditNoteData={sendEditNoteData}
            getEditNoteData={getEditNoteData}
            getRenderEditNote={getRenderEditNote}
            CancelEdit={CancelEdit}
          />
        ) : (
          <NewNote getNote={getNote} />
        )}
      </Col>
    </Row>
  );
}

export default NoteList;

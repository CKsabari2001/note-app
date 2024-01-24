import { useState } from "react";

import { Card } from "react-bootstrap";

import { FaSave } from "react-icons/fa";

function NewNote({ getNote }) {
  const [noteData, setNoteData] = useState("");
  const CharacterLimit = 200;

  function handleChange(e) {
    if (CharacterLimit - e.target.value.length >= 0) {
      setNoteData(e.target.value);
    }
  }

  function sendNote() {
    if (noteData.trim().length > 0) {
      getNote(noteData);
      setNoteData("");
    }
  }

  return (
    <Card className="c-card im-card">
      <Card.Body>
        <Card.Text className="h-100">
          <textarea
            className="form-control getNote-form"
            name="getNote"
            id="get-Note"
            onChange={handleChange}
            value={noteData}
            placeholder="Type here to create new note"
          ></textarea>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <p className="mb-0">{CharacterLimit - noteData.length} Remaining</p>
        <FaSave onClick={sendNote} />
      </Card.Footer>
    </Card>
  );
}

export default NewNote;

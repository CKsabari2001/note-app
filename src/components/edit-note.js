import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Stack } from "react-bootstrap";

import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";

function EditNote({
  sendEditNoteData,
  getEditNoteData,
  getRenderEditNote,
  CancelEdit,
}) {
  const [noteData, setNoteData] = useState({
    id: "",
    data: "",
  });
  const CharacterLimit = 200;

  useEffect(() => {
    setNoteData(sendEditNoteData);
  }, [sendEditNoteData]);

  function handleChange(e) {
    if (CharacterLimit - e.target.value.length >= 0) {
      const newNoteData = {
        id: noteData.id,
        data: e.target.value,
      };
      setNoteData(newNoteData);
    }
  }

  function sendNote() {
    if (noteData.data.trim().length > 0) {
      getEditNoteData(noteData);
      getRenderEditNote();
    }
  }

  return (
    <Card className="c-card im-card">
      <Card.Body>
        <Card.Text className="h-100">
          <textarea
            className="form-control"
            name="getNote"
            id="get-Note"
            onChange={handleChange}
            value={noteData.data}
          ></textarea>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <p className="mb-0">
          {CharacterLimit - noteData.data.length} Remaining
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <Stack direction="horizontal" gap={2}>
            <MdCancel onClick={() => CancelEdit()} />
            <FaSave onClick={sendNote} />
          </Stack>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default EditNote;

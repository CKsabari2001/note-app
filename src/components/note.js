import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Card, Stack } from "react-bootstrap";

import { MdDeleteForever } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";

function Note({ text, date, id, deleteNote, editNote }) {
  const [isSelected, setIsSelected] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  // Set the Width and Height
  useEffect(() => {
    // Set initial screen dimensions
    setScreenWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <Card className={`c-card n-card ${isSelected ? "show-full" : ""}`}>
      <Card.Body
        onClick={() => setIsSelected((pre) => screenWidth < 768 && !pre)}
      >
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <p className="mb-0">{date}</p>
        <Stack direction="horizontal" gap={2}>
          <BiSolidEditAlt onClick={() => editNote(id, text)} />
          <MdDeleteForever onClick={() => deleteNote(id)} />
        </Stack>
      </Card.Footer>
    </Card>
  );
}

export default Note;

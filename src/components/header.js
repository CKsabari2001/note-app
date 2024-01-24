import { Form, Button, Stack } from "react-bootstrap";

function Header({ setBgColor, bgColor, clearAllNotes }) {
  return (
    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between py-5">
      <h1 className="mb-3 mb-sm-0">Note Verse</h1>
      <div className="d-flex align-items-center justify-content-between">
        <Stack direction="horizontal" gap={4}>
          <Button className="c-btn" variant="primary" onClick={clearAllNotes}>
            Clear Notes
          </Button>
          <Form>
            <Form.Check
              reverse
              type="switch"
              id="custom-switch"
              label="Dark Mode"
              checked={bgColor}
              onChange={() => setBgColor((pre) => !pre)}
            />
          </Form>
        </Stack>
      </div>
      {/* <button
        onClick={() => setBgColor(!bgColor)}
        type="button"
        className="btn btn-primary toggle-btn"
      >
        {bgColor ? "Light" : "Dark"} Mode Toggle
      </button> */}
    </div>
  );
}

export default Header;

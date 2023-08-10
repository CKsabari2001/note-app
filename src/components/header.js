function Header({ setBgColor, bgColor }) {
  return (
    <div className="d-flex align-items-center justify-content-between py-5">
      <h1 className="mb-0">Notes</h1>
      <button
        onClick={() => setBgColor(!bgColor)}
        type="button"
        className="btn btn-primary toggle-btn"
      >
        {bgColor ? "Light" : "Dark"} Mode Toggle
      </button>
    </div>
  );
}

export default Header;

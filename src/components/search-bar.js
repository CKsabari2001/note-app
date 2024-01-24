import { Form } from "react-bootstrap";

import { HiSearch } from "react-icons/hi";

function Search({ setSearchValue }) {
  function search(e) {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
  }

  return (
    <Form className="d-flex align-items-center search-form mb-5 px-2">
      <HiSearch />
      <Form.Control type="" placeholder="Type to search..." onChange={search} />
    </Form>
  );
}

export default Search;

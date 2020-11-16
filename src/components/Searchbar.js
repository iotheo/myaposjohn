import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Search for issues.."
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
  </InputGroup>

  );
};

export default SearchBar;

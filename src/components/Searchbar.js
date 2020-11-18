import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="searchbar"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Search for issues.."
        aria-label="Username"
        aria-describedby="searchbar"
      />
  </InputGroup>

  );
};

export default SearchBar;

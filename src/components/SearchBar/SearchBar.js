import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchBar = ({ onClick, defaultValue }) => {
    const [searchValue, setSearchValue] = useState("");
    return (<InputGroup>
        <FormControl
            placeholder="Search..."
            defaultValue={defaultValue}
            onChange={({ target: { value }}) => setSearchValue(value)}
            onKeyPress={(event) => { if(event.key === 'Enter') onClick(searchValue) }}
        />
        <InputGroup.Append>
            <Button variant="primary" onClick={() => onClick(searchValue)}>Filter</Button>
        </InputGroup.Append>
    </InputGroup>);
}

export default SearchBar;
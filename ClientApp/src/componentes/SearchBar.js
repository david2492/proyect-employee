import React, { useState } from 'react';
import { Input, Button, InputGroup } from "reactstrap"

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);

        
    };

    return (
        <div className="search-bar">
            <InputGroup>.
                <Input
                    type="text"
                    placeholder="Buscar empleado..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <Button onClick={handleSearch} color="warning">Buscar</Button>
            </InputGroup>
            
        </div>
    );
};

export default SearchBar;
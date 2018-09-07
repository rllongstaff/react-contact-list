import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <input 
            className='pa3 ba b--green bg-washed-green' 
            type='search' 
            placeholder='search contacts' 
            onChange={searchChange}             
        />
    );
}

export default SearchBox;
import React from 'react';

// prop passed down from parent App component as argument here:
const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                //onChange is like HTML event handler onchange; camelCase per JSX syntax here:
                onChange={searchChange}
                // searchChange prop gets called when event is captured through onChange event listener; searchChange takes us back to App component where associated function (stored within this prop as a value: onSearchChange) is called. That function then console logs the value captured by this event listener (event.target.value).
            />
        </div>
    );
}

export default SearchBox;

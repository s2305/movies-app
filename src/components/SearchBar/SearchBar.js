import React from 'react';
import './SearchBar.css'

const SearchBar = ({onSearchChange, searchValue})=>{

    return (<div><input className="searchinput" onChange={onSearchChange} value={searchValue}></input></div>);
}

export default SearchBar;
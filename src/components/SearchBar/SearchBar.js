import React from 'react';
import './SearchBar.css'

const SearchBar = ({onSearchChange, searchValue})=>{

    return (<div><input className="searchinput" onChange={(e)=>onSearchChange(e.target.value)} value={searchValue}></input></div>);
}

export default SearchBar;
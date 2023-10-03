
import React, {useState, useEffect} from 'react';
import './SearchPage.css'
import SearchBar from '../SearchBar/SearchBar'
import Card from '../Card/Card'

 const SearchPage = () => {

    const [searchTerm, setSearchTerm] = useState("Star wars");
    const [data, setData] = useState([]);

    const onSearchChange = (e)=>{console.log(e.target.value);   setSearchTerm(e.target.value);};

    useEffect(() => {
    fetch('./dataSource.json')
        .then((response) => response.json())
        .then((jsonData) => {
        setData(jsonData);
        })
        .catch((error) => {
        console.error('Error fetching JSON:', error);
        });
    }, []); // The empty array [] as the second argument ensures this runs once after mounting


    return (
        <div className='container'>
        <h1>Movies app</h1>    
        <SearchBar onSearchChange={onSearchChange} searchValue={searchTerm}></SearchBar>   
        <div className='gridforcards'>
            {data.map((movie)=><Card film={movie}></Card>)}
        </div>
        </div>
    )

}

export default SearchPage;

import React, {useState, useEffect} from 'react';
import './SearchPage.css'
import SearchBar from '../SearchBar/SearchBar'
import Card from '../Card/Card'
import useAxios from '../../customHooks/useAxios'

 const SearchPage = () => {

  const [searchTerm, setSearchTerm] = useState("Rocky");
  
  const films = useAxios(`http://www.omdbapi.com/?apikey=417978c1&s=${searchTerm}`)  

  //const movies = (films != null) ? films.map((film, index) => <Card film={film} key={index}></Card>) : <div>loading...</div>;

  const onSearchChange = (e)=>{console.log(e.target.value);   setSearchTerm(e.target.value);};

    return (
        <div className='container'>
        <h1>Movies app</h1>    
        <SearchBar onSearchChange={onSearchChange} searchValue={searchTerm}></SearchBar>   
        <div className='gridforcards'>
            {films?.map((movie)=><Card film={movie}></Card>)}
        </div>
        </div>
    )

}

export default SearchPage;
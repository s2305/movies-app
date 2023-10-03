import React, {useState} from 'react';
import './SearchPage.css'
import SearchBar from '../SearchBar/SearchBar'
import Card from '../Card/Card'
import useAxios from '../../customHooks/useAxios'

 const SearchPage = () => {


// useEffect(() => {
//         fetch('./dataSource.json')
//             .then((response) => response.json())
//             .then((jsonData) => {
//             setData(jsonData);
//             })
//             .catch((error) => {
//             console.error('Error fetching JSON:', error);
//             });
//         }, []); // The empty array [] as the second argument ensures this runs once after mounting


  const [searchTerm, setSearchTerm] = useState("Titanic");
  
  const films = useAxios(`http://www.omdbapi.com/?apikey=417978c1&s=${searchTerm}`)  

  const txtToDisplay = searchTerm?.length === 0 ? "Veuillez renseigner une recherche" : "Recherche infructueuse"
  const movies = (films != null) ? films.map((film, index) => <Card film={film} key={index}></Card>) : <div>{txtToDisplay}</div>;

    return (
        <div className='container'>
        <h1>Movies app</h1>    
        <SearchBar onSearchChange={(txt)=>{setSearchTerm(txt);}} searchValue={searchTerm}></SearchBar>   
            <div className='gridforcards'>
            {movies}
        </div>
        </div>
    )

}

export default SearchPage;
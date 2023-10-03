import React, {useState, useEffect} from 'react';
import './SearchPage.css'
import Card from '../Card/Card'

 const SearchPage = () => {

 const [data, setData] = useState(null);

 useEffect(() => {
        fetch('./dataSource.json')
            .then((response) => response.json())
            .then((jsonData) => {
            setData(jsonData);
            })
            .catch((error) => {
            console.error('Error fetching JSON:', error);
            });
        }, []); // A votre avis à quoi sert le [] ?

    return (
        <div className='container'>
            <div className='gridforcards'>
          
            </div>
        </div>
    )

}

export default SearchPage;
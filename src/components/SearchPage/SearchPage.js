
import React, {useState, useEffect} from 'react';
import './SearchPage.css'
import Card from '../Card/Card'

 const SearchPage = () => {

    const [data, setData] = useState([]);

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
        <div className='gridforcards'>
            {data.map((movie)=><Card film={movie}></Card>)}
        </div>
        </div>
        

    )

}

export default SearchPage;
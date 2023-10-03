import React from 'react';
import './Card.css';

const Card = ({film})=>{

    return (<div className="customCard">
                <div className="titlecard">{film.Title}</div>
                <div>{film.Year}</div>
                <img className="posterCard" src={film.Poster} alt="poster of {film.Title}"/>
                 <div className='description'>{film.Description}</div> 
           </div>);
}

export default Card;
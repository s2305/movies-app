import React from 'react';
import './Card.css';

// const styleCard = {'width':'22vw','height': '350px', 'backgroundColor':'white','margin': '10px' };
// const styleCardPoster = {'height': '250px', 'width':'22vw','objectFit':'cover' };

const Card = ({film})=>{

    return (<div className="customCard">
                <div className="titlecard">{film.Title}</div>
                <div>{film.Year}</div>
                <img className="posterCard" src={film.Poster} alt="poster of {film.Title}"/>
                <div className='description'>{film.Description}</div>
           </div>);
}

export default Card;
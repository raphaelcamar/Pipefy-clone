import React, { useState } from 'react';
import './styles.css'

function Card(props){

    return (
    
            <div className='card'>
                <img src={props.image} alt=''/>
                <div className="cardText">
                <h2 className='title'>{props.title}</h2>
                <p className="description">{props.description}</p>
            <a href="#">Saber mais</a>
            </div>
            <div className="button">
            <button>Utilize este modelo</button>
            </div>
            </div>
    
    );
}

export default Card;
import React from 'react';
import "./Card.css"

function Card(props) {
    return (
        <div className="card click-item">
            <img className="card-img-top card-img" src={props.image} alt={props.name} onClick={()=>props.clickHandler(props.id)} data-saved={props.saved} data-id={props.id}/>
        </div>
    )
};

export default Card;
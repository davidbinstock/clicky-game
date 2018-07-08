import React from 'react';
import "./CardContainer.css"

function CardContainer(props) {
    return (
        <div className="container card-container">
            {props.children}
        </div>
    )
};

export default CardContainer;
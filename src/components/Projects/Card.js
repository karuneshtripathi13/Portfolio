import React from 'react';
import PropTypes from 'prop-types';
import './project.css'
const Card = ({project}) => {
    const {id, photo, text} = project;
    return (
        <div id={`card-${id}`} className="card">
            <img className="photopj" src={photo} alt="projectphoto" />
            <div className="details">
                    {text}
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
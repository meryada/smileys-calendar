import React from 'react';
import { Link } from 'react-router-dom';

const StatusAdd = props => {
    return (
        <Link to='/form'>
        <h2> + Añadir Estado :D</h2>
        </Link>
    )
};

export { StatusAdd };
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StatusAdd.scss';

const StatusAdd = props => {
    return (
        <Link to='/form'>
        <div className='add__container'>
        <h2 className='add__title'> + :D</h2>
        </div>
        </Link>
    )
};

export { StatusAdd };
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StatusAdd.scss';

const StatusAdd = props => {
  return (
    <Link to='/form'>
      <div className='add__container'>
        <div className='add__btn'>
          <h2 className='add__title'>+</h2>
        </div>
      </div>
    </Link>
  )
};

export { StatusAdd };
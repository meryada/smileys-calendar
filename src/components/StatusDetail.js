import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StatusDetail.scss';

const StatusDetail = props => {
  const { routerProps, allStatus } = props
  const id = routerProps.match.params.id;
  const state = allStatus.filter(item => item.newId == id);
  if (state[0]) {
    return (
      <div className='detail__container'>
        <p className='detail__id'>ID/#{id}</p>
        <h2 className='detail__date'>{state[0].currentDay}</h2>
        <p className='detail__status'>{state[0].currentStatus === 'triste' ? <i className="fas fa-sad-tear fa-4x"></i> : <i className="fas fa-grin-hearts fa-4x"></i>}</p>
        <p className='detail__message'>{state[0].currentMessage}</p>
        <Link to="/">
          <button className='input__back' type='button' value='Cancelar'>Volver al listado</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <p>este stado no exite</p>
        <Link to="/">
          <button className='input__back' type='button' value='Cancelar'>Volver al listado</button>
        </Link>
      </div>
    )
  }
};

export { StatusDetail };
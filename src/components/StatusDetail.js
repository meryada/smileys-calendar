import React from 'react';
import { Link } from 'react-router-dom';

const StatusDetail = props => {
  const {routerProps, allStatus} = props
  const id = routerProps.match.params.id;
  const state = allStatus.filter(item => item.newId == id);
  if(state[0]) {
    return (
      <div>
        <p>ID/#{id}</p>
      <h2>{state[0].currentDay}</h2>
      <p>{state[0].currentStatus === 'triste'?<i className="fas fa-sad-tear"></i>:<i className="fas fa-grin-hearts"></i>}</p>
      <p>{state[0].currentMessage}</p>
      <Link to="/">
      <button type='button' value='Cancelar'>Volver al listado</button>
    </Link>
    </div>
  )
  } else {
    return(
      <p>este stado no exite</p>
    )
  }
};

export { StatusDetail };
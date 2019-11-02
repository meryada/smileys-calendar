import React from 'react';
import { Link } from 'react-router-dom';

const StatusDetail = props => {
  const {routerProps, allStatus} = props
  const id = routerProps.match.params.id;
  console.log(id)
  console.log(allStatus.length)
  const state = allStatus.filter(item => item.newId == id);
  console.log(state)
    return (
        <div>
        <h2>{state[0].currentDay}</h2>
        <p>{state[0].currentStatus}</p>
        <p>ID/#{id}</p>
        <Link to="/">
        <button type='button' value='Cancelar'>Volver al listado</button>
      </Link>
      </div>
    )
};

export { StatusDetail };
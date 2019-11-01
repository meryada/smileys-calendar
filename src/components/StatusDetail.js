import React from 'react';
import { Link } from 'react-router-dom';

const StatusDetail = props => {
    return (
        <div>
        <h2>Soy el detalle del estado</h2>
        <Link to="/">
        <button type='button' value='Cancelar'>Volver al listado</button>
      </Link>
      </div>
    )
};

export { StatusDetail };
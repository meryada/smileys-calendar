import React from 'react';
import { Link } from 'react-router-dom';

const StatusForm = props => {
  const { getDate, getStatus, handleSubmit } = props
  return (
    <div>
      <h2>Formulario nuevo Estado</h2>
      <fieldset>Formulario
          <form>
          <label>Fecha </label>
          <input type='date' id='date' name='date' onChange={getDate} />
          <label>Estado</label>
          <input type='radio' id='feliz' onChange={getStatus} name='status' value='feliz' /> : )
          <input type='radio' id='triste' onChange={getStatus} name='status' value='triste' />  : (
          <Link to="/">
            <button type="button"  value='Añadir' onClick={handleSubmit}>Añadir</button>
          </Link>
          <Link to="/">
            <button type='button' value='Cancelar'>Cancelar</button>
          </Link>
        </form>
      </fieldset>
    </div>
  )
};

export { StatusForm }; 
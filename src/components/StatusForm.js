import React from 'react';

const StatusForm = props => {
  const { getDate, getStatus, handleSubmit } = props
  return (
    <div>
      <h2>Formulario nuevo Estado</h2>
      <fieldset>Formulario
          <form onSubmit={handleSubmit}>
            <label>Fecha </label>
              <input type='date' id='date' name='date' onChange={getDate} />
            <label>Estado</label>
              <input type='radio' id='feliz' onChange={getStatus} name='status' value='feliz' /> : )
              <input type='radio' id='triste' onChange={getStatus} name='status' value='triste'/>  : (
            <input type='submit' value="Añadir" />
            <input type='button' value='Cancelar'/>
          </form>
      </fieldset>
    </div>
  )
};

export { StatusForm }; 
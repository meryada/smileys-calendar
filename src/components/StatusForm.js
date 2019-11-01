import React from 'react';

const StatusForm = props => {
  const { getDate, getStatus } = props
  return (
    <div>
      <h2>Formulario nuevo Estado</h2>
      <fieldset>Formulario
          <form>
            <label>Fecha
              <input type='date' onChange={getDate} />
            </label>
            <label>Estado
              <input type='radio' onChange={getStatus} name='feliz' value='feliz' /> : )
              <input type='radio' onChange={getStatus} name='triste' value='triste'/>  : (
            </label>
            <input type='submit' value="Añadir" />
            <input type='button' value='Cancelar'/>
          </form>
      </fieldset>
    </div>
  )
};

export { StatusForm }; 
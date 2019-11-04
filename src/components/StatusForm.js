import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StatusForm.scss';

const StatusForm = props => {
  const { getDate, getStatus, handleSubmit, getMessage, disabled, handleDisabled, handleAble } = props
  return (
    <div className='form__container'>
      <form className='form__form'>
        <div className='input__container'>
          <label className='input__label' >Fecha </label>
          <input className='input__input' type='date' id='date' name='date' onChange={getDate} />
        </div>
        <div className='input__container'>
          <label className='input__label'  >Estado</label>
          <input className='input input__radio' type='radio' id='feliz' onChange={getStatus} onClick={handleAble} name='status' value='feliz' /> : )
          <input className='input input__radio' type='radio' id='triste' onChange={getStatus} onClick={handleDisabled} name='status' value='triste' />  : (
            </div>
        <div className='input__container'>
          <label className='input__label' >Mensaje</label>
          <input className='input__input' type='text' id='message' onKeyUp={getMessage} disabled = {disabled === true? true: false}  />
        </div>
        {/* <Button
        handleSubmit={handleSubmit}
        /> */}
        <Link to="/">
          <div className='input__container'>
            <button className='input__submit' type="button" value='Añadir' onClick={handleSubmit}>Añadir</button>
          </div>
        </Link>
        <Link to="/">
          <div className='input__container'>
            <button className='input__cancel' type='button' value='Cancelar'>Cancelar</button>
          </div>
        </Link>
      </form>
    </div >
  )
};

export { StatusForm }; 
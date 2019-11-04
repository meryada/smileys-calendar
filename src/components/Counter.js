import React from 'react';
import '../styles/Counter.scss';

const Counter = props => {
  const { allStatus } = props;
  if (allStatus.length === 1) {
    return (
      <div className='counter__container'>
        <p className='counter__content'>Has guardado {allStatus.length} estado de ánimo!</p>
      </div>
    )
  } else {
    return (
      <div className='counter__container'>
        <p className='counter__content'>Has guardado {allStatus.length} estados de ánimo!</p>
      </div>
    )
  }
}

export { Counter }
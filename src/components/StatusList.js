import React from 'react';
import { Counter } from './Counter';
import { Link } from 'react-router-dom';
import '../styles/StatusList.scss';

const StatusList = props => {
  const { allStatus } = props;
  if (allStatus[0]) {
    return (
      <div className='statuslist__container'>
        <h2 className='statuslist__title'>Calendario</h2>
        <Counter 
        allStatus={allStatus}
        />
        <ul className='statuslist__list'>
          {allStatus.map((status, index) => {
            return (
              <Link to={`/detail/${index+1}`}>
              <li className='statuslist__list-item' key={index}>
                <p className='statuslist__content'>{status.currentStatus === 'triste'?<i className="fas fa-sad-tear fa-5x"></i>:<i className="fas fa-grin-hearts fa-5x"></i>}</p>
              </li>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Calendario</h2>
        <p>no hay estados, añade uno!</p>
      </div>
    )
  }
}

export { StatusList };
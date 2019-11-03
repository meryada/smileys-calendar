import React from 'react';
import { Counter } from './Counter';
import { Link } from 'react-router-dom';

const StatusList = props => {
  const { allStatus } = props;
  if (allStatus[0]) {
    return (
      <div>
        <h2>Calendario</h2>
        <Counter 
        allStatus={allStatus}
        />
        <ul>
          {allStatus.map((status, index) => {
            return (
              <Link to={`/detail/${index+1}`}>
              <li key={index}>
                <p>{status.currentStatus === 'triste'?<i className="fas fa-sad-tear"></i>:<i className="fas fa-grin-hearts"></i>}</p>
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
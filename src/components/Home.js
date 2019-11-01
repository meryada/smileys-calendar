import React from 'react';
import { StatusAdd } from './StatusAdd';
import { StatusList } from './StatusList';

const Home = props => {
  const { allStatus } = props;
  return (
    <React.Fragment>
      <h1>Smileys Calendar</h1>
      <StatusAdd />
      <StatusList
        allStatus={allStatus}
      />
    </React.Fragment >
  )
}

export { Home };
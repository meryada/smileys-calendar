import React from 'react';
import { StatusAdd } from './StatusAdd';
import { StatusList } from './StatusList';
import { StatusForm } from './StatusForm';
import { StatusDetail} from './StatusDetail';

const Home = props => {
  const { getDate, getStatus } = props;
  return (
    <React.Fragment>
      <h1>Smileys Calendar</h1>
      <StatusAdd />
      <StatusList />
      <StatusForm 
      getDate={getDate}
      getStatus={getStatus}
      />
      <StatusDetail />
    </React.Fragment >
  )
}

export { Home };
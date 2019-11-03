import React from 'react';
import { StatusAdd } from './StatusAdd';
import { StatusList } from './StatusList';
import '../styles/Home.scss';

const Home = props => {
  const { allStatus } = props;
  return (
    <React.Fragment>
      <div className='app__header'>
      <img className='app__header-image' src='' alt='smiley calendar'/>
      <h1 className='app_header-title'>Smileys Calendar</h1>
      </div>
      <StatusAdd />
      <StatusList
        allStatus={allStatus}
      />
    </React.Fragment >
  )
}

export { Home };
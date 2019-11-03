import React from 'react';
import { StatusAdd } from './StatusAdd';
import { StatusList } from './StatusList';
import '../styles/Home.scss';
import logo from '../images/logo_smiley_calendar.png';

const Home = props => {
  const { allStatus } = props;
  return (
    <React.Fragment>
      <div className='app__header'>
      <img className='app__header-image' src={logo} alt='smiley calendar'></img>
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
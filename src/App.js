import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { StatusForm } from './components/StatusForm';
import { StatusDetail } from './components/StatusDetail';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allStatus: [],
      currentStatus: {
        currentDay: '',
        currentStatus: ''
      }
    }
    this.getDate = this.getDate.bind(this)
    this.getStatus = this.getStatus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getDate(event) {
    const newDate = event.currentTarget.value;
    this.setState(prevState => {
      return {
        currentStatus: { ...prevState.currentStatus, currentDay: newDate }
      }
    })
  }

  getStatus(event) {
    const newStatus = event.currentTarget.value;
    this.setState(prevState => {
      return {
        currentStatus: { ...prevState.currentStatus, currentStatus: newStatus }
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.allStatus)
    const { currentStatus } = this.state
    this.setState(prevState => {
      return {
        allStatus: [...prevState.allStatus, currentStatus]
      }

    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>{
            return (
              <Home
            allStatus={this.state.allStatus}
            getDate={this.getDate}
            getStatus={this.getStatus}
            handleSubmit={this.handleSubmit}
          />
            )
          }} />
          <Route path='/form' render={()=> {
            return(
              <StatusForm
              getDate={this.getDate}
              getStatus={this.getStatus}
              handleSubmit={this.handleSubmit}
            />
            )
          }}/>
          <Route path='/detail' component={StatusDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;

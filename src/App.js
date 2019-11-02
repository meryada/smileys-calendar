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
        currentStatus: '',
        currentMessage:''
      }
    }
    this.getDate = this.getDate.bind(this)
    this.getStatus = this.getStatus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setLocal = this.setLocal.bind(this)
    this.getMessage = this.getMessage.bind(this)
    this.handleGetLocalStorage=this.handleGetLocalStorage.bind(this)
  
  }

  componentDidMount() {
    this.handleGetLocalStorage()
  }
  setLocal = () => {
    localStorage.setItem('allStatus', JSON.stringify(this.state.allStatus))
  }
  handleGetLocalStorage = () => {
    const savedStatus = JSON.parse(localStorage.getItem('allStatus'));
    this.setState(() => {
      return ({
        allStatus: savedStatus
      })
    }
    )
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
    const newId = this.state.allStatus.length + 1;
    this.setState(prevState => {
      return {
        currentStatus: { ...prevState.currentStatus, currentStatus: newStatus, newId },
      }
    })
  }

  getMessage(event) {
    const newMessage = event.currentTarget.value;
    console.log(newMessage)
    this.setState(prevState => {
      return {
        currentStatus: {...prevState.currentStatus, currentMessage: newMessage},
      }
    })
  }

  handleSubmit(event) {
    //event.preventDefault(); 
    // si añado el preventDefault no funciona el link de volver 
    // console.log(this.state.allStatus)
    const { currentStatus } = this.state
    this.setState(prevState => {
      return {
        allStatus: [...prevState.allStatus, currentStatus]
      }
    },
      () => { this.setLocal(); },
    )
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <Home
                allStatus={this.state.allStatus}
                getDate={this.getDate}
                getStatus={this.getStatus}
                handleSubmit={this.handleSubmit}
              />
            )
          }} />
          <Route path='/form' render={() => {
            return (
              <StatusForm
                getDate={this.getDate}
                getStatus={this.getStatus}
                getMessage={this.getMessage}
                handleSubmit={this.handleSubmit}
              />
            )
          }} />
          <Route path='/detail/:id' render={(routerProps) => {
            return (
              <StatusDetail
                allStatus={this.state.allStatus}
                routerProps={routerProps}
              />
            )
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;

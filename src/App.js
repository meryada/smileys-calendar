import React from 'react';
import { Home } from './components/Home';
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
    this.getStatus=this.getStatus.bind(this)
  }

  getDate(event) {
    const newDate = event.currentTarget.value;
    console.log(newDate)
    this.setState(prevState => {
      return {
        currentStatus: {...prevState.currentStatus, currentDay: newDate}
      }
    })
  }

  getStatus(event) {
    const newStatus = event.currentTarget.value;
    console.log(newStatus)
    this.setState(prevState => {
      return {
        currentStatus:{...prevState.currentStatus, currentStatus: newStatus} 
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Home
          getDate={this.getDate}
          getStatus={this.getStatus}
        />
      </div>
    );
  }
}

export default App;

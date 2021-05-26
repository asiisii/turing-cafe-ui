import React, { Component } from 'react';
import getReservations from '../apiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: '',
      error: ''
    }
  }

  componentDidMount = () => {
    getReservations()
      .then(data => this.setState({reservations: data}))
      .then(() => console.log(this.state.reservations))
      .catch(() => this.setState({error: 'Oops something went wrong!'}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;

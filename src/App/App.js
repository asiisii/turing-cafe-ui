import React, { Component } from 'react';
import getReservations from '../apiCalls'
import Reservations from '../Reservations/Reservation'
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
    const {reservations, error} = this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Reservations reservations={reservations}
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;

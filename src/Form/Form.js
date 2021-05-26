import React from 'react'
import './Form.css'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <>
        <input
          className='name'
          type='text'
          name='name'
          placeholder='Name'
          required
          value={this.state.name}
        />
        <input
          className='date'
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          required
          value={this.state.date}
        />
        <input
          className='time'
          type='text'
          name='time'
          placeholder='Time (hh:mm)'
          required
          value={this.state.time}
        />
        <input
          className='number'
          type='number'
          name='number'
          placeholder='Number of guests'
          required
          value={this.state.name}
        />
        <button>Make reservation</button>
      </>
    )
  }
}
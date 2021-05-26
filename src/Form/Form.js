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
          className='name'
          type='text'
          name='name'
          placeholder='Name'
          required
          value={this.state.name}
        />
        <input
          className='name'
          type='text'
          name='name'
          placeholder='Name'
          required
          value={this.state.name}
        />
        <input
          className='name'
          type='text'
          name='name'
          placeholder='Name'
          required
          value={this.state.name}
        />
        <button>Make reservation</button>
      </>
    )
  }
}
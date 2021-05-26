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
        <h1>In form</h1>
      </>
    )
  }
}
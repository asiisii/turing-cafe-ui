import React from 'react'
import './Card.css'

export default function Card({name, date, time, number}) {
  return (
    <div className='card'>
      <p className='name'>{name}</p>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
    </div>
  )
}
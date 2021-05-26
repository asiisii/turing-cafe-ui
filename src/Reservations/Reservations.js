import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

export default function Reservations({reservations}) {
  console.log(reservations);
  const cards = reservations.map(reservation => {
    return (
      <Card />
    )
  })
  return (
    <h1>{cards}</h1>
  )
}
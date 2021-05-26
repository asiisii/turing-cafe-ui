import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

export default function Reservations({reservations}) {
  console.log(reservations);
  const cards = reservations.map(reservation => {
    return (
      <Card 
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })
  return (
    <div>
      {cards}
    </div>
  )
}
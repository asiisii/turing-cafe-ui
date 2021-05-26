const getReservations = async () => {
  const res = await fetch('http://localhost:3001/api/v1/reservations')
  return await res.json()
}

export default getReservations
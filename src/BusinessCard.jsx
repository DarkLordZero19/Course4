import React from 'react'

function BusinessCard() {
  const name = "Иван Иванов"
  const profession = "Frontend-разработчик"
  const email = "ivan@example.com"

return (
<h3>{name}</h3>
<p>{profession}</p>
<p>Email: {email}</p>
  )
}

export default BusinessCard

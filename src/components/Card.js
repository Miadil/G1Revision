import React from "react"

const Card = ({ name, image, id }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  )
}
export default Card

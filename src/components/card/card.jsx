import React from "react";
import "./card.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img alt="peep" src={`https://robohash.org/${props.peep.id}?set=set2&size=180x250`} />
      <h1>{props.peep.name}</h1>
      <p>{props.peep.email}</p>
    </div>
  )
}

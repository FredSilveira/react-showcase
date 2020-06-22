import React from "react";
import "./carList.css";
import { Card } from "./../card/card"

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.peeps.map(e => (
            <Card key={e.id} peep={e} />
      ))}
    </div>
  )
}

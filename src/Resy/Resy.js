import React from "react";
export const Resy = (props) => {
  return (
    <div className="resy-card" key={props.id}>
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>{props.time} pm</p>
      <p>Number of Guests:{props.number}</p>
      <button>Cancel</button>
    </div>
  );
};

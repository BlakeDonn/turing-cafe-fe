import React from "react";
export const Resy = (props) => {
  return (
    <div key={props.id}>
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.number}</p>
      <button>Cancel</button>
    </div>
  );
};

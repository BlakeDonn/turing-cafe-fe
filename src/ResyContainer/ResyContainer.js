import React from "react";
import {Resy} from "../Resy/Resy";

export const ResyContainer = (props) => {
  if (props.reservations.length) {
    const allResys = props.reservations.map((res) => <Resy {...res} />);
    return <div className="container">{allResys}</div>;
  } else {
    return <>Loading</>;
  }
};

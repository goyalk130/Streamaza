import React from "react";
import "./Button.css";
const Button = (props) => {
  return <a href={props.trailer}><button className="btn default">Watch Trailer</button></a>;
};

export default Button;

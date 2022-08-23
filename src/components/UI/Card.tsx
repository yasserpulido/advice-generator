import React from "react";

import "./Card.css";

interface Props {
  children: React.ReactNode;
}

export const Card: React.FC<Props> = (props) => {
  return <div className="card">{props.children}</div>;
};

import React from "react";
import "./Card.css";
const CardComponent = (props) => {
  const { content } = props;
  return (
    <div className="item">
      <img src={`${content.images["downsized"].url}`} alt="Laugh" />
    </div>
  );
};

export const Card = CardComponent;

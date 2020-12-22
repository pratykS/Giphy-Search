import React from "react";
const CardComponent = (props) => {
  const { content } = props;
  //   console.log("Card", content.embed_url);
  return (
    <div>
      <img
        src={`${content.images["preview_gif"].url}`}
        width={100}
        height={100}
        alt="Laugh"
      ></img>
    </div>
  );
};

export const Card = CardComponent;

import React from "react";
const CardComponent = (props) => {
  const { content } = props;
  //   console.log("Card", content.embed_url);
  return (
    <div style={{ display: "inline-block", padding: "10px" }}>
      <img
        src={`${content.images["preview_gif"].url}`}
        width={200}
        height={200}
        alt="Laugh"
      ></img>
    </div>
  );
};

export const Card = CardComponent;

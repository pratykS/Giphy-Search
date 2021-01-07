import React from "react";
import { Card } from "../../components";
import "./List.css";
const ListComponent = (props) => {
  const { data } = props;
  return (
    <div className="masonry-grid">
      {data &&
        data.data.map((d, i) => {
          return <Card content={d} key={i}></Card>;
        })}
    </div>
  );
};

export const List = ListComponent;

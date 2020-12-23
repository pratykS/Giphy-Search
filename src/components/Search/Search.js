import React from "react";
import "../Search/Search.css";

const SearchComponent = (props) => {
  const { text, setText } = props;

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <input
      className="search-input"
      type="text"
      value={text}
      onChange={onChangeHandler}
      placeholder="Type here to search awesome gifs !"
    ></input>
  );
};

export const Search = SearchComponent;

import React, { useState, useEffect } from "react";
import "./App.css";
import { Search, List } from "./components";
import { getGifs } from "./services/giphyservice";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);

  const getGifAsync = async (text) => {
    if (Boolean(text)) {
      const result = await getGifs(text);
      const gifs = await result.json();
      return gifs;
    }
  };

  const onClickHandler = () => {
    getGifAsync(text).then((d) => setData(d));
  };

  return (
    <div className="App">
      <Search text={text} setText={setText}></Search>
      <button onClick={onClickHandler}>Search</button>
      <List data={data} setData={setData}></List>
    </div>
  );
}

export default App;

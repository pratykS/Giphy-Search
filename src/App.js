import React, { useEffect, useState } from "react";
import "./App.css";
import { Search, List } from "./components";
import { getGifs } from "./services/giphyservice";
import useDebounce from "./utils/debounce";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);

  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    async function fetchGifs(debouncedText) {
      if (debouncedText) {
        const result = await getGifAsync(debouncedText);
        setData(result);
      } else {
        setData(null);
      }
    }
    fetchGifs(debouncedText);
  }, [debouncedText]);

  const getGifAsync = async (text) => {
    if (Boolean(text)) {
      const result = await getGifs(text);
      const gifs = await result.json();
      return gifs;
    }
  };

  return (
    <div className="App">
      <div style={{ padding: "0px 30px" }}>
        <Search text={text} setText={setText}></Search>
        <List data={data} setData={setData}></List>
      </div>
    </div>
  );
}

export default App;

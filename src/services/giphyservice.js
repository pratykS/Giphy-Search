import { config } from "../config/dev";

const key = config["key.giphy"];
const origin = config["url.giphy"];

export const getGifs = async (text) => {
  const url = `${origin}search?q=${text}&api_key=${key}`;
  const result = await fetch(url);
  return result;
};

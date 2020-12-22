const SearchComponent = (props) => {
  const { text, setText } = props;

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return <input type="text" value={text} onChange={onChangeHandler}></input>;
};

export const Search = SearchComponent;

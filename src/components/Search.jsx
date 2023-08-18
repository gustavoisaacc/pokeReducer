import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setFilter } from "../actions";
import { useState } from "react";

function Search() {
  const dispatch = useDispatch();
  const [serch, setSearch] = useState("");
  const handelSerch = (e) => {
    setSearch(e.target.value);
    dispatch(setFilter(serch));
  };

  return (
    <Input.Search
      placeholder="Buscar..."
      value={serch}
      onChange={handelSerch}
    />
  );
}

export default Search;

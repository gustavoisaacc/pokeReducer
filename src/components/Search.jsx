import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setFilter } from "../actions";

function Search() {
  const dispatch = useDispatch();
  const handelSerch = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return <Input.Search placeholder="Buscar..." onChange={handelSerch} />;
}

export default Search;

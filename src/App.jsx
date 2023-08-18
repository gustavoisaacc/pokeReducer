import { useEffect } from "react";

import Header from "./components/Header";
import PokemonList from "./components/PokemonList";

import { getPokemon } from "./api";
import { getPokemonWithDetails, setLoading } from "./actions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Spin } from "antd";

const App = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const data = await getPokemon();
      await dispatch(getPokemonWithDetails(data));
      dispatch(setLoading(false));
    };

    fetchPokemon();
  }, [dispatch]);

  return (
    <div className="">
      <Header />
      {loading ? (
        <Spin tip="Loading..." size="large">
          <div className="content" />
        </Spin>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
};

export default App;

// import { useEffect, useState } from "react";
// import { connect } from "react-redux";

// import Header from "./components/Header";
// import PokemonList from "./components/PokemonList";

// import { getPokemon } from "./api";
// import { setPokemons as setPokemonsActions } from "./actions";

// const App = ({ pokemons, setPokemons }) => {
//   // const [pokemons, setPokemons] = useState([]);
//   useEffect(() => {
//     const item = async () => {
//       const data = await getPokemon();
//       setPokemons(data.data.results);
//     };

//     item();
//   }, []);

//   return (
//     <div className="">
//       <Header />
//       <PokemonList pokemons={pokemons} />
//     </div>
//   );
// };

// const mapStateToProp = (state) => ({
//   pokemons: state.pokemons,
// });
// const mapDispachToProp = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value)),
// });

// export default connect(mapStateToProp, mapDispachToProp)(App);

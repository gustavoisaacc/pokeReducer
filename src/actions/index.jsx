import { getPokemonDetail } from "../api";
import { SET_FAVORITE, SET_FILTER, SET_LOADING, SET_POKEMONS } from "./type";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});
export const setFilter = (payload) => ({
  type: SET_FILTER,
  payload,
});

export const getPokemonWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonDetail = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetail(pokemon))
    );

    dispatch(setPokemons(pokemonDetail));
  };

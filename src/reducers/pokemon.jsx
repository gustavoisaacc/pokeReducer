import { SET_FAVORITE, SET_FILTER, SET_POKEMONS } from "../actions/type";

const initialValue = {
  pokemons: [],
  pokemonSearch: [],
};

export const pokemonsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case SET_FAVORITE:
      const newPokemonsList = [...state.pokemons];
      const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = newPokemonsList[currentPokemonIndex].favorite;
        newPokemonsList[currentPokemonIndex].favorite = !isFavorite;
        const p = { ...state, pokemons: newPokemonsList };
        return { ...state, pokemonSearch: p };
      }

    case SET_FILTER:
      const newPokemons = [...state.pokemons];

      const filterPokemon = newPokemons.filter((pokemon) => {
        const textLower = pokemon.name.toLowerCase();
        const serchLower = action.payload.toLowerCase();
        if (textLower.includes(serchLower)) return true;
        return false;
      });

      return { ...state, pokemonSearch: filterPokemon };

    default:
      return state;
  }
};

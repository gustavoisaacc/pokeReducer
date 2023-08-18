import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5 ">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.other["official-artwork"].front_default}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </main>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;

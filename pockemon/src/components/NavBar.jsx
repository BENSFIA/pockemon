import PropTypes from "prop-types";

export default function NavBar({ pokemonList, setPokemonIndex }) {
  const handleClick = (index) => {
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
    setPokemonIndex(index);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

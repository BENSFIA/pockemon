import PropTypes from "prop-types";
export default function NavBar({
  handlePrevious,
  handleNext,
  pokemonIndex,
  pokemonListLength,
}) {
  return (
    <div>
      {pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}
      {pokemonIndex < pokemonListLength - 1 && (
        <button onClick={handleNext}>Suivant</button>
      )}
    </div>
  );
}
NavBar.propTypes = {
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonListLength: PropTypes.number.isRequired,
};

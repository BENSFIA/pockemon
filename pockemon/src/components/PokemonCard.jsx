export default function PokemonCard({ pokemon }) {
  return (
    <>
      <div className="pokemon-card">
        <h2>{pokemon.name}</h2>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
      </div>
    </>
  );
}

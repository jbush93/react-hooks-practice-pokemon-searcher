import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons })
{
  const { id } = pokemons

  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {pokemons.map(function (pokemon)
      {
        return <PokemonCard key={id} pokemon={pokemon} />
      })}
    </Card.Group>
  );
}

export default PokemonCollection;

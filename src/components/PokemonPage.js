import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage()
{
  const [pokemons, setPokemons] = useState([])

  useEffect(function ()
  {
    fetch("http://localhost:3001/pokemon")
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (data)
      {
        return setPokemons(data)
      })
  }, [])

  const [searchInput, setSearchInput] = useState("")
  function handleSearchInput(evt)
  {
    setSearchInput(evt.target.value)
  }

  const filterPokemonList = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  function handleNewPoke(NewPoke)
  {
    setPokemons([...pokemons, NewPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPoke={handleNewPoke} />
      <br />
      <Search searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <br />
      <PokemonCollection pokemons={filterPokemonList} />
    </Container>
  );
}

export default PokemonPage;

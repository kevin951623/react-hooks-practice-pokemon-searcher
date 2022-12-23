import React from "react";
import PokemonPage from "./PokemonPage";
import PokemonCard from "./PokemonCard";
import {useState} from "react"

function App() {
  const [pokemon,setPokemon] = useState([])
  return (
    <div className="App">
      <PokemonPage />
      <PokemonCard 
      pokemon={pokemon} 
      setPokemon={setPokemon}
      />
    </div>
  );
}

export default App;

import React from "react";
import { Card } from "semantic-ui-react";
import {useEffect} from "react"


function PokemonCard({pokemon,setPokemon}) {
  
  const getPokemons = async () => {
    const request = await fetch (" http://localhost:3000/pokemon")
    const response = await request.json()
    setPokemon(response)
  }

  useEffect(() => {
    getPokemons();
  }, [])

  return (
  
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemons.map((pokemon)=>{
            return(key={pokemon.name})
          }
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
